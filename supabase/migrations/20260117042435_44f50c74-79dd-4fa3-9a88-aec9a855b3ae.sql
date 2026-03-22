-- Fix Critical: Add deny policy for public SELECT access
CREATE POLICY "Deny public read access"
  ON public.contact_submissions
  FOR SELECT
  TO anon
  USING (false);

-- Add missing DELETE policy for admin only
CREATE POLICY "Admin delete access"
  ON public.contact_submissions
  FOR DELETE
  TO authenticated
  USING (auth.email() = 'thrivenextmanager@gmail.com');