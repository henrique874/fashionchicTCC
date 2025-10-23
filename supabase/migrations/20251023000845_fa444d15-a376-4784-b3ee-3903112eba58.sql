-- Atualizar as URLs das imagens dos produtos para usar imagens reais do Unsplash
UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Camisa Linho Premium';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Calça Alfaiataria Feminina';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Vestido Midi Elegance';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80',
  'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Blazer Premium';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1598808503491-e933f8c1d9b4?w=800&q=80',
  'https://images.unsplash.com/photo-1598808503491-e933f8c1d9b4?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Camisa Social Premium';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Calça Chino Premium';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=800&q=80',
  'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Polo Premium Cotton';

UPDATE products 
SET images = ARRAY[
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop&crop=entropy'
]
WHERE name = 'Terno Completo Slim';