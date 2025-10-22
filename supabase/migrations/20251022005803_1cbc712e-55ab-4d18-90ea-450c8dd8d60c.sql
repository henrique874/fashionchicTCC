-- Limpar todos os produtos existentes
DELETE FROM products;

-- Inserir 4 produtos femininos
INSERT INTO products (name, price, category, subcategory, colors, sizes, images, description, stock) VALUES
('Blazer Executivo Feminino', 589.00, 'feminino', 'Blazer', ARRAY['Preto', 'Cinza', 'Azul Marinho'], ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['src/assets/products/blazer-executivo-feminino.jpg'], 'Blazer feminino de alfaiataria premium com corte impecável e acabamento sofisticado.', 50),
('Vestido Midi Sofisticado', 449.00, 'feminino', 'Vestido', ARRAY['Preto', 'Azul Marinho', 'Bordô'], ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['src/assets/products/vestido-midi-sofisticado.jpg'], 'Vestido midi elegante em tecido premium, perfeito para ocasiões especiais.', 50),
('Calça Alfaiataria Feminina', 389.00, 'feminino', 'Calça', ARRAY['Preto', 'Cinza', 'Bege'], ARRAY['36', '38', '40', '42', '44'], ARRAY['src/assets/products/calca-alfaiataria-feminina.jpg'], 'Calça de alfaiataria feminina com caimento perfeito e tecido de alta qualidade.', 50),
('Blusa Crepe Elegante', 299.00, 'feminino', 'Blusa', ARRAY['Branco', 'Preto', 'Rose'], ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['src/assets/products/blusa-crepe-elegante.jpg'], 'Blusa em crepe premium com detalhes sofisticados e caimento fluido.', 50);

-- Inserir 4 produtos masculinos
INSERT INTO products (name, price, category, subcategory, colors, sizes, images, description, stock) VALUES
('Camisa Social Premium', 349.00, 'masculino', 'Camisa', ARRAY['Branco', 'Azul Claro', 'Preto'], ARRAY['P', 'M', 'G', 'GG', 'XGG'], ARRAY['src/assets/products/camisa-social-premium.jpg'], 'Camisa social em algodão egípcio com corte slim e acabamento impecável.', 50),
('Polo Premium Masculina', 279.00, 'masculino', 'Polo', ARRAY['Preto', 'Azul Marinho', 'Cinza'], ARRAY['P', 'M', 'G', 'GG', 'XGG'], ARRAY['src/assets/products/polo-premium-masculina.jpg'], 'Polo premium em algodão pima com toque macio e durabilidade superior.', 50),
('Terno Completo Masculino', 1890.00, 'masculino', 'Terno', ARRAY['Preto', 'Azul Marinho', 'Cinza Chumbo'], ARRAY['46', '48', '50', '52', '54'], ARRAY['src/assets/products/terno-completo-masculino.jpg'], 'Terno completo de alfaiataria com tecido importado e corte sob medida.', 30),
('Calça Chino Premium', 399.00, 'masculino', 'Calça', ARRAY['Bege', 'Azul Marinho', 'Cinza'], ARRAY['38', '40', '42', '44', '46'], ARRAY['src/assets/products/calca-chino-premium.jpg'], 'Calça chino premium em sarja de algodão com acabamento de alta qualidade.', 50);