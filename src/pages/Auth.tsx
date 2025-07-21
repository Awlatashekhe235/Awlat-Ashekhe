import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    address: '',
    nationality: 'Sudan',
    avatar: null as File | null
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const countries = [
    "🇸🇩 السودان", "🇹🇩 تشاد", "🇪🇬 مصر", "🇸🇦 السعودية", "🇦🇪 الإمارات",
    "🇰🇼 الكويت", "🇶🇦 قطر", "🇧🇭 البحرين", "🇴🇲 عمان", "🇯🇴 الأردن",
    "🇱🇧 لبنان", "🇸🇾 سوريا", "🇮🇶 العراق", "🇾🇪 اليمن", "🇱🇾 ليبيا",
    "🇹🇳 تونس", "🇩🇿 الجزائر", "🇲🇦 المغرب", "🇲🇷 موريتانيا", "🇸🇴 الصومال",
    "🇩🇯 جيبوتي", "🇰🇲 جزر القمر", "🇪🇹 إثيوبيا", "🇪🇷 إريتريا", "🇳🇪 النيجر",
    "🇲🇱 مالي", "🇧🇫 بوركينا فاسو", "🇸🇳 السنغال", "🇬🇲 غامبيا", "🇬🇼 غينيا بيساو",
    "🇬🇳 غينيا", "🇸🇱 سيراليون", "🇱🇷 ليبيريا", "🇨🇮 ساحل العاج", "🇬🇭 غانا",
    "🇹🇬 توغو", "🇧🇯 بنين", "🇳🇬 نيجيريا", "🇨🇲 الكاميرون", "🇨🇫 جمهورية أفريقيا الوسطى",
    "🇬🇦 الغابون", "🇨🇬 الكونغو", "🇨🇩 جمهورية الكونغو الديمقراطية", "🇦🇴 أنغولا",
    "🇿🇲 زامبيا", "🇿🇼 زيمبابوي", "🇧🇼 بوتسوانا", "🇳🇦 ناميبيا", "🇿🇦 جنوب أفريقيا",
    "🇱🇸 ليسوتو", "🇸🇿 إسواتيني", "🇲🇿 موزمبيق", "🇲🇼 مالاوي", "🇹🇿 تنزانيا",
    "🇰🇪 كينيا", "🇺🇬 أوغندا", "🇷🇼 رواندا", "🇧🇮 بوروندي", "🇲🇬 مدغشقر"
  ];

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          toast({
            title: "🎉 مرحباً بك!",
            description: "تم تسجيل الدخول بنجاح",
          });
          navigate('/');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birth_date: formData.birthDate,
            address: formData.address,
            nationality: formData.nationality,
          }
        }
      });

      if (error) {
        toast({
          title: "❌ خطأ في التسجيل",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "✅ تم إنشاء الحساب بنجاح!",
          description: "يرجى تفقد بريدك الإلكتروني لتأكيد الحساب",
        });
      }
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast({
          title: "❌ خطأ في تسجيل الدخول",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "✅ تم تسجيل الدخول بنجاح!",
          description: "مرحباً بك في سوق التجارة",
        });
        navigate('/');
      }
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl
        }
      });

      if (error) {
        toast({
          title: "❌ خطأ في تسجيل الدخول",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: redirectUrl
        }
      });

      if (error) {
        toast({
          title: "❌ خطأ في تسجيل الدخول",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGuestMode = () => {
    toast({
      title: "👤 دخول كضيف",
      description: "يمكنك تصفح المنتجات لكن لا يمكنك إضافة منتجات أو الشراء",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-pattern flex items-center justify-center p-4" style={{ direction: 'rtl' }}>
      <Card className="w-full max-w-md bg-card-glass backdrop-blur-md border-card-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-arabic">
            🛒 سوق التجارة
          </CardTitle>
          <CardDescription className="font-arabic">
            انضم إلى أكبر سوق إلكتروني في المنطقة
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={isSignUp ? "signup" : "signin"} onValueChange={(value) => setIsSignUp(value === "signup")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin" className="font-arabic">تسجيل الدخول</TabsTrigger>
              <TabsTrigger value="signup" className="font-arabic">إنشاء حساب</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="font-arabic text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="font-arabic">كلمة المرور</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="font-arabic text-right pl-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute left-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-accent font-arabic"
                  disabled={loading}
                >
                  {loading ? "🔄 جارٍ التحميل..." : "🚪 تسجيل الدخول"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-arabic">الاسم الأول</Label>
                    <Input
                      id="firstName"
                      placeholder="الاسم الأول"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="font-arabic text-right"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-arabic">اسم العائلة</Label>
                    <Input
                      id="lastName"
                      placeholder="اسم العائلة"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="font-arabic text-right"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="font-arabic">تاريخ الميلاد</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="font-arabic text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationality" className="font-arabic">الجنسية</Label>
                  <Select value={formData.nationality} onValueChange={(value) => setFormData({ ...formData, nationality: value })}>
                    <SelectTrigger className="font-arabic text-right">
                      <SelectValue placeholder="اختر الجنسية..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card-glass backdrop-blur-md max-h-60">
                      {countries.map((country, index) => (
                        <SelectItem key={index} value={country} className="font-arabic text-right">
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="font-arabic">العنوان</Label>
                  <Input
                    id="address"
                    placeholder="أدخل عنوانك..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="font-arabic text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="font-arabic">البريد الإلكتروني</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="font-arabic text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="font-arabic">كلمة المرور</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="font-arabic text-right pl-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute left-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar" className="font-arabic">الصورة الشخصية</Label>
                  <Input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.files?.[0] || null })}
                    className="font-arabic"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-accent font-arabic"
                  disabled={loading}
                >
                  {loading ? "🔄 جارٍ التحميل..." : "✅ إنشاء حساب جديد"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-3">
            <div className="text-center font-arabic text-sm text-muted-foreground">
              أو تسجيل الدخول عبر
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="font-arabic bg-card-glass hover:bg-primary-glass"
              >
                🏮 Google
              </Button>
              <Button
                variant="outline"
                onClick={handleFacebookSignIn}
                disabled={loading}
                className="font-arabic bg-card-glass hover:bg-primary-glass"
              >
                📘 Facebook
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={handleGuestMode}
              className="w-full font-arabic bg-muted-glass hover:bg-card-glass"
            >
              👤 الدخول كضيف
            </Button>
          </div>

          <div className="mt-6 text-center text-sm font-arabic">
            <Button variant="link" className="p-0 text-primary">
              سياسة الخصوصية
            </Button>
            {" • "}
            <Button variant="link" className="p-0 text-primary">
              اتفاقية المستخدم
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;