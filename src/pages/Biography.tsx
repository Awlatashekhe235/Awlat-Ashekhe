import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap, Book } from "lucide-react";

export default function Biography() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png" 
                alt="حمزه مكي"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              حمزه مكي
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-4">Hamza Maki</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مؤسس متجر أولاد الشيخ للإلكترونيات، خبير تكنولوجيا ومعلم قرآن كريم
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* المعلومات الشخصية */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  المعلومات الشخصية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-semibold">تاريخ الميلاد:</span>
                    <span>01/01/1999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">مكان الولادة:</span>
                    <span>تشاد - ولاية سيلا - كواكوا انقرانة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">الجنسية:</span>
                    <Badge variant="secondary">🇹🇩 تشادي</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* التعليم */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  التعليم والخلفية الأكاديمية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">اللغة الفرنسية</h4>
                    <p className="text-sm text-muted-foreground">كواكوا انقرانة - ولاية سيلا</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">العلوم الشرعية</h4>
                    <p className="text-sm text-muted-foreground">خلوة ام قشيراي</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">تحفيظ القرآن الكريم</h4>
                    <p className="text-sm text-muted-foreground">خلوة دار الهدي والرشاد - ولاية سيلا</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* العمل الحالي */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Book className="h-5 w-5" />
                  العمل والمسؤوليات الحالية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">صاحب خلوة مدينة النور</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      لتحفيظ القرآن الكريم والعلوم الشرعية
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>بجوار مراية مندوا - محافظة ادي - ولاية سيلا</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">مؤسس متجر أولاد الشيخ للإلكترونيات</h4>
                    <p className="text-sm text-muted-foreground">
                      منصة إلكترونية متخصصة في بيع ومبادلة الأجهزة الإلكترونية
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* المهارات والخبرات */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  المهارات والخبرات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">التكنولوجيا والبرمجة</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">برمجة سوفت وير</Badge>
                      <Badge variant="secondary">هارد وير</Badge>
                      <Badge variant="secondary">صيانة الهواتف</Badge>
                      <Badge variant="secondary">صيانة الكمبيوتر</Badge>
                      <Badge variant="secondary">شبكات الوافاي</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">العلوم الشرعية</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">تحفيظ القرآن</Badge>
                      <Badge variant="outline">تفسير القرآن</Badge>
                      <Badge variant="outline">الفقه الإسلامي</Badge>
                      <Badge variant="outline">الحديث الشريف</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">اللغات</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>العربية</Badge>
                      <Badge>الفرنسية</Badge>
                      <Badge>السارة</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* رسالة شخصية */}
          <Card className="mt-8 border-primary/10">
            <CardHeader>
              <CardTitle className="text-center text-primary">رسالة شخصية</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-center text-lg italic text-muted-foreground leading-relaxed">
                "أسعى لخدمة المجتمع من خلال التعليم والتكنولوجيا، والجمع بين العلم الشرعي والعلم الحديث 
                لبناء جيل واع ومتعلم. هدفي هو تسهيل الحصول على التكنولوجيا للجميع وتعليم كتاب الله الكريم."
              </blockquote>
              <div className="text-center mt-6">
                <p className="font-semibold text-primary">حمزه مكي</p>
                <p className="text-sm text-muted-foreground">مؤسس متجر أولاد الشيخ للإلكترونيات</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}