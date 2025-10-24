import { Link } from "react-router-dom";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/produto/${product.id}`} 
      className="group block"
    >
      <div className="space-y-3">
        {/* Imagem */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
          <img
            src={product.images[0] || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=600&fit=crop'}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {/* Cores */}
          <div className="flex gap-1.5">
            {product.colors?.slice(0, 4).map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-border"
                style={{
                  backgroundColor: color.toLowerCase() === 'preto' ? '#000' :
                                 color.toLowerCase() === 'branco' ? '#fff' :
                                 color.toLowerCase() === 'bege' ? '#f5f5dc' :
                                 color.toLowerCase() === 'azul' ? '#0000ff' :
                                 color.toLowerCase() === 'rosa' ? '#ffc0cb' :
                                 color.toLowerCase() === 'verde' ? '#008000' : '#ccc'
                }}
                title={color}
              />
            ))}
            {product.colors && product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>

          {/* Tamanhos */}
          {product.sizes && product.sizes.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Tamanhos: {product.sizes.join(", ")}
            </p>
          )}

          {/* Preço */}
          <div className="flex items-baseline gap-2 flex-wrap">
            {product.on_sale && product.discount_percentage ? (
              <>
                <span className="font-semibold text-lg text-destructive">
                  R$ {(product.price * (1 - product.discount_percentage / 100)).toFixed(2).replace(".", ",")}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-0.5 rounded">
                  -{product.discount_percentage}%
                </span>
              </>
            ) : (
              <span className="font-semibold text-lg">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground">
            ou 10x de R$ {(
              product.on_sale && product.discount_percentage 
                ? (product.price * (1 - product.discount_percentage / 100)) / 10
                : product.price / 10
            ).toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;