import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Banner de Políticas */}
      <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm">
        <div className="container flex justify-center items-center gap-6 flex-wrap">
          <span>✓ Troca fácil em até 30 dias</span>
          <span>✓ Frete calculado no checkout</span>
          <span>✓ Pagamentos 100% seguros</span>
        </div>
      </div>

      {/* Header Principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-heading text-3xl font-bold tracking-tight">
              FashionChic
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/categoria/feminino" className="text-foreground hover:text-primary transition-colors font-medium">
                Feminino
              </Link>
              <Link to="/categoria/masculino" className="text-foreground hover:text-primary transition-colors font-medium">
                Masculino
              </Link>
              <Link to="/novidades" className="text-foreground hover:text-primary transition-colors font-medium">
                Novidades
              </Link>
              <Link to="/colecoes" className="text-foreground hover:text-primary transition-colors font-medium">
                Coleções
              </Link>
              <Link to="/sale" className="text-destructive hover:text-destructive/80 transition-colors font-medium">
                Sale
              </Link>
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-4">
              {/* Busca Desktop */}
              <div className="hidden md:flex items-center bg-muted rounded-lg px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground mr-2" />
                <input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="bg-transparent outline-none text-sm w-48 placeholder:text-muted-foreground"
                />
              </div>

              {/* Ícones */}
              <button className="p-2 hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-primary transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Menu Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="container py-4 flex flex-col gap-4">
              <Link to="/categoria/feminino" className="text-foreground hover:text-primary transition-colors font-medium">
                Feminino
              </Link>
              <Link to="/categoria/masculino" className="text-foreground hover:text-primary transition-colors font-medium">
                Masculino
              </Link>
              <Link to="/novidades" className="text-foreground hover:text-primary transition-colors font-medium">
                Novidades
              </Link>
              <Link to="/colecoes" className="text-foreground hover:text-primary transition-colors font-medium">
                Coleções
              </Link>
              <Link to="/sale" className="text-destructive hover:text-destructive/80 transition-colors font-medium">
                Sale
              </Link>
              
              {/* Busca Mobile */}
              <div className="flex items-center bg-muted rounded-lg px-4 py-2 mt-2">
                <Search className="w-4 h-4 text-muted-foreground mr-2" />
                <input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
                />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;