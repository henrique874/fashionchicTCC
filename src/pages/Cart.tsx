import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <main className="py-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold mb-8">Sacola de Compras</h1>
          
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Sua sacola está vazia</p>
            <Link to="/">
              <Button>Continuar Comprando</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8">
      <div className="container">
        <h1 className="font-heading text-3xl font-bold mb-8">Sacola de Compras</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card p-6">
                <div className="flex gap-4">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-24 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium">{item.product_name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Cor: {item.color}</span>
                      <span>Tamanho: {item.size}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="font-bold">
                          R$ {(item.product_price * item.quantity).toFixed(2).replace(".", ",")}
                        </span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 space-y-4 sticky top-4">
              <h2 className="font-heading text-xl font-bold">Resumo do Pedido</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-muted-foreground">Calcular no checkout</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
              
              <Link to="/checkout" className="block">
                <Button className="w-full">
                  Finalizar Compra
                </Button>
              </Link>
              
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </Link>
              
              <p className="text-xs text-muted-foreground text-center">
                Parcelamento em até 10x sem juros
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}