import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, getNewProducts, getSaleProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const Home = () => {
  const newProducts = getNewProducts();
  const saleProducts = getSaleProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
            alt="Coleção Premium FashionChic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Elegância Atemporal
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Descubra a nova coleção de inverno com peças exclusivas
            </p>
            <Link to="/colecoes">
              <Button className="bg-primary text-primary-foreground hover:bg-gold-hover px-8 py-6 text-lg">
                Ver Coleção
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mensagem Principal */}
      <section className="py-16 bg-beige-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Moda Sofisticada para Todos os Estilos
            </h2>
            <p className="text-lg text-muted-foreground italic mb-8">
              "Nosso público é formado por homens e mulheres que apreciam moda sofisticada, 
              priorizando qualidade, exclusividade e design. Entre seus principais perfis, destacam-se:"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Executivos(as)</h3>
                <p className="text-sm text-muted-foreground">Elegância corporativa</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Criativos(as)</h3>
                <p className="text-sm text-muted-foreground">Estilo único e autêntico</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Eventos & Social</h3>
                <p className="text-sm text-muted-foreground">Sofisticação em festa</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Casual Premium</h3>
                <p className="text-sm text-muted-foreground">Conforto com classe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl font-bold">Novidades</h2>
            <Link to="/novidades" className="text-primary hover:text-gold-hover transition-colors">
              Ver tudo <ChevronRight className="inline w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Coleções */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/categoria/feminino" className="group relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=450&fit=crop"
                alt="Coleção Feminina"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">Coleção Feminina</h3>
                <p className="text-sm opacity-90">Elegância e sofisticação</p>
              </div>
            </Link>
            
            <Link to="/categoria/masculino" className="group relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&h=450&fit=crop"
                alt="Coleção Masculina"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">Coleção Masculina</h3>
                <p className="text-sm opacity-90">Estilo e personalidade</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sale */}
      {saleProducts.length > 0 && (
        <section className="py-16 bg-beige-light">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-3xl font-bold text-destructive">
                Ofertas Especiais
              </h2>
              <Link to="/sale" className="text-destructive hover:text-destructive/80 transition-colors">
                Ver tudo <ChevronRight className="inline w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Mais Vendidos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;