import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Heart, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Donation = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [clothingType, setClothingType] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Faça login para continuar",
        description: "Você precisa estar logado para doar roupas.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const donorName = formData.get("name") as string;
      const donorEmail = formData.get("email") as string;
      const donorPhone = formData.get("phone") as string;
      const description = formData.get("description") as string;

      if (!imageFile) {
        toast({
          title: "Erro",
          description: "Por favor, adicione uma foto da roupa.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (!clothingType || !size || !condition) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Upload image to a temporary location (using base64 for now)
      // In a real scenario, you'd upload to Supabase Storage
      const imageUrl = imagePreview;

      const { error } = await supabase.from("donations").insert({
        user_id: user.id,
        donor_name: donorName,
        donor_email: donorEmail,
        donor_phone: donorPhone,
        clothing_type: clothingType,
        size: size,
        condition: condition,
        image_url: imageUrl,
        description: description || null,
        status: "pending",
      });

      if (error) throw error;

      toast({
        title: "Doação registrada!",
        description: "Obrigado por contribuir. Entraremos em contato em breve.",
      });

      navigate("/doacoes");
    } catch (error) {
      console.error("Error submitting donation:", error);
      toast({
        title: "Erro ao registrar doação",
        description: "Não foi possível registrar sua doação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-16">
      <div className="container max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Doação</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Doe Roupas
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ajude quem precisa doando roupas em bom estado. Preencha o formulário abaixo
            com as informações da peça que deseja doar.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações da Doação</CardTitle>
            <CardDescription>
              Preencha todos os campos para registrar sua doação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome do doador */}
              <div className="space-y-2">
                <Label htmlFor="name">Seu Nome</Label>
                <Input id="name" name="name" placeholder="Nome completo" required />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" required />
              </div>

              {/* Tipo de roupa */}
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Roupa</Label>
                <Select required value={clothingType} onValueChange={setClothingType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Camisa">Camisa</SelectItem>
                    <SelectItem value="Calça">Calça</SelectItem>
                    <SelectItem value="Vestido">Vestido</SelectItem>
                    <SelectItem value="Blusa">Blusa</SelectItem>
                    <SelectItem value="Casaco/Jaqueta">Casaco/Jaqueta</SelectItem>
                    <SelectItem value="Saia">Saia</SelectItem>
                    <SelectItem value="Shorts/Bermuda">Shorts/Bermuda</SelectItem>
                    <SelectItem value="Terno/Blazer">Terno/Blazer</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tamanho */}
              <div className="space-y-2">
                <Label htmlFor="size">Tamanho</Label>
                <Select required value={size} onValueChange={setSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PP">PP</SelectItem>
                    <SelectItem value="P">P</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="G">G</SelectItem>
                    <SelectItem value="GG">GG</SelectItem>
                    <SelectItem value="XG">XG</SelectItem>
                    <SelectItem value="34">34</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                    <SelectItem value="38">38</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="42">42</SelectItem>
                    <SelectItem value="44">44</SelectItem>
                    <SelectItem value="46">46</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Estado da roupa */}
              <div className="space-y-2">
                <Label htmlFor="condition">Estado da Roupa</Label>
                <Select required value={condition} onValueChange={setCondition}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="novo">Novo (com etiqueta)</SelectItem>
                    <SelectItem value="excelente">Excelente (usado poucas vezes)</SelectItem>
                    <SelectItem value="bom">Bom (pequenos sinais de uso)</SelectItem>
                    <SelectItem value="regular">Regular (sinais visíveis de uso)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Foto da roupa */}
              <div className="space-y-2">
                <Label htmlFor="image">Foto da Roupa</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  {imagePreview ? (
                    <div className="space-y-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-xs mx-auto rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setImagePreview("")}
                      >
                        Trocar Foto
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                      <div>
                        <Label
                          htmlFor="image"
                          className="cursor-pointer text-primary hover:underline"
                        >
                          Clique para fazer upload
                        </Label>
                        <p className="text-sm text-muted-foreground mt-2">
                          PNG, JPG ou JPEG (max. 5MB)
                        </p>
                      </div>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Descrição adicional */}
              <div className="space-y-2">
                <Label htmlFor="description">Descrição Adicional (opcional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Cor, marca, detalhes sobre o estado..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Doação"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info adicional */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Como funciona?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>1. Preencha o formulário com os dados da roupa</p>
              <p>2. Envie uma foto clara da peça</p>
              <p>3. Nossa equipe avaliará a doação</p>
              <p>4. Combinaremos a coleta ou ponto de entrega</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Critérios para doação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Roupas limpas e em bom estado</p>
              <p>✓ Sem rasgos ou manchas graves</p>
              <p>✓ Costuras e botões em ordem</p>
              <p>✓ Peças que você usaria</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Donation;
