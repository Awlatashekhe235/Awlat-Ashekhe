-- إنشاء جدول المنتجات
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  description TEXT,
  price NUMERIC,
  category TEXT,
  condition TEXT,
  location TEXT,
  image_url TEXT,
  email TEXT,
  whatsapp TEXT,
  exchange_opt BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  quantity INTEGER DEFAULT 1,
  rating NUMERIC DEFAULT 0,
  type TEXT DEFAULT 'للبيع',
  seller_id UUID DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- إدراج منتجات أمثلة
INSERT INTO public.products (name, description, price, category, condition, location, image_url, email, whatsapp, exchange_opt, is_active, quantity, rating, type) VALUES 
('iPhone 15 Pro Max', 'آيفون 15 برو ماكس جديد بالكرتون، 256GB، لون طبيعي تيتانيوم', 1200.00, 'الهواتف والإكسسوارات', 'جديد', 'الخرطوم، السودان', 'https://images.unsplash.com/photo-1696446702061-344f5ad54670?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', true, true, 2, 5.0, 'للبيع'),
('Samsung Galaxy S24 Ultra', 'سامسونج جالاكسي S24 الترا، 512GB، لون أسود', 1100.00, 'الهواتف والإكسسوارات', 'جديد', 'أنجمينا، تشاد', 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', true, true, 1, 4.8, 'للبيع'),
('MacBook Pro M3', 'ماك بوك برو M3 شيب، 16GB رام، 512GB تخزين', 2500.00, 'الكمبيوترات واللابتوبات', 'مستعمل', 'الخرطوم، السودان', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', false, true, 1, 4.9, 'للبيع'),
('PlayStation 5', 'بلايستيشن 5 بحالة ممتازة مع يدين', 800.00, 'الألعاب والترفيه', 'مستعمل', 'أنجمينا، تشاد', 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', true, true, 1, 4.7, 'للبيع'),
('Honda Civic 2022', 'هوندا سيفيك 2022، أوتوماتيك، حالة ممتازة', 25000.00, 'السيارات والمركبات', 'مستعمل', 'الخرطوم، السودان', 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', true, true, 1, 4.5, 'للبيع'),
('Samsung 75" Smart TV', 'تلفزيون سامسونج ذكي 75 بوصة، 4K Ultra HD', 1800.00, 'الأجهزة المنزلية', 'جديد', 'أنجمينا، تشاد', 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', false, true, 2, 4.6, 'للبيع'),
('Nike Air Jordan', 'حذاء نايك اير جوردان أصلي، مقاس 42', 350.00, 'الملابس والموضة', 'جديد', 'الخرطوم، السودان', 'https://images.unsplash.com/photo-1584735174965-cb6014b550b4?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', true, true, 3, 4.8, 'للبيع'),
('Canon EOS R5', 'كاميرا كانون EOS R5 مع عدسة 24-70mm', 3200.00, 'الهواتف والإكسسوارات', 'مستعمل', 'أنجمينا، تشاد', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400', 'hamza@awladashekhe.com', '+235666878370', false, true, 1, 4.9, 'للبيع');