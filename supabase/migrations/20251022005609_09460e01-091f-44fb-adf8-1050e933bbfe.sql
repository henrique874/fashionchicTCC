-- Criar bucket de storage para produtos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('products', 'products', true, 52428800, ARRAY['image/png', 'image/jpeg', 'image/jpg', 'image/webp']);

-- Criar políticas de acesso público
CREATE POLICY "Public Access to Products Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'products');

CREATE POLICY "Authenticated users can upload products images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');