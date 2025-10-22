import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const CollectionWork = () => {
  const { products, loading } = useProducts();
  
  // Produtos para trabalho: Ternos, Blazers, Camisas, Calças, Vestidos
  const workProducts = products.filter(
    (product) =>
      product.subcategory === "Terno" ||
      product.subcategory === "Blazer" ||
      product.subcategory === "Camisa" ||
      product.subcategory === "Vestido" ||
      (product.subcategory === "Calça" && product.name.includes("Alfaiataria"))
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
          <span className="text-foreground">Essenciais do Trabalho</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Essenciais do Trabalho
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Peças versáteis para o ambiente corporativo. Ternos, blazers, camisas e vestidos
            que transmitem profissionalismo e elegância.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {workProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto disponível no momento.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CollectionWork;
