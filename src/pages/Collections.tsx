import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Coleção Inverno 2024",
      description: "Elegância e conforto para os dias frios",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      link: "/colecao/inverno-2024",
      season: "inverno"
    },
    {
      id: 2,
      name: "Coleção Verão 2024",
      description: "Leveza e estilo para dias ensolarados",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      link: "/colecao/verao-2024",
      season: "verao"
    },
    {
      id: 3,
      name: "Essenciais do Trabalho",
      description: "Peças versáteis para o ambiente corporativo",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      link: "/colecao/trabalho",
      season: "all"
    },
    {
      id: 4,
      name: "Casual Premium",
      description: "Conforto sem abrir mão da sofisticação",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
      link: "/colecao/casual",
      season: "all"
    }
  ];

  return (
    <main className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Coleções</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Nossas Coleções</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra coleções cuidadosamente selecionadas para cada ocasião e estação.
            Qualidade, design e exclusividade em cada peça.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {collections.map(collection => (
            <div key={collection.id} className="group relative overflow-hidden rounded-lg">
              <Link to={collection.link}>
                <div className="aspect-[16/10] relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="font-heading text-3xl font-bold mb-2">{collection.name}</h2>
                    <p className="text-white/90 mb-4">{collection.description}</p>
                    <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
                      Explorar Coleção
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Seasonal Collections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Winter Collection */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">Inverno 2024</h3>
            <p className="text-muted-foreground mb-6">
              Aqueça-se com estilo. Nossa coleção de inverno traz peças elegantes
              em tecidos nobres, perfeitas para enfrentar o frio com sofisticação.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Casacos e sobretudos premium</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Malhas em lã e cashmere</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Acessórios térmicos elegantes</span>
              </li>
            </ul>
            <Link to="/categoria/feminino">
              <Button className="w-full">Ver Coleção Completa</Button>
            </Link>
          </div>

          {/* Summer Collection */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">Verão 2024</h3>
            <p className="text-muted-foreground mb-6">
              Frescor e leveza para os dias quentes. Tecidos leves e cores vibrantes
              que refletem a energia da estação mais alegre do ano.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Vestidos fluidos e frescos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Camisaria em linho e algodão</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Beachwear sofisticado</span>
              </li>
            </ul>
            <Link to="/categoria/masculino">
              <Button className="w-full">Ver Coleção Completa</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Collections;