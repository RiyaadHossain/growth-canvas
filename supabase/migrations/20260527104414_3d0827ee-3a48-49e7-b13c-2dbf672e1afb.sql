DROP POLICY IF EXISTS "Public read team-images" ON storage.objects;

-- Team images are admin-managed and served via the public CDN URL on the bucket.
-- No RLS policies on storage.objects for this bucket means anon/authenticated cannot
-- list, upload, modify, or delete files via the API. Only service_role can write.
-- Public file URLs continue to work because the bucket itself is marked public.