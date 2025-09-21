import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import QRCode from "qrcode";
import { CreditCard, Smartphone, Copy } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const checkoutSchema = z.object({
  // Shipping
  fullName: z.string().min(2, "Nome completo é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  cep: z.string().length(8, "CEP deve ter 8 dígitos"),
  street: z.string().min(3, "Endereço é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(2, "Bairro é obrigatório"),
  city: z.string().min(2, "Cidade é obrigatória"),
  state: z.string().length(2, "Estado deve ter 2 letras"),
  
  // Payment
  paymentMethod: z.enum(["credit", "debit", "pix"]),
  
  // Card details (conditional)
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
});

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("credit");
  const [pixQrCode, setPixQrCode] = useState<string>("");
  const [pixCode, setPixCode] = useState<string>("");

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: user?.email || "",
      phone: "",
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: "credit",
    },
  });

  const generatePixPayment = async () => {
    // Generate PIX code (simplified - in production, integrate with payment provider)
    const pixKey = "00020126360014BR.GOV.BCB.PIX0114fashionchic.com";
    const amount = total.toFixed(2);
    const txId = crypto.randomUUID().substring(0, 8);
    const pixPayload = `${pixKey}52040000530398654${amount.length.toString().padStart(2, '0')}${amount}5802BR6009SAO PAULO62${txId.length + 4}0${txId.length}${txId}6304`;
    
    setPixCode(pixPayload);
    
    // Generate QR Code
    try {
      const qrCodeUrl = await QRCode.toDataURL(pixPayload);
      setPixQrCode(qrCodeUrl);
    } catch (error) {
      console.error("Error generating QR Code:", error);
    }
  };

  const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
    if (!user) {
      toast({
        title: "Faça login para continuar",
        description: "Você precisa estar logado para finalizar a compra",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Validate card details if payment is credit/debit
      if (values.paymentMethod !== "pix") {
        if (!values.cardNumber || !values.cardName || !values.cardExpiry || !values.cardCvv) {
          toast({
            title: "Dados do cartão incompletos",
            description: "Por favor, preencha todos os dados do cartão",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
      }

      // Create order in database
      const orderData = {
        user_id: user.id,
        total,
        status: values.paymentMethod === "pix" ? "pending_payment" : "processing",
        payment_method: values.paymentMethod,
        shipping_address: {
          fullName: values.fullName,
          phone: values.phone,
          cep: values.cep,
          street: values.street,
          number: values.number,
          complement: values.complement,
          neighborhood: values.neighborhood,
          city: values.city,
          state: values.state,
        },
        items: items,
      };

      const { data: order, error } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (error) throw error;

      // Clear cart
      await clearCart();

      toast({
        title: "Pedido realizado com sucesso!",
        description: `Pedido #${order.id.substring(0, 8)} foi confirmado`,
      });

      // Redirect to order confirmation
      navigate(`/pedido/${order.id}`);
    } catch (error: any) {
      toast({
        title: "Erro ao processar pedido",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Código PIX copiado!",
      description: "Cole o código no app do seu banco",
    });
  };

  if (items.length === 0) {
    navigate("/carrinho");
    return null;
  }

  return (
    <main className="py-8">
      <div className="container">
        <h1 className="font-heading text-3xl font-bold mb-8">Finalizar Compra</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Shipping Information */}
                <div className="card p-6 space-y-4">
                  <h2 className="font-heading text-xl font-bold">Informações de Entrega</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="11999999999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CEP</FormLabel>
                          <FormControl>
                            <Input placeholder="00000000" maxLength={8} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="street"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Endereço</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="complement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Complemento</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="neighborhood"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bairro</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cidade</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estado</FormLabel>
                          <FormControl>
                            <Input placeholder="SP" maxLength={2} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="card p-6 space-y-4">
                  <h2 className="font-heading text-xl font-bold">Forma de Pagamento</h2>
                  
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => {
                              field.onChange(value);
                              setPaymentMethod(value);
                              if (value === "pix") {
                                generatePixPayment();
                              }
                            }}
                            defaultValue={field.value}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2 p-3 border rounded-lg">
                              <RadioGroupItem value="credit" id="credit" />
                              <Label htmlFor="credit" className="flex items-center gap-2 flex-1 cursor-pointer">
                                <CreditCard className="h-5 w-5" />
                                Cartão de Crédito
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 p-3 border rounded-lg">
                              <RadioGroupItem value="debit" id="debit" />
                              <Label htmlFor="debit" className="flex items-center gap-2 flex-1 cursor-pointer">
                                <CreditCard className="h-5 w-5" />
                                Cartão de Débito
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 p-3 border rounded-lg">
                              <RadioGroupItem value="pix" id="pix" />
                              <Label htmlFor="pix" className="flex items-center gap-2 flex-1 cursor-pointer">
                                <Smartphone className="h-5 w-5" />
                                PIX
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Card Details */}
                  {(paymentMethod === "credit" || paymentMethod === "debit") && (
                    <div className="space-y-4 pt-4">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número do Cartão</FormLabel>
                            <FormControl>
                              <Input placeholder="0000 0000 0000 0000" maxLength={16} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome no Cartão</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="cardExpiry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Validade</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/AA" maxLength={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cardCvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input placeholder="000" maxLength={3} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <p className="text-xs text-muted-foreground">
                        Parcelamento em até 10x sem juros
                      </p>
                    </div>
                  )}
                  
                  {/* PIX Payment */}
                  {paymentMethod === "pix" && pixQrCode && (
                    <div className="space-y-4 pt-4">
                      <div className="text-center">
                        <img src={pixQrCode} alt="QR Code PIX" className="mx-auto w-64 h-64" />
                        <p className="text-sm text-muted-foreground mt-2">
                          Escaneie o QR Code com o app do seu banco
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Ou copie o código PIX:</Label>
                        <div className="flex gap-2">
                          <Input value={pixCode} readOnly className="font-mono text-xs" />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={copyPixCode}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        <p className="font-medium">Instruções:</p>
                        <ol className="list-decimal list-inside mt-2 space-y-1 text-muted-foreground">
                          <li>Abra o app do seu banco</li>
                          <li>Escolha pagar com PIX</li>
                          <li>Escaneie o QR Code ou cole o código</li>
                          <li>Confirme o pagamento</li>
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processando..." : "Confirmar Pedido"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 space-y-4 sticky top-4">
              <h2 className="font-heading text-xl font-bold">Resumo do Pedido</h2>
              
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.product_image}
                      alt={item.product_name}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.color} / {item.size} / Qtd: {item.quantity}
                      </p>
                      <p className="text-sm font-bold">
                        R$ {(item.product_price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}