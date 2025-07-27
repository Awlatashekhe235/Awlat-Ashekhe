import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Truck, Star, Phone, Mail } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "جميع منتجاتنا مضمونة وتخضع لفحص دقيق قبل البيع"
    },
    {
      icon: Truck,
      title: "توصيل سريع",
      description: "خدمة توصيل لجميع أنحاء تشاد في أسرع وقت ممكن"
    },
    {
      icon: Star,
      title: "خدمة عملاء ممتازة",
      description: "فريق دعم متخصص لمساعدتك في أي وقت"
    },
    {
      icon: Heart,
      title: "أسعار منافسة",
      description: "أفضل الأسعار في السوق مع إمكانية التفاوض"
    }
  ];

  const team = [
    {
      name: "حمزه مكي",
      role: "المؤسس والمدير التنفيذي",
      description: "خبير تكنولوجيا ومعلم قرآن كريم",
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            من نحن
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            متجر أولاد الشيخ للإلكترونيات هو منصة رائدة في مجال بيع ومبادلة الأجهزة الإلكترونية في تشاد
          </p>
        </div>

        {/* قصة الشركة */}
        <Card className="mb-16 border-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">قصتنا</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed text-center">
              تأسس متجر أولاد الشيخ للإلكترونيات برؤية واضحة: جعل التكنولوجيا في متناول الجميع. 
              نحن نؤمن بأن التكنولوجيا يجب أن تكون قادرة على تحسين حياة الناس وتسهيل أعمالهم اليومية.
            </p>
            <p className="text-lg leading-relaxed text-center">
              من خلال منصتنا الإلكترونية، نوفر للعملاء فرصة شراء أو مبادلة الأجهزة الإلكترونية بأسعار مناسبة، 
              مع ضمان الجودة والأصالة لجميع المنتجات.
            </p>
          </CardContent>
        </Card>

        {/* رؤيتنا ورسالتنا */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl text-primary">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                أن نكون المنصة الأولى والأكثر ثقة في تشاد لبيع ومبادلة الأجهزة الإلكترونية، 
                ونساهم في نشر التكنولوجيا وتطوير المجتمع.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl text-primary">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                توفير أجهزة إلكترونية عالية الجودة بأسعار مناسبة، مع خدمة عملاء متميزة وضمان 
                رضا العملاء من خلال الشفافية والأمانة في التعامل.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* مميزاتنا */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            لماذا تختارنا؟
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-primary/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* فريق العمل */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            فريق العمل
          </h2>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <Card key={index} className="max-w-sm border-primary/10">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* تواصل معنا */}
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">تواصل معنا</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              نحن هنا لخدمتك ومساعدتك. لا تتردد في التواصل معنا لأي استفسار أو مساعدة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/+23599987837', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                واتساب: +23599987837
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:awladashikhe@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                awladashikhe@gmail.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}