import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const Sale = () => {
  const saleProducts = products.filter(p => p.isSale);

  return (
    <main className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Sale</span>
        </nav>

        {/* Sale Banner */}
        <div className="bg-destructive/10 border-2 border-destructive/20 rounded-lg p-8 mb-12 text-center">
          <Badge className="mb-4 bg-destructive text-destructive-foreground">PROMOÇÃO ESPECIAL</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Até 50% OFF
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Aproveite descontos imperdíveis em peças selecionadas. 
            Qualidade premium com preços especiais por tempo limitado.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span>Ofertas limitadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span>Frete grátis acima de R$ 299</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span>Parcelamento em até 10x</span>
            </div>
          </div>
        </div>

        {/* Sale Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link to="/categoria/feminino" className="group">
            <div className="bg-muted rounded-lg p-6 text-center hover:bg-muted/80 transition-colors">
              <h3 className="font-heading text-xl font-bold mb-2">Feminino</h3>
              <p className="text-2xl font-bold text-destructive mb-2">Até 40% OFF</p>
              <p className="text-sm text-muted-foreground">Vestidos, blusas e mais</p>
            </div>
          </Link>
          
          <Link to="/categoria/masculino" className="group">
            <div className="bg-muted rounded-lg p-6 text-center hover:bg-muted/80 transition-colors">
              <h3 className="font-heading text-xl font-bold mb-2">Masculino</h3>
              <p className="text-2xl font-bold text-destructive mb-2">Até 50% OFF</p>
              <p className="text-sm text-muted-foreground">Camisas, calças e mais</p>
            </div>
          </Link>
          
          <Link to="/colecoes" className="group">
            <div className="bg-muted rounded-lg p-6 text-center hover:bg-muted/80 transition-colors">
              <h3 className="font-heading text-xl font-bold mb-2">Acessórios</h3>
              <p className="text-2xl font-bold text-destructive mb-2">Até 30% OFF</p>
              <p className="text-sm text-muted-foreground">Bolsas, cintos e mais</p>
            </div>
          </Link>
        </div>

        {/* Sale Products */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-2xl font-bold">Produtos em Promoção</h2>
            <span className="text-muted-foreground">
              {saleProducts.length} {saleProducts.length === 1 ? 'produto' : 'produtos'}
            </span>
          </div>
          
          {saleProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground">Em breve novas ofertas especiais.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Não perca as ofertas!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cadastre-se para receber em primeira mão nossas promoções exclusivas e lançamentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sale;