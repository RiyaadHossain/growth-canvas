-- Public read for team-images
CREATE POLICY "Public can view team-images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'team-images');

-- Restrict writes: no INSERT/UPDATE/DELETE policies for anon/authenticated.
-- Only service_role (which bypasses RLS) can write. Explicit deny-style: omit policies.
-- To make intent explicit, add restrictive-style policies that deny non-service writes.
CREATE POLICY "Block team-images inserts for non-service"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id <> 'team-images');

CREATE POLICY "Block team-images updates for non-service"
ON storage.objects
FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'team-images');

CREATE POLICY "Block team-images deletes for non-service"
ON storage.objects
FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'team-images');