import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Star, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Maintenance = () => {
  const engineers = [
    {
      id: 1,
      name: "حمزة مكي",
      nameEn: "Hamza Maki", 
      location: "مراية",
      whatsapp: "+23566687837",
      email: "walmacki235@gmail.com",
      nationality: "تشاد",
      currency: "الجنيه السوداني",
      banks: {
        ecobank: "32500008740",
        uba: "70805503685",
        bankak: "2782663 (باسم محمد يعقوب حسن)"
      },
      social: {
        linkedin: "www.linkedin.com/in/",
        messenger: "https://m.me/hamzamacki235"
      },
      specialties: ["💻 صيانة الكمبيوتر", "📱 صيانة الهواتف", "🌐 شبكات الواي فاي", "💽 سوفت وير", "⚙️ هارد وير"],
      rating: 4.9,
      completedProjects: 150
    },
    {
      id: 2,
      name: "ود تيرنة",
      nameEn: "Wad Tirna",
      location: "قور برنقة",
      whatsapp: "+235 64 22 04 61",
      email: "contact@wtirna.tech",
      nationality: "تشاد",
      currency: "الجنيه السوداني",
      banks: {
        bankak: "يتم التواصل لاحقاً"
      },
      social: {},
      specialties: ["💻 إصلاح اللابتوب", "🔧 صيانة الأجهزة", "💾 استعادة البيانات", "🖥️ تجميع أجهزة"],
      rating: 4.7,
      completedProjects: 89
    },
    {
      id: 3,
      name: "عبدالكريم بشارة",
      nameEn: "Abdulkarim Bishara",
      location: "أبشه",
      whatsapp: "+235 66 18 01 36",
      email: "bishara.tech@gmail.com",
      nationality: "تشاد",
      currency: "الجنيه السوداني",
      banks: {},
      social: {},
      specialties: ["📱 إصلاح الهواتف", "🔋 تغيير البطاريات", "📺 صيانة الشاشات", "🔊 إصلاح السماعات"],
      rating: 4.8,
      completedProjects: 120
    }
  ];

  const handleContact = (engineer: any, method: string) => {
    if (method === 'whatsapp') {
      window.open(`https://wa.me/${engineer.whatsapp.replace(/\D/g, '')}`, '_blank');
    } else if (method === 'email') {
      window.location.href = `mailto:${engineer.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-pattern font-arabic" style={{ direction: 'rtl' }}>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            🔧 مراكز الصيانة المعتمدة
          </h1>
          <p className="text-lg text-muted-foreground">
            أفضل خبراء الصيانة في المنطقة لجميع احتياجاتك التقنية
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: "💻", name: "صيانة الكمبيوتر", count: "50+" },
            { icon: "📱", name: "إصلاح الهواتف", count: "100+" },
            { icon: "🌐", name: "شبكات الواي فاي", count: "30+" },
            { icon: "⚙️", name: "هارد وير", count: "80+" }
          ].map((service, index) => (
            <Card key={index} className="text-center bg-card-glass backdrop-blur-md border-card-border hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-semibold mb-1">{service.name}</h3>
                <Badge variant="secondary">{service.count} خدمة</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Engineers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineers.map((engineer) => (
            <Card key={engineer.id} className="bg-card-glass backdrop-blur-md border-card-border hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-4">
                  {engineer.name.charAt(0)}
                </div>
                <CardTitle className="text-xl">{engineer.name}</CardTitle>
                <CardDescription className="text-sm opacity-70">{engineer.nameEn}</CardDescription>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(engineer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{engineer.rating}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{engineer.location}</span>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold mb-2">التخصصات:</h4>
                  <div className="flex flex-wrap gap-1">
                    {engineer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{engineer.completedProjects}</div>
                    <div className="text-xs text-muted-foreground">مشروع مكتمل</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">{engineer.rating}</div>
                    <div className="text-xs text-muted-foreground">تقييم العملاء</div>
                  </div>
                </div>

                {/* Banking Info */}
                {Object.keys(engineer.banks).length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">معلومات البنوك:</h4>
                    <div className="space-y-1 text-xs">
                      {engineer.banks.ecobank && (
                        <div>🏦 ECOBANK: {engineer.banks.ecobank}</div>
                      )}
                      {engineer.banks.uba && (
                        <div>🏛️ UBA: {engineer.banks.uba}</div>
                      )}
                      {engineer.banks.bankak && (
                        <div>💳 بنكك: {engineer.banks.bankak}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <Button
                    onClick={() => handleContact(engineer, 'whatsapp')}
                    className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    واتساب
                  </Button>
                  <Button
                    onClick={() => handleContact(engineer, 'email')}
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <Mail className="h-4 w-4 ml-2" />
                    إيميل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Engineer Notice */}
        <Card className="mt-12 bg-gradient-accent text-white border-0">
          <CardContent className="text-center py-8">
            <Wrench className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">هل أنت مهندس صيانة محترف؟</h3>
            <p className="mb-4">انضم إلى فريقنا المميز من خبراء الصيانة</p>
            <p className="text-sm opacity-90">
              للانضمام، تواصل مع الإدارة عبر: 
              <br />
              hamzamacki235@gmail.com | walmacki235@gmail.com
              <br />
              bakhitmacki235@gmail.com | awlatashekhe@gmail.com | beshirmacki235@gmail.com
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Maintenance;