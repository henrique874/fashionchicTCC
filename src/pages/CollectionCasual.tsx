import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const CollectionCasual = () => {
  const { products, loading } = useProducts();
  
  // Produtos casuais: Camisetas, Polos, Calças, Blusas
  const casualProducts = products.filter(
    (product) =>
      product.subcategory === "Camiseta" ||
      product.subcategory === "Polo" ||
      product.subcategory === "Calça" ||
      product.subcategory === "Blusa"
  );

  if (loading) {
    return (
      <main className="py-16">
        <div className="container">
          <p className="text-center">Carregando produtos...</p>
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
          <Link to="/colecoes" className="hover:text-foreground transition-colors">Coleções</Link>
          <span>/</span>
          <span className="text-foreground">Casual Premium</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Casual Premium
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conforto sem abrir mão da sofisticação. Peças do dia a dia com preços acessíveis
            e qualidade premium para seu estilo casual.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {casualProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {casualProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto disponível no momento.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CollectionCasual;
