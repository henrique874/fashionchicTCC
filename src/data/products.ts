export interface Product {
  id: string; // Changed to string for UUID
  name: string;
  price: number;
  category: 'feminino' | 'masculino';
  type: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  composition: string;
  care: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: "Vestido Midi Elegance",
    price: 389.90,
    category: "feminino",
    type: "Vestido",
    colors: ["Preto", "Dourado", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop"
    ],
    description: "Vestido midi com corte elegante e caimento impecável. Perfeito para ocasiões especiais.",
    composition: "95% Poliéster, 5% Elastano",
    care: "Lavar à mão com água fria. Não usar alvejante.",
    isNew: true
  },
  {
    id: '2',
    name: "Blazer Premium Alfaiataria",
    price: 599.90,
    category: "masculino",
    type: "Blazer",
    colors: ["Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop"
    ],
    description: "Blazer com modelagem slim e acabamento premium. Ideal para o executivo moderno.",
    composition: "60% Lã, 38% Poliéster, 2% Elastano",
    care: "Lavagem a seco recomendada.",
    isSale: true,
    discount: 20
  },
  {
    id: '3',
    name: "Camisa Social Luxe",
    price: 279.90,
    category: "masculino",
    type: "Camisa",
    colors: ["Branco", "Azul Claro", "Rosa"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop"
    ],
    description: "Camisa social com tecido egípcio de alta qualidade. Conforto e elegância.",
    composition: "100% Algodão Egípcio",
    care: "Lavar à máquina em água fria. Passar em temperatura média."
  },
  {
    id: '4',
    name: "Saia Plissada Dourada",
    price: 459.90,
    category: "feminino",
    type: "Saia",
    colors: ["Dourado", "Prata", "Preto"],
    sizes: ["PP", "P", "M", "G"],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
    ],
    description: "Saia plissada metalizada com movimento e brilho. Tendência da estação.",
    composition: "80% Poliéster, 20% Lurex",
    care: "Lavar à mão. Não torcer.",
    isNew: true
  },
  {
    id: '5',
    name: "Calça Alfaiataria Feminina",
    price: 349.90,
    category: "feminino",
    type: "Calça",
    colors: ["Preto", "Bege", "Branco"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop"
    ],
    description: "Calça de alfaiataria com corte reto e cintura alta. Versatilidade e elegância.",
    composition: "65% Poliéster, 32% Viscose, 3% Elastano",
    care: "Lavar à máquina em programa delicado."
  },
  {
    id: '6',
    name: "Blusa Seda Premium",
    price: 289.90,
    category: "feminino",
    type: "Blusa",
    colors: ["Champagne", "Preto", "Vinho"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&h=800&fit=crop"
    ],
    description: "Blusa em seda pura com caimento fluido. Sofisticação em cada detalhe.",
    composition: "100% Seda",
    care: "Lavagem a seco.",
    isSale: true,
    discount: 30
  },
  {
    id: '7',
    name: "Calça Chino Premium",
    price: 329.90,
    category: "masculino",
    type: "Calça",
    colors: ["Bege", "Azul Marinho", "Verde Militar"],
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&h=800&fit=crop"
    ],
    description: "Calça chino com tecido de alta qualidade. Casual elegante.",
    composition: "98% Algodão, 2% Elastano",
    care: "Lavar à máquina. Secar à sombra."
  },
  {
    id: '8',
    name: "Jaqueta Couro Legítimo",
    price: 1299.90,
    category: "feminino",
    type: "Jaqueta",
    colors: ["Preto", "Caramelo"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1557418669-db3f781a58c0?w=600&h=800&fit=crop"
    ],
    description: "Jaqueta em couro legítimo com design atemporal. Investimento em estilo.",
    composition: "100% Couro Bovino",
    care: "Limpar com produto específico para couro.",
    isNew: true
  },
  {
    id: '9',
    name: "Conjunto Terno Slim",
    price: 1599.90,
    category: "masculino",
    type: "Terno",
    colors: ["Preto", "Cinza Chumbo", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop"
    ],
    description: "Terno completo com corte slim moderno. Elegância para todas as ocasiões.",
    composition: "55% Lã, 45% Poliéster",
    care: "Lavagem a seco profissional.",
    isSale: true,
    discount: 25
  },
  {
    id: '10',
    name: "Vestido Gala Longo",
    price: 899.90,
    category: "feminino",
    type: "Vestido",
    colors: ["Preto", "Vermelho", "Azul Royal"],
    sizes: ["PP", "P", "M", "G"],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    ],
    description: "Vestido longo para ocasiões especiais. Corte sereia com detalhes em renda.",
    composition: "60% Poliéster, 35% Viscose, 5% Elastano",
    care: "Lavagem a seco recomendada."
  },
  {
    id: '11',
    name: "Polo Premium Cotton",
    price: 189.90,
    category: "masculino",
    type: "Polo",
    colors: ["Branco", "Preto", "Azul Marinho", "Vinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1625910513390-a0e9b3306112?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=800&fit=crop"
    ],
    description: "Polo em algodão Pima de alta qualidade. Conforto e estilo casual.",
    composition: "100% Algodão Pima",
    care: "Lavar à máquina em água fria."
  },
  {
    id: '12',
    name: "Casaco Trench Coat",
    price: 799.90,
    category: "feminino",
    type: "Casaco",
    colors: ["Bege", "Preto", "Verde Militar"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop"
    ],
    description: "Trench coat clássico com cinto. Peça icônica do guarda-roupa.",
    composition: "100% Gabardine de Algodão",
    care: "Lavar à máquina em programa delicado.",
    isNew: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'feminino' | 'masculino'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isSale);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};