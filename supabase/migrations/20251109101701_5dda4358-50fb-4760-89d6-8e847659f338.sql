-- Create projects table
CREATE TABLE public.projects (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  tools text NOT NULL,
  live_link text,
  github_link text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view projects
CREATE POLICY "Anyone can view projects"
  ON public.projects
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to insert projects (you can restrict this later with auth)
CREATE POLICY "Anyone can insert projects"
  ON public.projects
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to update projects (you can restrict this later with auth)
CREATE POLICY "Anyone can update projects"
  ON public.projects
  FOR UPDATE
  USING (true);

-- Create policy to allow anyone to delete projects (you can restrict this later with auth)
CREATE POLICY "Anyone can delete projects"
  ON public.projects
  FOR DELETE
  USING (true);