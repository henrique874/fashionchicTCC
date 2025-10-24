-- Atualizar os caminhos das imagens para a pasta public
UPDATE products 
SET images = ARRAY[
  '/products/blazer-executivo-feminino-1.jpg',
  '/products/blazer-executivo-feminino-2.jpg'
]
WHERE id = '9d642058-e7ad-4e30-af3c-a0c725d58005';

UPDATE products 
SET images = ARRAY[
  '/products/vestido-midi-sofisticado-1.jpg',
  '/products/vestido-midi-sofisticado-2.jpg'
]
WHERE id = '94299806-62ec-4619-b316-79f1de99f5be';

UPDATE products 
SET images = ARRAY[
  '/products/blusa-crepe-elegante-1.jpg',
  '/products/blusa-crepe-elegante-2.jpg'
]
WHERE id = '4389fe49-4e79-4f22-a121-4a7a955f5049';

UPDATE products 
SET images = ARRAY[
  '/products/calca-alfaiataria-feminina-1.jpg',
  '/products/calca-alfaiataria-feminina-2.jpg'
]
WHERE id = '5e577709-f489-4fc0-be8a-4d8d74b33464';

UPDATE products 
SET images = ARRAY[
  '/products/polo-premium-masculina-1.jpg',
  '/products/polo-premium-masculina-2.jpg'
]
WHERE id = '3fd5c184-fc22-4d37-bacc-f3e89440192b';

UPDATE products 
SET images = ARRAY[
  '/products/terno-completo-masculino-1.jpg',
  '/products/terno-completo-masculino-2.jpg'
]
WHERE id = 'ba2e72a5-6787-46ea-86fc-60288e246ff1';

UPDATE products 
SET images = ARRAY[
  '/products/camisa-social-premium-1.jpg',
  '/products/camisa-social-premium-2.jpg'
]
WHERE id = '1d97e527-ee2b-4bcc-b5ac-127f107d1b4b';

UPDATE products 
SET images = ARRAY[
  '/products/calca-chino-premium-1.jpg',
  '/products/calca-chino-premium-2.jpg'
]
WHERE id = '63ae663d-1130-43eb-9bff-e677691d6719';