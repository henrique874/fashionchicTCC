import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donation = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Doação registrada!",
      description: "Obrigado por contribuir. Entraremos em contato em breve.",
    });
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
                <Input id="name" placeholder="Nome completo" required />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
              </div>

              {/* Tipo de roupa */}
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Roupa</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camisa">Camisa</SelectItem>
                    <SelectItem value="calca">Calça</SelectItem>
                    <SelectItem value="vestido">Vestido</SelectItem>
                    <SelectItem value="blusa">Blusa</SelectItem>
                    <SelectItem value="casaco">Casaco/Jaqueta</SelectItem>
                    <SelectItem value="saia">Saia</SelectItem>
                    <SelectItem value="shorts">Shorts/Bermuda</SelectItem>
                    <SelectItem value="terno">Terno/Blazer</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tamanho */}
              <div className="space-y-2">
                <Label htmlFor="size">Tamanho</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pp">PP</SelectItem>
                    <SelectItem value="p">P</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="g">G</SelectItem>
                    <SelectItem value="gg">GG</SelectItem>
                    <SelectItem value="xg">XG</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Estado da roupa */}
              <div className="space-y-2">
                <Label htmlFor="condition">Estado da Roupa</Label>
                <Select required>
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
                  placeholder="Cor, marca, detalhes sobre o estado..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Doação
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
