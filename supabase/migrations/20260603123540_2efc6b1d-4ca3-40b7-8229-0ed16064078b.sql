DROP POLICY IF EXISTS "Block team-images inserts for non-service" ON storage.objects;
DROP POLICY IF EXISTS "Block team-images updates for non-service" ON storage.objects;
DROP POLICY IF EXISTS "Block team-images deletes for non-service" ON storage.objects;

-- Restrictive policies: combined with AND on every operation. Denies anon/authenticated
-- any access to the team-images bucket. service_role bypasses RLS.
CREATE POLICY "Deny team-images select for non-service"
ON storage.objects
AS RESTRICTIVE
FOR SELECT
TO anon, authenticated
USING (bucket_id <> 'team-images');

CREATE POLICY "Deny team-images insert for non-service"
ON storage.objects
AS RESTRICTIVE
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id <> 'team-images');

CREATE POLICY "Deny team-images update for non-service"
ON storage.objects
AS RESTRICTIVE
FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'team-images')
WITH CHECK (bucket_id <> 'team-images');

CREATE POLICY "Deny team-images delete for non-service"
ON storage.objects
AS RESTRICTIVE
FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'team-images');