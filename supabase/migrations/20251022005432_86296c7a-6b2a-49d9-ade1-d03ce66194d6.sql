-- Limpar produtos existentes
DELETE FROM products;

-- Inserir produtos femininos (4 itens)
INSERT INTO products (id, name, description, price, category, subcategory, sizes, colors, images, stock) VALUES
('a21a1d04-e321-4c2e-9d8f-fbbadac787e1', 'Blazer Executivo Feminino', 'Blazer sofisticado de alfaiataria premium em tecido nobre. Perfeito para o ambiente corporativo com elegância atemporal.', 299.90, 'feminino', 'blazers', ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['Bege', 'Preto', 'Branco'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/blazer-executivo-feminino.jpg'], 100),

('6da2933f-18f9-4d44-896b-2b1125250cb2', 'Vestido Midi Sofisticado', 'Vestido midi elegante em tecido fluido de alta qualidade. Design atemporal para ocasiões especiais.', 189.90, 'feminino', 'vestidos', ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['Vinho', 'Preto', 'Verde'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/vestido-midi-sofisticado.jpg'], 100),

('c7a92fc5-ce4b-47ac-aa47-9da289ec599e', 'Calça Alfaiataria Feminina', 'Calça de alfaiataria premium com caimento impecável. Corte moderno e tecido de alta qualidade.', 219.90, 'feminino', 'calcas', ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['Bege', 'Preto', 'Branco'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/calca-alfaiataria-feminina.jpg'], 100),

('a1017ff1-8ed0-4dcc-b0f5-0e19e0fe11d9', 'Blusa Crepe Elegante', 'Blusa de crepe premium com modelagem refinada. Ideal para o dia a dia corporativo com sofisticação.', 129.90, 'feminino', 'blusas', ARRAY['PP', 'P', 'M', 'G', 'GG'], ARRAY['Laranja', 'Preto', 'Branco', 'Bege'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/blusa-crepe-elegante.jpg'], 100);

-- Inserir produtos masculinos (4 itens)
INSERT INTO products (id, name, description, price, category, subcategory, sizes, colors, images, stock) VALUES
('24117d97-3b72-4f9d-b43b-260ae24c7848', 'Camisa Social Premium', 'Camisa social em tecido de algodão egípcio premium. Acabamento impecável para o profissional moderno.', 159.90, 'masculino', 'camisas', ARRAY['PP', 'P', 'M', 'G', 'GG', 'XG'], ARRAY['Azul Claro', 'Branco', 'Rosa'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/camisa-social-premium.jpg'], 100),

('039186d2-49a8-46cf-bdd8-16bb6f895513', 'Polo Premium Masculina', 'Polo de algodão pima premium com design sofisticado. Elegância casual para o dia a dia.', 89.90, 'masculino', 'polos', ARRAY['P', 'M', 'G', 'GG', 'XG'], ARRAY['Preto', 'Marinho', 'Branco'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/polo-premium-masculina.jpg'], 100),

('a3c4c54e-9dc5-447f-b4b9-c1744a7b2bdb', 'Terno Completo Masculino', 'Terno completo de alfaiataria premium. Tecido italiano e corte impecável para grandes ocasiões.', 799.90, 'masculino', 'ternos', ARRAY['P', 'M', 'G', 'GG', 'XG'], ARRAY['Marinho', 'Cinza', 'Preto'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/terno-completo-masculino.jpg'], 100),

('b4d5e67f-8cd9-4e5a-bc6d-d89012e3f4a5', 'Calça Chino Premium', 'Calça chino de alfaiataria em sarja premium. Versatilidade e elegância para o homem contemporâneo.', 179.90, 'masculino', 'calcas', ARRAY['P', 'M', 'G', 'GG', 'XG'], ARRAY['Marinho', 'Bege', 'Verde'], ARRAY['https://pyrtqeuaxonvfanpdpjt.supabase.co/storage/v1/object/public/products/calca-chino-premium.jpg'], 100);