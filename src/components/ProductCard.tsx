import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountedPrice = product.isSale && product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Link to={`/produto/${product.id}`} className="group">
      <article className="product-card h-full flex flex-col">
        {/* Imagem */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - vista alternativa`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              loading="lazy"
            />
          )}
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && <span className="badge-new">Novo</span>}
            {product.isSale && <span className="badge-sale">-{product.discount}%</span>}
          </div>
        </div>

        {/* Informações */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-medium text-foreground mb-1 line-clamp-2">
            {product.name}
          </h3>
          
          {/* Cores */}
          <div className="flex gap-1 mb-3">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color}
                className="w-4 h-4 rounded-full border border-border"
                style={{
                  backgroundColor: 
                    color === "Preto" ? "#000" :
                    color === "Branco" ? "#fff" :
                    color === "Dourado" ? "#C8A96A" :
                    color === "Bege" ? "#F5E9DA" :
                    color === "Azul Marinho" ? "#001f3f" :
                    color === "Cinza" ? "#808080" :
                    color === "Vermelho" ? "#DC143C" :
                    color === "Vinho" ? "#722f37" :
                    color === "Rosa" ? "#FFC0CB" :
                    color === "Verde Militar" ? "#4b5320" :
                    color === "Azul Claro" ? "#ADD8E6" :
                    color === "Champagne" ? "#F7E7CE" :
                    color === "Prata" ? "#C0C0C0" :
                    color === "Azul Royal" ? "#002366" :
                    color === "Caramelo" ? "#D2691E" :
                    color === "Cinza Chumbo" ? "#606060" :
                    "#ccc"
                }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{product.colors.length - 4}
              </span>
            )}
          </div>

          {/* Tamanhos */}
          <div className="text-xs text-muted-foreground mb-3">
            Tamanhos: {product.sizes.join(", ")}
          </div>

          {/* Preços */}
          <div className="mt-auto">
            {product.isSale ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">
                  R$ {discountedPrice.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-sm line-through text-muted-foreground">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-foreground">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              em até 10x sem juros
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;