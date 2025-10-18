import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const resetPasswordSchema = z.object({
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export default function ResetPassword() {
  const { updatePassword } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState(false);

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    // Check if we have a valid recovery token
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setValidToken(true);
      } else {
        toast({
          title: "Link inválido ou expirado",
          description: "Por favor, solicite um novo link de recuperação.",
          variant: "destructive",
        });
        navigate("/");
      }
    });
  }, [navigate]);

  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    setLoading(true);
    try {
      await updatePassword(values.password);
      toast({
        title: "Senha alterada!",
        description: "Sua senha foi atualizada com sucesso.",
      });
      navigate("/");
    } catch (error) {
      // Error is handled in AuthContext
    } finally {
      setLoading(false);
    }
  };

  if (!validToken) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Redefinir Senha</CardTitle>
          <CardDescription>
            Digite sua nova senha abaixo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nova Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar Nova Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Alterando..." : "Alterar Senha"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
