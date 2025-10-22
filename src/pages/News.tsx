import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const News = () => {
  const { products, loading } = useProducts();
  const newProducts = products.slice(0, 12);

  if (loading) {
    return (
      <main className="py-8">
        <div className="container">
          <p className="text-center">Carregando produtos...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Novidades</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Novidades</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra as últimas tendências e peças exclusivas que acabaram de chegar.
            Atualize seu guarda-roupa com o que há de mais atual em moda.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="relative mb-12 rounded-lg overflow-hidden">
          <div className="aspect-[21/9] relative">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
              alt="Nova Coleção"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="container">
                <div className="max-w-xl text-white">
                  <span className="text-sm font-medium mb-2 block">RECÉM CHEGADOS</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                    Nova Temporada
                  </h2>
                  <p className="text-white/90 mb-6">
                    Peças selecionadas para quem busca estilo e sofisticação.
                    Qualidade premium em cada detalhe.
                  </p>
                  <Link to="/colecoes">
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Ver Coleções
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Products Grid */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-6">Acabaram de Chegar</h2>
          {newProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground">Em breve novas peças exclusivas.</p>
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/categoria/feminino" className="group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                  alt="Novidades Femininas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">Novidades Femininas</h3>
                  <p className="text-white/90">Explore as últimas tendências</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/categoria/masculino" className="group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80"
                  alt="Novidades Masculinas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">Novidades Masculinas</h3>
                  <p className="text-white/90">Descubra o novo masculino</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default News;