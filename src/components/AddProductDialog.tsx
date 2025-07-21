import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AddProductDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null as File | null,
    whatsapp: '',
    email: '',
    location: '',
    type: 'sale', // sale or exchange
    exchangeItem: '',
    coupon: '',
    condition: 'new'
  });
  
  const { toast } = useToast();

  const categories = [
    "📱 الهواتف والإكسسوارات",
    "💻 الكمبيوترات واللابتوبات",
    "🏠 الأجهزة المنزلية", 
    "🎮 الألعاب والترفيه",
    "👕 الملابس والموضة",
    "🚗 السيارات والمركبات",
    "📚 الكتب والتعليم",
    "🎵 الموسيقى والآلات",
    "⚽ الرياضة واللياقة",
    "🏥 الصحة والجمال",
    "👶 الأطفال والأمومة",
    "🌱 الحدائق والنباتات",
    "🏢 المكاتب والأعمال",
    "🔧 الأدوات والمعدات",
    "🎨 الفنون والحرف",
    "🍔 الطعام والشراب",
    "🧳 السفر والرحلات",
    "🎁 الهدايا والمناسبات",
    "📖 الخدمات التعليمية",
    "🔄 أخرى / Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.category || (!formData.price && formData.type === 'sale') || !formData.whatsapp) {
      toast({
        title: "⚠️ بيانات ناقصة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "🔒 يجب تسجيل الدخول",
          description: "يرجى تسجيل الدخول لإضافة منتج",
          variant: "destructive"
        });
        return;
      }

      // Prepare product data
      const productData = {
        name: formData.name,
        category: formData.category,
        price: formData.type === 'sale' ? parseFloat(formData.price) : null,
        description: formData.description,
        whatsapp: formData.whatsapp,
        email: formData.email,
        location: formData.location,
        type: formData.type,
        exchange_opt: formData.type === 'exchange',
        condition: formData.condition,
        seller_id: user.id,
        is_active: true
      };

      // Insert product into database
      const { error } = await supabase
        .from('public.products')
        .insert([productData]);

      if (error) {
        toast({
          title: "❌ خطأ في إضافة المنتج",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "✅ تم إضافة المنتج بنجاح!",
        description: `تم إضافة ${formData.name} وسيتم مراجعته قريباً`,
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        category: '',
        price: '',
        description: '',
        image: null,
        whatsapp: '',
        email: '',
        location: '',
        type: 'sale',
        exchangeItem: '',
        coupon: '',
        condition: 'new'
      });
      setIsOpen(false);
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      toast({
        title: "📸 تم رفع الصورة",
        description: `تم اختيار: ${file.name}`,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="icon"
          className="rounded-full bg-gradient-accent hover:bg-gradient-primary transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        >
          ➕
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card-glass backdrop-blur-md border-card-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-arabic text-center">
            ➕ إضافة منتج جديد
          </DialogTitle>
          <DialogDescription className="text-center font-arabic">
            أضف منتجك الجديد للبيع أو المبادلة بسهولة وسرعة
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-arabic">اسم المنتج *</Label>
            <Input
              id="name"
              placeholder="أدخل اسم المنتج..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="font-arabic text-right"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="font-arabic">الفئة *</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="font-arabic text-right">
                <SelectValue placeholder="اختر الفئة المناسبة..." />
              </SelectTrigger>
              <SelectContent className="bg-card-glass backdrop-blur-md">
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category} className="font-arabic text-right">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Product Type */}
          <div className="space-y-3">
            <Label className="font-arabic">نوع العرض *</Label>
            <RadioGroup
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value })}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="sale" id="sale" />
                <Label htmlFor="sale" className="font-arabic">💰 للبيع</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="exchange" id="exchange" />
                <Label htmlFor="exchange" className="font-arabic">🔄 للمبادلة</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Price (if for sale) */}
          {formData.type === 'sale' && (
            <div className="space-y-2">
              <Label htmlFor="price" className="font-arabic">السعر بالجنيه السوداني *</Label>
              <Input
                id="price"
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="font-arabic text-right"
                required
              />
            </div>
          )}

          {/* Exchange Item (if for exchange) */}
          {formData.type === 'exchange' && (
            <div className="space-y-2">
              <Label htmlFor="exchangeItem" className="font-arabic">المنتج المطلوب للمبادلة *</Label>
              <Input
                id="exchangeItem"
                placeholder="ما هو المنتج الذي تريد مبادلته؟"
                value={formData.exchangeItem}
                onChange={(e) => setFormData({ ...formData, exchangeItem: e.target.value })}
                className="font-arabic text-right"
              />
            </div>
          )}

          {/* Product Condition */}
          <div className="space-y-3">
            <Label className="font-arabic">حالة المنتج</Label>
            <RadioGroup
              value={formData.condition}
              onValueChange={(value) => setFormData({ ...formData, condition: value })}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="font-arabic">✨ جديد</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="used" id="used" />
                <Label htmlFor="used" className="font-arabic">📦 مستعمل</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="refurbished" id="refurbished" />
                <Label htmlFor="refurbished" className="font-arabic">🔧 مُجدد</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="font-arabic">وصف المنتج</Label>
            <Textarea
              id="description"
              placeholder="اكتب وصفاً مفصلاً للمنتج..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="font-arabic text-right min-h-20"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image" className="font-arabic">صورة المنتج</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="font-arabic"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="font-arabic">رقم الواتساب *</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="+249123456789"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="font-arabic text-right"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="font-arabic text-right"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="font-arabic">الموقع/المدينة *</Label>
            <Input
              id="location"
              placeholder="أدخل موقعك أو مدينتك..."
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="font-arabic text-right"
              required
            />
          </div>

          {/* Coupon (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="coupon" className="font-arabic">كوبون خصم (اختياري)</Label>
            <Input
              id="coupon"
              placeholder="أدخل كود الخصم إن وجد..."
              value={formData.coupon}
              onChange={(e) => setFormData({ ...formData, coupon: e.target.value })}
              className="font-arabic text-right"
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm font-arabic">
              أوافق على <Button variant="link" className="p-0 h-auto text-primary">الشروط والأحكام</Button> 
              و <Button variant="link" className="p-0 h-auto text-primary">سياسة الخصوصية</Button>
            </Label>
          </div>
        </form>

        <DialogFooter className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="font-arabic"
          >
            ❌ إلغاء
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-gradient-primary hover:bg-gradient-accent font-arabic"
          >
            ✅ إضافة المنتج
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;