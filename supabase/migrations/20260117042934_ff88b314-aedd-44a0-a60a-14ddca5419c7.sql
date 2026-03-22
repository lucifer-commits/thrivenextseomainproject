-- Fix 1: Drop existing restrictive policies
DROP POLICY IF EXISTS "Deny public read access" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin read access" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin update access" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin delete access" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_submissions;

-- Fix 2: Create role-based access system
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Fix 3: Create PERMISSIVE policies for contact_submissions using role-based access
-- Admin read access (PERMISSIVE is default)
CREATE POLICY "Admin read access"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin update access
CREATE POLICY "Admin update access"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin delete access
CREATE POLICY "Admin delete access"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Public insert (will be routed through edge function for rate limiting)
CREATE POLICY "Allow public inserts"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- RLS for user_roles table (only admins can manage roles)
CREATE POLICY "Admins can view roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));