import { User, ShoppingBag, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import AuthModal from "@/components/AuthModal";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount } = useCart();

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
              <Link to="/calcas" className="text-foreground hover:text-primary transition-colors font-medium">
                Calças
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
              <Link to="/doacao" className="text-foreground hover:text-primary transition-colors font-medium">
                Doação
              </Link>
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-4">
              {/* Busca Desktop */}
              <SearchBar className="hidden md:flex w-48" />

              {/* Ícones */}
              {user ? (
                <>
                  <Link 
                    to="/perfil"
                    className="p-2 hover:text-primary transition-colors"
                    title="Meu Perfil"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={signOut}
                    className="p-2 hover:text-primary transition-colors"
                    title="Sair"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setAuthModalOpen(true)}
                  className="p-2 hover:text-primary transition-colors"
                  title="Entrar"
                >
                  <User className="w-5 h-5" />
                </button>
              )}
              <Link to="/carrinho" className="p-2 hover:text-primary transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

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
              <Link to="/calcas" className="text-foreground hover:text-primary transition-colors font-medium">
                Calças
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
              <Link to="/doacao" className="text-foreground hover:text-primary transition-colors font-medium">
                Doação
              </Link>
              
              {/* Busca Mobile */}
              <SearchBar className="w-full mt-2" />
            </nav>
          </div>
        )}
      </header>
      
      {/* Auth Modal */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
};

export default Header;