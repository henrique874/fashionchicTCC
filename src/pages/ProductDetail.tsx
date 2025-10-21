import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Heart, Share2 } from "lucide-react";
import { useProduct } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import SizeCalculator from "@/components/SizeCalculator";
import SizeChart from "@/components/SizeChart";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useProduct(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Link to="/" className="text-primary hover:underline">
          Voltar à página inicial
        </Link>
      </div>
    );
  }

  const discountedPrice = product.price;

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha o tamanho desejado",
        variant: "destructive",
      });
      return;
    }
    if (!selectedColor) {
      toast({
        title: "Selecione uma cor",
        description: "Por favor, escolha a cor desejada",
        variant: "destructive",
      });
      return;
    }
    
    await addItem({
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_image: product.images[0] || '',
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <main className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to={`/categoria/${product.category}`} className="hover:text-primary">
            {product.category === 'feminino' ? 'Feminino' : 'Masculino'}
          </Link>
          <span>/</span>
          <span className="text-muted-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galeria */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[3/4] overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.category === 'feminino' ? 'Feminino' : 'Masculino'}</p>
            </div>

            {/* Preço */}
            <div>
              <span className="text-3xl font-bold">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                ou em até 10x de R$ {(product.price / 10).toFixed(2).replace(".", ",")} sem juros
              </p>
            </div>

            {/* Cores */}
            <div>
              <label className="font-medium mb-3 block">Cor: {selectedColor}</label>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Tamanhos */}
            <div>
              <label className="font-medium mb-3 block">Tamanho: {selectedSize}</label>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground hover:bg-gold-hover"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Adicionar à Sacola
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Calculadora de Tamanho */}
            <SizeCalculator />

            {/* Descrição */}
            {product.description && (
              <div className="space-y-4 pt-6 border-t">
                <details open>
                  <summary className="font-medium cursor-pointer">Descrição</summary>
                  <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                </details>
              </div>
            )}
          </div>
        </div>

        {/* Tabela de Medidas */}
        <div className="mt-12">
          <SizeChart />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;