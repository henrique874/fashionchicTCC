import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  product_id: string; // UUID in database
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
          const { data: cartData, error: cartError } = await supabase
            .from('cart')
            .select(`
              id,
              product_id,
              quantity,
              size,
              color
            `)
            .eq('user_id', user.id);

          if (cartError) throw cartError;

          if (!cartData || cartData.length === 0) {
            setItems([]);
            setLoading(false);
            return;
          }

          // Get product details for all cart items
          const productIds = cartData.map(item => item.product_id);
          const { data: productsData, error: productsError } = await supabase
            .from('products')
            .select('id, name, price, images')
            .in('id', productIds);

          if (productsError) throw productsError;

          // Create a map of products for quick lookup
          const productsMap = new Map(
            (productsData || []).map(p => [p.id, p])
          );

          // Map cart items with product details
          const mappedItems = cartData.map(item => {
            const product = productsMap.get(item.product_id);
            return {
              id: item.id,
              product_id: item.product_id,
              product_name: product?.name || 'Produto',
              product_price: product?.price || 0,
              product_image: product?.images?.[0] || '',
              quantity: item.quantity,
              size: item.size,
              color: item.color,
            };
          });
          
          setItems(mappedItems);
        } catch (error) {
          console.error('Error loading cart:', error);
          toast({
            title: "Erro ao carregar carrinho",
            description: "Não foi possível carregar os itens do carrinho.",
            variant: "destructive",
          });
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
        // Check if item already exists in cart
        const existingItem = items.find(
          i => i.product_id === item.product_id && 
               i.size === item.size && 
               i.color === item.color
        );

        if (existingItem) {
          // Update quantity instead of adding duplicate
          await updateQuantity(existingItem.id, existingItem.quantity + item.quantity);
          return;
        }

        // Verify product exists in database
        const { data: productData, error: productError } = await supabase
          .from('products')
          .select('id')
          .eq('id', item.product_id)
          .maybeSingle();

        if (productError) throw productError;
        
        if (!productData) {
          toast({
            title: "Produto não encontrado",
            description: "Este produto não está mais disponível.",
            variant: "destructive",
          });
          return;
        }

        // Add to database
        const { data, error } = await supabase
          .from('cart')
          .insert({
            user_id: user.id,
            product_id: item.product_id,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          })
          .select()
          .single();

        if (error) throw error;
        
        const newItem = {
          ...item,
          id: data.id,
        };
        setItems([...items, newItem]);
      } else {
        // Check if item exists in local cart
        const existingItemIndex = items.findIndex(
          i => i.product_id === item.product_id && 
               i.size === item.size && 
               i.color === item.color
        );

        if (existingItemIndex > -1) {
          // Update quantity
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += item.quantity;
          setItems(updatedItems);
        } else {
          // Add to local state
          const newItem = {
            ...item,
            id: crypto.randomUUID(),
          };
          setItems([...items, newItem]);
        }
      }

      toast({
        title: "Produto adicionado!",
        description: `${item.product_name} foi adicionado à sacola`,
      });
    } catch (error) {
      console.error('Error adding item:', error);
      toast({
        title: "Erro ao adicionar produto",
        description: "Tente novamente ou faça login para continuar.",
        variant: "destructive",
      });
    }
  };

  const removeItem = async (id: string) => {
    try {
      if (user) {
        const { error } = await supabase
          .from('cart')
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
          .from('cart')
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
          .from('cart')
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