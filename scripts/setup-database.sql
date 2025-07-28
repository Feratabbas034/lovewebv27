-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  partner_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  package VARCHAR(50) NOT NULL CHECK (package IN ('basic', 'premium')),
  story TEXT NOT NULL,
  photos INTEGER DEFAULT 0,
  price INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'deploying', 'completed', 'rejected')),
  site_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create pages table for dynamic page management
CREATE TABLE IF NOT EXISTS pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  status VARCHAR(50) DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_status ON pages(status);

-- Insert sample pages
INSERT INTO pages (title, slug, content, images, status) VALUES
('Ayşe & Mehmet', 'ayse-mehmet', 'İki kalbin bir olduğu, aşkın en güzel halini yaşadığımız hikayemiz. 2020 yılının soğuk bir şubat gününde, üniversitede ortak bir derste tanıştık. Mehmet''in gülümsemesi ve Ayşe''nin kahkahası, o sınıfta aşkın ilk tohumlarını ekti.', '{}', 'published'),
('Elif & Burak', 'elif-burak', 'Müziğin ritmiyle başlayan, aşkın melodisiyle devam eden sonsuz hikayemiz. 2019 yılında Ankara''da düzenlenen müzik festivalinde tanıştık. İkimiz de aynı grubun hayranıydık ve konser sırasında yan yana geldik.', '{}', 'published'),
('Zeynep & Can', 'zeynep-can', 'Dostlukla başlayan, aşkla büyüyen, evlilikle taçlanan muhteşem yolculuğumuz. 2018 yılında İzmir''de üniversite okurken tanıştık. İkimiz de mühendislik fakültesinde okuyorduk ve ortak bir proje grubunda yer aldık.', '{}', 'published')
ON CONFLICT (slug) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_pages_updated_at ON pages;
CREATE TRIGGER update_pages_updated_at
    BEFORE UPDATE ON pages
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
