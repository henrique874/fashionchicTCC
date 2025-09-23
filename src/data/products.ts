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
    price: 789.90,
    category: "feminino",
    type: "Vestido",
    colors: ["Preto", "Dourado", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1566479179459-7c8c1839c3cd?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    ],
    description: "Vestido midi com corte elegante e caimento impecável. Perfeito para ocasiões especiais.",
    composition: "95% Poliéster, 5% Elastano",
    care: "Lavar à mão com água fria. Não usar alvejante.",
    isNew: true
  },
  {
    id: '2',
    name: "Blazer Premium Alfaiataria",
    price: 1199.90,
    category: "masculino",
    type: "Blazer",
    colors: ["Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&h=800&fit=crop"
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
    price: 479.90,
    category: "masculino",
    type: "Camisa",
    colors: ["Branco", "Azul Claro", "Rosa"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop"
    ],
    description: "Camisa social com tecido egípcio de alta qualidade. Conforto e elegância.",
    composition: "100% Algodão Egípcio",
    care: "Lavar à máquina em água fria. Passar em temperatura média."
  },
  {
    id: '4',
    name: "Saia Plissada Metalizada",
    price: 659.90,
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
    price: 549.90,
    category: "feminino",
    type: "Calça",
    colors: ["Preto", "Bege", "Branco"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
    ],
    description: "Calça de alfaiataria com corte reto e cintura alta. Versatilidade e elegância.",
    composition: "65% Poliéster, 32% Viscose, 3% Elastano",
    care: "Lavar à máquina em programa delicado."
  },
  {
    id: '6',
    name: "Blusa Seda Premium",
    price: 899.90,
    category: "feminino",
    type: "Blusa",
    colors: ["Champagne", "Preto", "Vinho"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600&h=800&fit=crop"
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
    price: 429.90,
    category: "masculino",
    type: "Calça",
    colors: ["Bege", "Azul Marinho", "Verde Militar"],
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop"
    ],
    description: "Calça chino com tecido de alta qualidade. Casual elegante.",
    composition: "98% Algodão, 2% Elastano",
    care: "Lavar à máquina. Secar à sombra."
  },
  {
    id: '8',
    name: "Jaqueta Couro Legítimo",
    price: 1199.90,
    category: "feminino",
    type: "Jaqueta",
    colors: ["Preto", "Caramelo"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop"
    ],
    description: "Jaqueta em couro legítimo com design atemporal. Investimento em estilo.",
    composition: "100% Couro Bovino",
    care: "Limpar com produto específico para couro.",
    isNew: true
  },
  {
    id: '9',
    name: "Conjunto Terno Slim",
    price: 1189.90,
    category: "masculino",
    type: "Terno",
    colors: ["Preto", "Cinza Chumbo", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=600&h=800&fit=crop"
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
    price: 999.90,
    category: "feminino",
    type: "Vestido",
    colors: ["Preto", "Vermelho", "Azul Royal"],
    sizes: ["PP", "P", "M", "G"],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop"
    ],
    description: "Vestido longo para ocasiões especiais. Corte sereia com detalhes em renda.",
    composition: "60% Poliéster, 35% Viscose, 5% Elastano",
    care: "Lavagem a seco recomendada."
  },
  {
    id: '11',
    name: "Polo Premium Cotton",
    price: 289.90,
    category: "masculino",
    type: "Polo",
    colors: ["Branco", "Preto", "Azul Marinho", "Vinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1625910513390-a0e9b3306112?w=600&h=800&fit=crop"
    ],
    description: "Polo em algodão Pima de alta qualidade. Conforto e estilo casual.",
    composition: "100% Algodão Pima",
    care: "Lavar à máquina em água fria."
  },
  {
    id: '12',
    name: "Casaco Trench Coat",
    price: 879.90,
    category: "feminino",
    type: "Casaco",
    colors: ["Bege", "Preto", "Verde Militar"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop"
    ],
    description: "Trench coat clássico com cinto. Peça icônica do guarda-roupa.",
    composition: "100% Gabardine de Algodão",
    care: "Lavar à máquina em programa delicado.",
    isNew: true
  },
  {
    id: '13',
    name: "Top Cropped Fitness",
    price: 189.90,
    category: "feminino",
    type: "Top",
    colors: ["Preto", "Rosa", "Azul", "Verde"],
    sizes: ["PP", "P", "M", "G"],
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526476148966-98bd039463ea?w=600&h=800&fit=crop"
    ],
    description: "Top cropped com suporte médio. Ideal para treinos e lifestyle.",
    composition: "87% Poliamida, 13% Elastano",
    care: "Lavar à máquina em água fria.",
    isNew: true
  },
  {
    id: '14',
    name: "Jeans Skinny Premium",
    price: 399.90,
    category: "feminino",
    type: "Calça",
    colors: ["Azul Escuro", "Preto", "Azul Claro"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&h=800&fit=crop"
    ],
    description: "Jeans skinny com elastano. Modelagem que valoriza a silhueta.",
    composition: "98% Algodão, 2% Elastano",
    care: "Lavar do avesso. Não usar alvejante."
  },
  {
    id: '15',
    name: "Cardigan Cashmere",
    price: 749.90,
    category: "feminino",
    type: "Cardigan",
    colors: ["Bege", "Cinza", "Rosa", "Azul"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?w=600&h=800&fit=crop"
    ],
    description: "Cardigan em cashmere puro. Maciez e conforto térmico.",
    composition: "100% Cashmere",
    care: "Lavar à mão ou lavagem a seco."
  },
  {
    id: '16',
    name: "Bermuda Sarja Premium",
    price: 299.90,
    category: "masculino",
    type: "Bermuda",
    colors: ["Bege", "Preto", "Azul Marinho", "Verde"],
    sizes: ["38", "40", "42", "44", "46"],
    images: [
      "https://images.unsplash.com/photo-1519238263995-ab731cf1c2e5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543322748-33838029514f?w=600&h=800&fit=crop"
    ],
    description: "Bermuda em sarja com modelagem reta. Versátil para o dia a dia.",
    composition: "97% Algodão, 3% Elastano",
    care: "Lavar à máquina. Secar à sombra."
  },
  {
    id: '17',
    name: "Suéter Gola V Merino",
    price: 449.90,
    category: "masculino",
    type: "Suéter",
    colors: ["Preto", "Cinza", "Azul Marinho", "Vinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503341960582-b45751874cf0?w=600&h=800&fit=crop"
    ],
    description: "Suéter em lã merino com gola V. Elegância para o inverno.",
    composition: "100% Lã Merino",
    care: "Lavar à mão em água fria."
  },
  {
    id: '18',
    name: "Camiseta Básica Premium",
    price: 149.90,
    category: "masculino",
    type: "Camiseta",
    colors: ["Branco", "Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
    ],
    description: "Camiseta básica em algodão pima. Essencial no guarda-roupa.",
    composition: "100% Algodão Pima",
    care: "Lavar à máquina."
  },
  {
    id: '19',
    name: "Macacão Longo Elegante",
    price: 899.90,
    category: "feminino",
    type: "Macacão",
    colors: ["Preto", "Verde", "Terracota"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1594633313515-0fd5dca54b68?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop"
    ],
    description: "Macacão longo com decote e amarração. Peça statement.",
    composition: "95% Viscose, 5% Elastano",
    care: "Lavar à mão.",
    isNew: true
  },
  {
    id: '20',
    name: "Jaqueta Bomber Couro",
    price: 999.90,
    category: "masculino",
    type: "Jaqueta",
    colors: ["Preto", "Marrom"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop"
    ],
    description: "Jaqueta bomber em couro com forro interno. Estilo aviador.",
    composition: "100% Couro, Forro 100% Poliéster",
    care: "Limpar com produto específico para couro."
  },
  {
    id: '21',
    name: "Shorts Alfaiataria",
    price: 349.90,
    category: "feminino",
    type: "Shorts",
    colors: ["Preto", "Bege", "Branco"],
    sizes: ["34", "36", "38", "40", "42"],
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop"
    ],
    description: "Shorts de alfaiataria com pregas. Elegância e conforto.",
    composition: "63% Poliéster, 34% Viscose, 3% Elastano",
    care: "Lavar à máquina em programa delicado."
  },
  {
    id: '22',
    name: "Camisa Linho Premium",
    price: 389.90,
    category: "masculino",
    type: "Camisa",
    colors: ["Branco", "Azul Claro", "Bege", "Rosa"],
    sizes: ["P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=800&fit=crop"
    ],
    description: "Camisa em linho puro. Frescor e elegância casual.",
    composition: "100% Linho",
    care: "Lavar à máquina em água fria."
  },
  {
    id: '23',
    name: "Body Renda Premium",
    price: 269.90,
    category: "feminino",
    type: "Body",
    colors: ["Preto", "Branco", "Nude", "Vinho"],
    sizes: ["PP", "P", "M", "G", "GG"],
    images: [
      "https://images.unsplash.com/photo-1594633312515-0fd5dca54b68?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop"
    ],
    description: "Body com detalhes em renda. Sensualidade e elegância.",
    composition: "90% Poliamida, 10% Elastano",
    care: "Lavar à mão."
  },
  {
    id: '24',
    name: "Calça Jogger Premium",
    price: 359.90,
    category: "masculino",
    type: "Calça",
    colors: ["Preto", "Cinza", "Azul Marinho"],
    sizes: ["P", "M", "G", "GG", "XG"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=800&fit=crop"
    ],
    description: "Calça jogger com tecido tech. Conforto e estilo urbano.",
    composition: "65% Algodão, 30% Poliéster, 5% Elastano",
    care: "Lavar à máquina."
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
