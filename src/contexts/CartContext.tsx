import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from './AuthContext';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  product_id: number;
  product_name: string;
  product_price: number;
  product_image: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  items: CartItem[];
  loading: boolean;
  addItem: (item: Omit<CartItem, 'id'>) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Load cart items from localStorage or database
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        // Load from database
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('cart_items')
            .select('*')
            .eq('user_id', user.id);

          if (error) throw error;
          setItems(data || []);
        } catch (error) {
          console.error('Error loading cart:', error);
        } finally {
          setLoading(false);
        }
      } else {
        // Load from localStorage for non-authenticated users
        const localCart = localStorage.getItem('cart');
        if (localCart) {
          setItems(JSON.parse(localCart));
        }
      }
    };

    loadCart();
  }, [user]);

  // Save to localStorage when items change (for non-authenticated users)
  useEffect(() => {
    if (!user && items.length > 0) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, user]);

  const addItem = async (item: Omit<CartItem, 'id'>) => {
    try {
      if (user) {
        // Add to database
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            ...item,
            user_id: user.id,
          })
          .select()
          .single();

        if (error) throw error;
        setItems([...items, data]);
      } else {
        // Add to local state
        const newItem = {
          ...item,
          id: crypto.randomUUID(),
        };
        setItems([...items, newItem]);
      }

      toast({
        title: "Produto adicionado!",
        description: `${item.product_name} foi adicionado à sacola`,
      });
    } catch (error) {
      toast({
        title: "Erro ao adicionar produto",
        variant: "destructive",
      });
    }
  };

  const removeItem = async (id: string) => {
    try {
      if (user) {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', id);

        if (error) throw error;
      }
      
      setItems(items.filter(item => item.id !== id));
      
      toast({
        title: "Produto removido",
        description: "Item removido da sacola",
      });
    } catch (error) {
      toast({
        title: "Erro ao remover produto",
        variant: "destructive",
      });
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity < 1) return;

    try {
      if (user) {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('id', id);

        if (error) throw error;
      }
      
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    } catch (error) {
      toast({
        title: "Erro ao atualizar quantidade",
        variant: "destructive",
      });
    }
  };

  const clearCart = async () => {
    try {
      if (user) {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id);

        if (error) throw error;
      }
      
      setItems([]);
      localStorage.removeItem('cart');
    } catch (error) {
      toast({
        title: "Erro ao limpar carrinho",
        variant: "destructive",
      });
    }
  };

  const total = items.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      loading,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};