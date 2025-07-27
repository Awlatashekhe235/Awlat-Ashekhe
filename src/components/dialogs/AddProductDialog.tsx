import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

export const AddProductDialog = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    currency: 'SDG',
    description: '',
    condition: 'new',
    type: 'sale',
    exchangeFor: '',
    location: '',
    whatsapp: '',
    email: '',
    coupon: '',
    warranty: '',
    brand: '',
    model: '',
    color: '',
    deliveryOptions: 'pickup',
    paymentMethods: [] as string[],
    images: [] as File[]
  });

  const categories = [
    'هواتف ذكية',
    'حواسيب محمولة',
    'ساعات ذكية',
    'سماعات',
    'كاميرات',
    'أجهزة لوحية',
    'إكسسوارات',
    'أخرى'
  ];

  const brands = [
    'سامسونج',
    'آبل',
    'هواوي',
    'شاومي',
    'أوبو',
    'فيفو',
    'تكنو',
    'إنفينكس',
    'نوكيا',
    'لينوفو',
    'ديل',
    'إتش بي',
    'أسوس',
    'أيسر',
    'أخرى'
  ];

  const colors = [
    'أسود',
    'أبيض',
    'أزرق',
    'أحمر',
    'أخضر',
    'ذهبي',
    'فضي',
    'رمادي',
    'بنفسجي',
    'أخرى'
  ];

  const paymentMethodOptions = [
    { id: 'cash', label: 'نقداً عند الاستلام' },
    { id: 'bank', label: 'تحويل بنكي' },
    { id: 'mobile', label: 'محفظة إلكترونية' },
    { id: 'exchange', label: 'تبادل مع منتج آخر' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // هنا سيتم إضافة منطق حفظ المنتج في قاعدة البيانات
      console.log('Product data:', formData);
      
      toast({
        title: "تم إضافة المنتج بنجاح",
        description: "سيتم مراجعة المنتج قبل النشر",
      });
      
      setOpen(false);
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        category: '',
        price: '',
        currency: 'SDG',
        description: '',
        condition: 'new',
        type: 'sale',
        exchangeFor: '',
        location: '',
        whatsapp: '',
        email: '',
        coupon: '',
        warranty: '',
        brand: '',
        model: '',
        color: '',
        deliveryOptions: 'pickup',
        paymentMethods: [],
        images: []
      });
    } catch (error) {
      toast({
        title: "خطأ في إضافة المنتج",
        description: "حدث خطأ أثناء إضافة المنتج، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-gradient-hero hover:bg-gradient-hero/90">
          <Plus className={`${isMobile ? "h-3 w-3" : "h-4 w-4"}`} />
          {isMobile ? "إضافة" : "إضافة منتج"}
        </Button>
      </DialogTrigger>
      <DialogContent className={`${isMobile ? "w-[95vw] p-4" : "max-w-2xl p-6"} max-h-[90vh] overflow-y-auto rounded-lg`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">إضافة منتج جديد</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* اسم المنتج والفئة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="name" className="text-sm md:text-base">اسم المنتج *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="mt-1 text-sm md:text-base"
              />
            </div>
            
            <div>
              <Label htmlFor="category" className="text-sm md:text-base">الفئة *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="mt-1 text-sm md:text-base">
                  <SelectValue placeholder="اختر الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* السعر والعملة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="price" className="text-sm md:text-base">السعر *</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                required
                className="mt-1 text-sm md:text-base"
              />
            </div>
            
            <div>
              <Label htmlFor="currency" className="text-sm md:text-base">العملة</Label>
              <Select value={formData.currency} onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}>
                <SelectTrigger className="mt-1 text-sm md:text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SDG">جنيه سوداني</SelectItem>
                  <SelectItem value="XAF">فرنك أفريقي</SelectItem>
                  <SelectItem value="USD">دولار أمريكي</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* وصف المنتج */}
          <div>
            <Label htmlFor="description" className="text-sm md:text-base">وصف المنتج</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={isMobile ? 2 : 3}
              className="mt-1 text-sm md:text-base"
            />
          </div>

          {/* حالة المنتج */}
          <div>
            <Label className="text-sm md:text-base">حالة المنتج</Label>
            <RadioGroup
              value={formData.condition}
              onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}
              className="flex flex-wrap gap-4 md:gap-6 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="text-sm md:text-base">جديد</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="used" id="used" />
                <Label htmlFor="used" className="text-sm md:text-base">مستعمل</Label>
              </div>
            </RadioGroup>
          </div>

          {/* نوع العرض */}
          <div>
            <Label className="text-sm md:text-base">نوع العرض</Label>
            <RadioGroup
              value={formData.type}
              onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
              className="flex flex-wrap gap-4 md:gap-6 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sale" id="sale" />
                <Label htmlFor="sale" className="text-sm md:text-base">للبيع</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="exchange" id="exchange" />
                <Label htmlFor="exchange" className="text-sm md:text-base">للتبادل</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="text-sm md:text-base">أخرى</Label>
              </div>
            </RadioGroup>
          </div>

          {/* مقابل تبادل بـ (شرطي) */}
          {formData.type === 'exchange' && (
            <div>
              <Label htmlFor="exchangeFor" className="text-sm md:text-base">مقابل تبادل بـ</Label>
              <Input
                id="exchangeFor"
                value={formData.exchangeFor}
                onChange={(e) => setFormData(prev => ({ ...prev, exchangeFor: e.target.value }))}
                placeholder="ما الذي تريد مبادلته بمنتجك؟"
                className="mt-1 text-sm md:text-base"
              />
            </div>
          )}

          {/* الموقع ورقم الواتساب */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="location" className="text-sm md:text-base">الموقع</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="مدينة، محافظة"
                className="mt-1 text-sm md:text-base"
              />
            </div>
            
            <div>
              <Label htmlFor="whatsapp" className="text-sm md:text-base">رقم الواتساب</Label>
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                placeholder="+235XXXXXXXX"
                className="mt-1 text-sm md:text-base"
              />
            </div>
          </div>

          {/* البريد الإلكتروني ورمز القسيمة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="email" className="text-sm md:text-base">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 text-sm md:text-base"
              />
            </div>
            
            <div>
              <Label htmlFor="coupon" className="text-sm md:text-base">رمز القسيمة (اختياري)</Label>
              <Input
                id="coupon"
                value={formData.coupon}
                onChange={(e) => setFormData(prev => ({ ...prev, coupon: e.target.value }))}
                className="mt-1 text-sm md:text-base"
              />
            </div>
          </div>

          {/* الماركة والموديل */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="brand" className="text-sm md:text-base">الماركة</Label>
              <Select value={formData.brand} onValueChange={(value) => setFormData(prev => ({ ...prev, brand: value }))}>
                <SelectTrigger className="mt-1 text-sm md:text-base">
                  <SelectValue placeholder="اختر الماركة" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="model" className="text-sm md:text-base">الموديل</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                placeholder="مثال: iPhone 13 Pro"
                className="mt-1 text-sm md:text-base"
              />
            </div>
          </div>

          {/* اللون والضمان */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="color" className="text-sm md:text-base">اللون</Label>
              <Select value={formData.color} onValueChange={(value) => setFormData(prev => ({ ...prev, color: value }))}>
                <SelectTrigger className="mt-1 text-sm md:text-base">
                  <SelectValue placeholder="اختر اللون" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="warranty" className="text-sm md:text-base">الضمان</Label>
              <Input
                id="warranty"
                value={formData.warranty}
                onChange={(e) => setFormData(prev => ({ ...prev, warranty: e.target.value }))}
                placeholder="مثال: 6 أشهر"
                className="mt-1 text-sm md:text-base"
              />
            </div>
          </div>

          {/* خيارات التوصيل */}
          <div>
            <Label className="text-sm md:text-base">خيارات التوصيل</Label>
            <RadioGroup
              value={formData.deliveryOptions}
              onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryOptions: value }))}
              className="flex flex-wrap gap-4 md:gap-6 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="text-sm md:text-base">استلام من المتجر</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="text-sm md:text-base">توصيل</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both" className="text-sm md:text-base">كلاهما</Label>
              </div>
            </RadioGroup>
          </div>

          {/* طرق الدفع المقبولة */}
          <div>
            <Label className="text-sm md:text-base">طرق الدفع المقبولة</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {paymentMethodOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={formData.paymentMethods.includes(option.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({
                          ...prev,
                          paymentMethods: [...prev.paymentMethods, option.id]
                        }));
                      } else {
                        setFormData(prev => ({
                          ...prev,
                          paymentMethods: prev.paymentMethods.filter(method => method !== option.id)
                        }));
                      }
                    }}
                    className="h-4 w-4"
                  />
                  <Label htmlFor={option.id} className="text-xs sm:text-sm md:text-base">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* صور المنتج */}
          <div>
            <Label htmlFor="images" className="text-sm md:text-base">صور المنتج</Label>
            <div className="mt-1">
              <label htmlFor="images" className="cursor-pointer">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 md:p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs md:text-sm text-muted-foreground">اضغط لرفع الصور</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG حتى 10MB</p>
                </div>
                <input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {formData.images.length > 0 && (
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  تم اختيار {formData.images.length} صورة
                </p>
              )}
            </div>
          </div>

          {/* أزرار الإرسال والإلغاء */}
          <div className="flex gap-2 pt-2 md:pt-4">
            <Button type="submit" disabled={isLoading} className="flex-1 text-sm md:text-base py-2 md:py-4">
              {isLoading ? 'جاري الإضافة...' : 'إضافة المنتج'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="text-sm md:text-base">
              إلغاء
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};