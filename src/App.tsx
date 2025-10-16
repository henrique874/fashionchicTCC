import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import News from "./pages/News";
import Collections from "./pages/Collections";
import Sale from "./pages/Sale";
import SearchResults from "./pages/SearchResults";
import Profile from "./pages/Profile";
import Pants from "./pages/Pants";
import Donation from "./pages/Donation";
import DonationsList from "./pages/DonationsList";
import CollectionWinter from "./pages/CollectionWinter";
import CollectionSummer from "./pages/CollectionSummer";
import CollectionWork from "./pages/CollectionWork";
import CollectionCasual from "./pages/CollectionCasual";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/produto/:id" element={<Layout><ProductDetail /></Layout>} />
              <Route path="/carrinho" element={<Layout><Cart /></Layout>} />
              <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
              <Route path="/categoria/:category" element={<Layout><Category /></Layout>} />
              <Route path="/calcas" element={<Layout><Pants /></Layout>} />
              <Route path="/novidades" element={<Layout><News /></Layout>} />
              <Route path="/colecoes" element={<Layout><Collections /></Layout>} />
              <Route path="/sale" element={<Layout><Sale /></Layout>} />
              <Route path="/busca" element={<Layout><SearchResults /></Layout>} />
              <Route path="/perfil" element={<Layout><Profile /></Layout>} />
              <Route path="/doacao" element={<Layout><Donation /></Layout>} />
              <Route path="/doacoes" element={<Layout><DonationsList /></Layout>} />
              <Route path="/colecao/inverno" element={<Layout><CollectionWinter /></Layout>} />
              <Route path="/colecao/verao" element={<Layout><CollectionSummer /></Layout>} />
              <Route path="/colecao/trabalho" element={<Layout><CollectionWork /></Layout>} />
              <Route path="/colecao/casual" element={<Layout><CollectionCasual /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
