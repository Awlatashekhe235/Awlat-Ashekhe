import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const About = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const teamMembers = [
    {
      name: "حمزة مكي",
      nameEn: "Hamza Maki",
      role: "المؤسس والمطور الرئيسي",
      location: "مراية، تشاد",
      whatsapp: "+235 66 68 78 37",
      email: "walmacki235@gmail.com",
      nationality: "تشادي",
      banks: {
        ecobank: "32500008740",
        uba: "70805503685",
        bankk: "2782663 (باسم محمد يعقوب حسن)"
      },
      avatar: "👨‍💻",
      specialties: ["تطوير المواقع", "التجارة الإلكترونية", "الذكاء الاصطناعي"]
    },
    {
      name: "ود تيرنة",
      role: "مهندس الصيانة",
      location: "قور برنڨة، السودان",
      whatsapp: "+235 64 22 04 61",
      nationality: "تشادي",
      avatar: "🔧",
      specialties: ["صيانة الكمبيوتر", "صيانة الهواتف", "الشبكات"]
    },
    {
      name: "عبدالكريم بشارة",
      role: "مهندس الصيانة",
      location: "أبشه، تشاد",
      whatsapp: "+235 66 18 01 36",
      nationality: "تشادي",
      avatar: "⚡",
      specialties: ["الهارد وير", "السوفت وير", "الشبكات اللاسلكية"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/hamza-macki-", color: "text-blue-600" },
    { name: "Messenger", icon: "💬", url: "https://m.me/hamzamacki235", color: "text-blue-500" },
    { name: "YouTube", icon: "📺", url: "https://www.youtube.com/@Awladashekhe", color: "text-red-600" },
    { name: "TikTok", icon: "🎵", url: "https://www.tiktok.com/@hamzamacki235", color: "text-black" },
    { name: "X (Twitter)", icon: "🐦", url: "https://x.com/Hamzamacki1", color: "text-gray-800" },
    { name: "Facebook", icon: "📘", url: "https://www.facebook.com/share/1M5Pjmq9Tb/", color: "text-blue-700" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/hamzamacki235t", color: "text-pink-600" }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "⚠️ بيانات ناقصة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "📧 تم إرسال الرسالة بنجاح!",
      description: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت",
    });

    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-arabic text-transparent bg-clip-text bg-gradient-primary mb-6">
              🌟 من نحن
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-arabic max-w-4xl mx-auto">
              نحن فريق من المبدعين والمطورين المتخصصين في التجارة الإلكترونية وخدمات الصيانة، 
              نسعى لتوفير أفضل الخدمات للعملاء في تشاد والسودان
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-card-glass backdrop-blur-md border-card-border mb-16 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-arabic text-primary mb-4">📖 قصتنا</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg font-arabic leading-relaxed">
                    بدأت رحلتنا من حلم بسيط: إنشاء منصة تجارة إلكترونية تخدم المجتمعات العربية والأفريقية 
                    بطريقة مبتكرة وسهلة الاستخدام.
                  </p>
                  <p className="text-lg font-arabic leading-relaxed">
                    اليوم، نحن فخورون بأن نكون جسراً يربط بين البائعين والمشترين، 
                    ونوفر خدمات صيانة عالية الجودة لجميع الأجهزة الإلكترونية.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-gradient-primary text-primary-foreground">🚀 الابتكار</Badge>
                    <Badge className="bg-gradient-secondary text-secondary-foreground">🤝 الثقة</Badge>
                    <Badge className="bg-gradient-accent text-accent-foreground">⭐ الجودة</Badge>
                    <Badge className="bg-success text-success-foreground">🔧 الخبرة</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl animate-float mb-4">🎯</div>
                  <h3 className="text-2xl font-bold font-arabic text-primary">رؤيتنا</h3>
                  <p className="font-arabic text-muted-foreground mt-2">
                    أن نكون المنصة الرائدة للتجارة الإلكترونية في أفريقيا
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-arabic text-primary mb-4">👥 فريق العمل</h2>
            <p className="text-lg text-muted-foreground font-arabic">
              تعرف على الأشخاص الذين يقفون وراء نجاح منصتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group bg-card-glass backdrop-blur-md border-card-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-slide-in-left">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce-gentle">
                    {member.avatar}
                  </div>
                  <CardTitle className="font-arabic text-xl">
                    {member.name}
                    {member.nameEn && (
                      <div className="text-sm text-muted-foreground font-sans mt-1">
                        {member.nameEn}
                      </div>
                    )}
                  </CardTitle>
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {member.role}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 font-arabic">
                      <span>🌍</span>
                      <span>{member.nationality}</span>
                    </div>
                    <div className="flex items-center gap-2 font-arabic">
                      <span>📍</span>
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 font-arabic">
                      <span>📱</span>
                      <span className="text-primary">{member.whatsapp}</span>
                    </div>
                    {member.email && (
                      <div className="flex items-center gap-2 font-arabic">
                        <span>📧</span>
                        <span className="text-primary text-xs">{member.email}</span>
                      </div>
                    )}
                  </div>

                  {member.specialties && (
                    <div>
                      <p className="font-arabic font-semibold mb-2">التخصصات:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-arabic">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {member.banks && (
                    <div className="space-y-2 text-xs">
                      <p className="font-arabic font-semibold">الحسابات البنكية:</p>
                      <div className="space-y-1 text-muted-foreground">
                        <p>🏦 ECOBANK: {member.banks.ecobank}</p>
                        <p>🏧 UBA: {member.banks.uba}</p>
                        <p>🏛️ بنك الخرطوم: {member.banks.bankk}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-success hover:bg-success/90 text-success-foreground font-arabic"
                    onClick={() => window.open(`https://wa.me/${member.whatsapp.replace(/\s/g, '')}`, '_blank')}
                  >
                    📞 تواصل معي
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-card-glass backdrop-blur-md border-card-border animate-fade-in">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold font-arabic text-primary mb-6">🌐 تابعنا على وسائل التواصل</h2>
              <p className="text-lg font-arabic text-muted-foreground mb-8">
                ابق على اطلاع بآخر الأخبار والعروض الخاصة
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant="outline"
                    className={`group border-card-border hover:scale-110 transition-all duration-300 ${social.color} hover:bg-current hover:text-white font-arabic`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <span className="text-2xl ml-2 group-hover:animate-bounce">{social.icon}</span>
                    {social.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card-glass backdrop-blur-md border-card-border animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-arabic text-primary">
                  📨 نموذج التواصل السريع
                </CardTitle>
                <p className="text-muted-foreground font-arabic">
                  لديك سؤال أو اقتراح؟ لا تتردد في التواصل معنا
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-arabic text-sm font-medium">الاسم الكامل *</label>
                      <Input
                        placeholder="أدخل اسمك الكامل"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="font-arabic text-right"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-arabic text-sm font-medium">البريد الإلكتروني *</label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="font-arabic text-right"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-arabic text-sm font-medium">الموضوع</label>
                    <Input
                      placeholder="موضوع الرسالة"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      className="font-arabic text-right"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-arabic text-sm font-medium">الرسالة *</label>
                    <Textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="font-arabic text-right min-h-32"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:bg-gradient-accent text-lg py-6 font-arabic"
                  >
                    📤 إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-arabic text-primary mb-4">💎 قيمنا ومبادئنا</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🏆", title: "التميز", desc: "نسعى دائماً لتقديم أفضل الخدمات" },
              { icon: "🤝", title: "الثقة", desc: "نبني علاقات طويلة المدى مع عملائنا" },
              { icon: "⚡", title: "السرعة", desc: "نوفر خدمات سريعة وفعالة" },
              { icon: "🔒", title: "الأمان", desc: "نضمن حماية بياناتك وخصوصيتك" }
            ].map((value, index) => (
              <Card key={index} className="text-center bg-card-glass backdrop-blur-md border-card-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 animate-pulse">{value.icon}</div>
                  <h3 className="text-xl font-bold font-arabic text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-arabic">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;