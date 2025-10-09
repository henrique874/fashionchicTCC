import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CollectionWinter = () => {
  // Produtos de inverno: Casacos, Jaquetas, Suéteres, Cardigans
  const winterProducts = products.filter(
    (product) =>
      product.type === "Casaco" ||
      product.type === "Jaqueta" ||
      product.type === "Suéter" ||
      product.type === "Cardigan"
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
          <span className="text-foreground">Inverno 2024</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Coleção Inverno 2024
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elegância e conforto para os dias frios. Casacos, jaquetas e peças em tecidos nobres
            para você enfrentar o inverno com muito estilo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {winterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {winterProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto disponível no momento.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CollectionWinter;
