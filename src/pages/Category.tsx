import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useProductsByCategory, Product } from "@/hooks/useProducts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const { products, loading } = useProductsByCategory(category as 'feminino' | 'masculino');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  const categoryTitle = category === "feminino" ? "Feminino" : "Masculino";
  const sizes = ["PP", "P", "M", "G", "GG"];
  const colors = ["Preto", "Branco", "Bege", "Azul", "Rosa", "Verde"];

  useEffect(() => {
    let filtered = [...products];

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(color => selectedColors.includes(color))
      );
    }

    // Apply price filter
    filtered = filtered.filter(p => 
      p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, category, sortBy, selectedSizes, selectedColors, priceRange]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <main className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{categoryTitle}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">{categoryTitle}</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              Filtros <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="name">Nome A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-6">
              {/* Size Filter */}
              <div>
                <h3 className="font-heading font-bold mb-4">Tamanho</h3>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={() => toggleSize(size)}
                      />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-heading font-bold mb-4">Cor</h3>
                <div className="space-y-2">
                  {colors.map(color => (
                    <label key={color} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedColors.includes(color)}
                        onCheckedChange={() => toggleColor(color)}
                      />
                      <span className="text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-heading font-bold mb-4">Preço</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={priceRange[0] === 0 && priceRange[1] === 200}
                      onCheckedChange={(checked) => 
                        setPriceRange(checked ? [0, 200] : [0, 2000])
                      }
                    />
                    <span className="text-sm">Até R$ 200</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={priceRange[0] === 200 && priceRange[1] === 500}
                      onCheckedChange={(checked) => 
                        setPriceRange(checked ? [200, 500] : [0, 2000])
                      }
                    />
                    <span className="text-sm">R$ 200 - R$ 500</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={priceRange[0] === 500 && priceRange[1] === 1000}
                      onCheckedChange={(checked) => 
                        setPriceRange(checked ? [500, 1000] : [0, 2000])
                      }
                    />
                    <span className="text-sm">R$ 500 - R$ 1000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={priceRange[0] === 1000}
                      onCheckedChange={(checked) => 
                        setPriceRange(checked ? [1000, 2000] : [0, 2000])
                      }
                    />
                    <span className="text-sm">Acima de R$ 1000</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 2000) && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setPriceRange([0, 2000]);
                  }}
                >
                  Limpar filtros
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Carregando produtos...</p>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">
                  {filteredProducts.length} produtos encontrados
                </p>
                
                {filteredProducts.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Nenhum produto encontrado com os filtros selecionados.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
