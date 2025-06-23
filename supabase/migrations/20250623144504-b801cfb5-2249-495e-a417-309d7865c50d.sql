
-- Create tech_stack table
CREATE TABLE public.tech_stack (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  icon_name TEXT, -- Lucide icon name
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE public.portfolio_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  tech_stack TEXT[], -- Array of tech names
  live_url TEXT,
  github_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_info table
CREATE TABLE public.contact_info (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  icon_name TEXT NOT NULL, -- Lucide icon name
  link TEXT, -- URL or tel: or mailto: link
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables (public data, no user-specific restrictions needed)
ALTER TABLE public.tech_stack ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is portfolio data)
CREATE POLICY "Tech stack is publicly readable" 
  ON public.tech_stack 
  FOR SELECT 
  USING (true);

CREATE POLICY "Portfolio projects are publicly readable" 
  ON public.portfolio_projects 
  FOR SELECT 
  USING (true);

CREATE POLICY "Contact info is publicly readable" 
  ON public.contact_info 
  FOR SELECT 
  USING (true);

-- Insert sample tech stack data
INSERT INTO public.tech_stack (name, category, description, icon_name) VALUES
('Kotlin', 'Mobile Development', 'Native Android development', 'Smartphone'),
('Flutter', 'Cross-Platform', 'Cross-platform mobile apps', 'Code'),
('Swift', 'Mobile Development', 'Native iOS development', 'Smartphone'),
('React', 'Web Development', 'Modern web applications', 'Palette');

-- Insert sample portfolio projects
INSERT INTO public.portfolio_projects (title, description, image_url, tech_stack, live_url, github_url, display_order) VALUES
('E-Commerce Mobile App', 'A comprehensive e-commerce application with real-time inventory, payment integration, and user authentication.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', ARRAY['Flutter', 'Firebase', 'Dart'], '#', '#', 1),
('Social Media Dashboard', 'Analytics dashboard for social media management with real-time data visualization and reporting features.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', ARRAY['React', 'Node.js', 'MongoDB'], '#', '#', 2),
('Fitness Tracking App', 'iOS fitness application with workout tracking, progress monitoring, and health data integration.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', ARRAY['Swift', 'HealthKit', 'Core Data'], '#', '#', 3),
('Restaurant Management', 'Android application for restaurant order management with inventory tracking and customer management.', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', ARRAY['Kotlin', 'Room', 'Retrofit'], '#', '#', 4);

-- Insert sample contact info
INSERT INTO public.contact_info (label, value, icon_name, link, display_order) VALUES
('Phone', '+91 2345 67890', 'Phone', 'tel:+912345678900', 1),
('Email', 'hello@reallygreatsite.com', 'Mail', 'mailto:hello@reallygreatsite.com', 2),
('Address', '123 Anywhere St. Any City', 'MapPin', null, 3),
('Website', 'www.reallygreatsite.com', 'Globe', 'https://www.reallygreatsite.com', 4);
