-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  source TEXT DEFAULT 'contact_page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Allow public inserts" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated admin to read all submissions
CREATE POLICY "Admin read access" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (auth.email() = 'thrivenextmanager@gmail.com');

-- Allow admin to update submissions (for notes, status)
CREATE POLICY "Admin update access" 
ON public.contact_submissions 
FOR UPDATE 
TO authenticated
USING (auth.email() = 'thrivenextmanager@gmail.com');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();