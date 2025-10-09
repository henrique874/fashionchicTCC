import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CollectionSummer = () => {
  // Produtos de verão: Vestidos, Shorts, Bermudas, Tops, Camisas de linho, Bodies
  const summerProducts = products.filter(
    (product) =>
      product.type === "Vestido" ||
      product.type === "Shorts" ||
      product.type === "Bermuda" ||
      product.type === "Top" ||
      product.type === "Body" ||
      (product.type === "Camisa" && product.composition.includes("Linho"))
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
          <span className="text-foreground">Verão 2024</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Coleção Verão 2024
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveza e estilo para dias ensolarados. Tecidos frescos, cores vibrantes e
            peças confortáveis para aproveitar o calor com elegância.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {summerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {summerProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto disponível no momento.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CollectionSummer;
