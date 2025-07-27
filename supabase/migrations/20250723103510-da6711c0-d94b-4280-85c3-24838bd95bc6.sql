-- إنشاء جدول المستخدمين
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  birth_date DATE,
  city TEXT,
  nationality TEXT,
  phone TEXT,
  profile_image TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'engineer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول المنتجات
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'SDG',
  images TEXT[] DEFAULT '{}',
  description TEXT,
  condition TEXT CHECK (condition IN ('new', 'used')),
  type TEXT CHECK (type IN ('sale', 'exchange', 'other')),
  exchange_for TEXT,
  location TEXT,
  whatsapp TEXT,
  email TEXT,
  coupon TEXT,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول المهندسين
CREATE TABLE public.engineers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT,
  specialties TEXT[] DEFAULT '{}',
  location TEXT,
  location_link TEXT,
  whatsapp TEXT,
  email TEXT,
  nationality TEXT,
  currency TEXT,
  bank_accounts JSONB DEFAULT '{}',
  social_links JSONB DEFAULT '{}',
  profile_image TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول الألعاب والتطبيقات
CREATE TABLE public.games (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image TEXT,
  download_link TEXT,
  size TEXT,
  version TEXT,
  requirements TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  downloads_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول صوتيات القرآن
CREATE TABLE public.quran_audio (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  surah_name TEXT NOT NULL,
  surah_number INTEGER NOT NULL,
  reciter_name TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration INTEGER,
  file_size TEXT,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول التقييمات
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  engineer_id UUID REFERENCES public.engineers(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول الشكاوى
CREATE TABLE public.complaints (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved', 'closed')),
  admin_response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول الطلبات
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  seller_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER DEFAULT 1,
  total_price DECIMAL(10,2) NOT NULL,
  delivery_status TEXT DEFAULT 'pending' CHECK (delivery_status IN ('pending', 'confirmed', 'shipping', 'delivered', 'cancelled')),
  customer_confirmation BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- تمكين RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.engineers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quran_audio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- سياسات RLS للمستخدمين
CREATE POLICY "Users can view all profiles" ON public.users FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.users FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = user_id);

-- سياسات RLS للمنتجات
CREATE POLICY "Products are viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Users can insert their own products" ON public.products FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));
CREATE POLICY "Users can update their own products" ON public.products FOR UPDATE USING (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));

-- سياسات RLS للمهندسين (المسؤولين فقط)
CREATE POLICY "Engineers are viewable by everyone" ON public.engineers FOR SELECT USING (true);
CREATE POLICY "Only admins can manage engineers" ON public.engineers FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE user_id = auth.uid() AND role = 'admin')
);

-- سياسات RLS للألعاب (المسؤولين فقط للإدارة)
CREATE POLICY "Games are viewable by everyone" ON public.games FOR SELECT USING (true);
CREATE POLICY "Only admins can manage games" ON public.games FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE user_id = auth.uid() AND role = 'admin')
);

-- سياسات RLS لصوتيات القرآن (المسؤولين فقط للإدارة)
CREATE POLICY "Quran audio is viewable by everyone" ON public.quran_audio FOR SELECT USING (true);
CREATE POLICY "Only admins can manage quran audio" ON public.quran_audio FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE user_id = auth.uid() AND role = 'admin')
);

-- سياسات RLS للتقييمات
CREATE POLICY "Reviews are viewable by everyone" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Users can insert their own reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));

-- سياسات RLS للشكاوى
CREATE POLICY "Users can view their own complaints" ON public.complaints FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));
CREATE POLICY "Users can insert their own complaints" ON public.complaints FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));
CREATE POLICY "Admins can view all complaints" ON public.complaints FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE user_id = auth.uid() AND role = 'admin')
);

-- سياسات RLS للطلبات
CREATE POLICY "Users can view their own orders" ON public.orders FOR SELECT USING (
  auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()) OR
  auth.uid() = (SELECT user_id FROM public.users u WHERE u.id = seller_id)
);
CREATE POLICY "Users can create orders" ON public.orders FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.users WHERE user_id = auth.uid()));

-- إنشاء triggers للتحديث التلقائي
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_complaints_updated_at BEFORE UPDATE ON public.complaints FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- إدراج المهندسين المطلوبين
INSERT INTO public.engineers (name, name_en, specialties, location, location_link, whatsapp, email, nationality, currency, bank_accounts, social_links) VALUES
('حمزه مكي', 'Hamza Maki', ARRAY['برمجة سوفت وير', 'هارد وير', 'الهواتف', 'الكمبيوترات', 'شبكات الوافاي'], 'مراية موندوا', 'https://maps.app.goo.gl/icMYmN1xCfxMKGGN9', '+23566687837', 'walmacki235@gmail.com', 'تشاد', 'XAF/SDG', 
'{"MOOV_MONEY": "+23599987837", "AIRTEL_MONEY": "+23566687837", "ECOBANK_CHAD": "32500008740", "UBA_CHAD": "70805503685", "BANK_SUDAN": "2782663"}',
'{"linkedin": "www.linkedin.com/in/", "messenger": "https://m.me/hamzamacki235"}'),

('ود تيرنة', 'Wat Terna', ARRAY['سوفت وير', 'هارد وير', 'الهواتف', 'الكمبيوترات'], 'قور برنڨة', '', '+235 64 22 04 61', '', '', 'SDG', '{}', '{}'),

('عبدالكريم بشارة', 'Abdel-kerim Bichara', ARRAY['سوفت وير', 'هارد وير', 'الهواتف', 'الكمبيوترات'], 'أبشه', '', '+235 66 18 01 36', '', '', 'XAF', '{}', '{}');

-- إنشاء function للمسؤولين
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.users (user_id, first_name, last_name, phone, profile_image)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.phone, ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  );
  RETURN NEW;
END;
$$;

-- إنشاء trigger للمستخدمين الجدد
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();