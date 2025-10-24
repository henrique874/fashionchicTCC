-- Adicionar campos de promoção na tabela products
ALTER TABLE products 
ADD COLUMN on_sale boolean DEFAULT false,
ADD COLUMN discount_percentage numeric DEFAULT 0;

-- Adicionar índice para melhorar performance de consultas de produtos em promoção
CREATE INDEX idx_products_on_sale ON products(on_sale) WHERE on_sale = true;

-- Atualizar os produtos solicitados com descontos
-- Blusa Crepe Elegante - 30% desconto
UPDATE products 
SET on_sale = true, discount_percentage = 30
WHERE id = '4389fe49-4e79-4f22-a121-4a7a955f5049';

-- Camisa Social Premium - 40% desconto
UPDATE products 
SET on_sale = true, discount_percentage = 40
WHERE id = '1d97e527-ee2b-4bcc-b5ac-127f107d1b4b';

-- Terno Completo Masculino - 50% desconto
UPDATE products 
SET on_sale = true, discount_percentage = 50
WHERE id = 'ba2e72a5-6787-46ea-86fc-60288e246ff1';