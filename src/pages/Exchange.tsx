import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeftRight, Upload, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Exchange = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleSubmitExchange = () => {
    toast({
      title: "✅ تم إرسال طلب المبادلة",
      description: "سيتم مراجعة طلبك والرد عليك قريباً",
    });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-pattern font-arabic" style={{ direction: 'rtl' }}>
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-arabic mb-4 text-transparent bg-clip-text bg-gradient-primary">
            🔄 نظام المبادلة الذكي
          </h1>
          <p className="text-lg text-muted-foreground font-arabic max-w-2xl mx-auto">
            بادل منتجاتك القديمة بأخرى جديدة ومفيدة بطريقة آمنة ومضمونة
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 space-x-reverse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > i ? <CheckCircle className="h-5 w-5" /> : i}
                </div>
                {i < 3 && (
                  <ArrowLeftRight className={`h-5 w-5 mx-4 ${
                    step > i ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <Card className="bg-card-glass backdrop-blur-md border-card-border">
              <CardHeader>
                <CardTitle className="font-arabic text-center">📱 أضف منتجك للمبادلة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 font-arabic">اسم المنتج</label>
                  <Input placeholder="مثال: آيفون 13 برو" className="font-arabic" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-arabic">وصف المنتج</label>
                  <Textarea placeholder="اكتب وصفاً مفصلاً عن المنتج وحالته..." className="font-arabic" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 font-arabic">صور المنتج</label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="font-arabic text-muted-foreground">اسحب الصور هنا أو انقر للاختيار</p>
                  </div>
                </div>

                <Button 
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-primary hover:bg-gradient-accent font-arabic"
                >
                  التالي: اختيار منتج للمبادلة 🔄
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="bg-card-glass backdrop-blur-md border-card-border">
              <CardHeader>
                <CardTitle className="font-arabic text-center">🎯 اختر المنتج الذي تريده</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "💻 لابتوب ديل", owner: "أحمد محمد" },
                    { name: "📱 آيفون 14", owner: "فاطمة علي" },
                    { name: "⌚ ساعة ذكية", owner: "محمد حسن" },
                    { name: "🎮 بلايستيشن 5", owner: "سارة أحمد" }
                  ].map((product, index) => (
                    <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4">
                        <h3 className="font-bold font-arabic">{product.name}</h3>
                        <p className="text-sm text-muted-foreground font-arabic">المالك: {product.owner}</p>
                        <Badge className="mt-2">متاح للمبادلة</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1 font-arabic"
                  >
                    السابق
                  </Button>
                  <Button 
                    onClick={handleSubmitExchange}
                    className="flex-1 bg-gradient-primary hover:bg-gradient-accent font-arabic"
                  >
                    إرسال طلب المبادلة 📤
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
              <CardContent className="p-12">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-2xl font-bold font-arabic mb-4">تم إرسال طلب المبادلة بنجاح!</h2>
                <p className="text-muted-foreground font-arabic mb-6">
                  سيتم مراجعة طلبك من قبل فريقنا والتواصل معك خلال 24 ساعة
                </p>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-primary hover:bg-gradient-accent font-arabic"
                >
                  العودة للصفحة الرئيسية 🏠
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Exchange Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold font-arabic mb-2">مبادلة آمنة</h3>
              <p className="text-muted-foreground font-arabic">نضمن سلامة عملية المبادلة</p>
            </CardContent>
          </Card>

          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold font-arabic mb-2">سرعة في التنفيذ</h3>
              <p className="text-muted-foreground font-arabic">مبادلة سريعة خلال يوم واحد</p>
            </CardContent>
          </Card>

          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold font-arabic mb-2">توفير في التكلفة</h3>
              <p className="text-muted-foreground font-arabic">وفر المال واحصل على ما تريد</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Exchange;