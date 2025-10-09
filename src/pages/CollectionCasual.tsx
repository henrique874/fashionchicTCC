import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CollectionCasual = () => {
  // Produtos casuais: Camisetas, Polos, Calças casuais, Jeans com preços mais acessíveis
  const casualProducts = products.filter(
    (product) =>
      (product.type === "Camiseta" ||
      product.type === "Polo" ||
      product.type === "Calça" && (product.name.includes("Jogger") || product.name.includes("Chino") || product.name.includes("Cargo") || product.name.includes("Jeans")) ||
      product.type === "Blusa" ||
      product.type === "Body") &&
      product.price <= 600 // Preços mais acessíveis
  );

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
