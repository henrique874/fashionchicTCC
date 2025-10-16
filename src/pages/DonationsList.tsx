import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Donation {
  id: string;
  donor_name: string;
  clothing_type: string;
  size: string;
  condition: string;
  image_url: string;
  description: string | null;
  status: string;
  created_at: string;
}

const DonationsList = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setDonations(data || []);
    } catch (error) {
      console.error("Error fetching donations:", error);
      toast({
        title: "Erro ao carregar doações",
        description: "Não foi possível carregar as doações.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getConditionLabel = (condition: string) => {
    const labels: Record<string, string> = {
      novo: "Novo (com etiqueta)",
      excelente: "Excelente",
      bom: "Bom",
      regular: "Regular",
    };
    return labels[condition] || condition;
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      pending: "secondary",
      approved: "default",
      collected: "outline",
    };
    
    const labels: Record<string, string> = {
      pending: "Pendente",
      approved: "Aprovado",
      collected: "Coletado",
    };

    return (
      <Badge variant={variants[status] || "default"}>
        {labels[status] || status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <main className="py-16">
        <div className="container flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </main>
    );
  }

  return (
    <main className="py-16">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Doações</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Roupas Doadas
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira as roupas que foram doadas pela nossa comunidade
          </p>
        </div>

        {donations.length === 0 ? (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">
                Ainda não há doações registradas.
              </p>
              <Link to="/doacao" className="text-primary hover:underline">
                Seja o primeiro a doar
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <Card key={donation.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={donation.image_url}
                    alt={donation.clothing_type}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{donation.clothing_type}</CardTitle>
                    {getStatusBadge(donation.status)}
                  </div>
                  <CardDescription>
                    Doado por {donation.donor_name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tamanho:</span>
                    <span className="font-medium">{donation.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Estado:</span>
                    <span className="font-medium">{getConditionLabel(donation.condition)}</span>
                  </div>
                  {donation.description && (
                    <p className="text-sm text-muted-foreground mt-3">
                      {donation.description}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(donation.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default DonationsList;
