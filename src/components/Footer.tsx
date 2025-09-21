import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">FashionChic</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Moda sofisticada para homens e mulheres que apreciam qualidade, exclusividade e design atemporal.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trocas-devolucoes" className="hover:text-primary transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/guia-medidas" className="hover:text-primary transition-colors">
                  Guia de Medidas
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/lojas" className="hover:text-primary transition-colors">
                  Nossas Lojas
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="hover:text-primary transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades e ofertas exclusivas
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-white text-foreground rounded-l-lg outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-gold-hover transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <label className="flex items-start gap-2 text-xs">
                <input type="checkbox" className="mt-1" required />
                <span className="text-muted-foreground">
                  Li e concordo com a{" "}
                  <Link to="/privacidade" className="underline hover:text-primary">
                    Política de Privacidade
                  </Link>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 FashionChic. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;