import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Engineers() {
  const engineers = [
    {
      id: 1,
      name: "حمزه مكي",
      nameEn: "Hamza Maki",
      specialties: ["برمجة سوفت وير", "هارد وير", "الهواتف", "الكمبيوترات", "شبكات الوافاي"],
      location: "مراية موندوا",
      locationLink: "https://maps.app.goo.gl/icMYmN1xCfxMKGGN9",
      whatsapp: "+23566687837",
      email: "walmacki235@gmail.com",
      nationality: "تشاد",
      currency: "XAF والجنيه السوداني",
      banks: [
        "MOOV MONEY: +23599987837",
        "AIRTEL MONEY: +23566687837", 
        "ECOBANK CHAD: 32500008740",
        "UBA CHAD: 70805503685",
        "بنك الخرطوم: 2782663 (محمد يعقوب حسن)"
      ],
      rating: 5,
      reviews: 127,
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png"
    },
    {
      id: 2,
      name: "ود تيرنة",
      nameEn: "Wad Terna", 
      specialties: ["سوفت وير", "هارد وير", "الهواتف", "الكمبيوترات"],
      location: "قور برنڨة",
      locationLink: "https://maps.app.goo.gl/Ld5EbL8VFQmgKu3B7",
      whatsapp: "+235642204661",
      email: "wadterna@gmail.com",
      nationality: "تشاد",
      currency: "XAF والجنيه السوداني",
      banks: [
        "MOOV MONEY: +235642204661",
        "بنك فيصل: 44778899 (محمد عبدالله)"
      ],
      rating: 4.8,
      reviews: 89,
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png"
    },
    {
      id: 3,
      name: "عبدالكريم بشارة", 
      nameEn: "Abdel-kerim Bichara",
      specialties: ["سوفت وير", "هارد وير", "الهواتف", "الكمبيوترات"],
      location: "أبشه",
      locationEn: "Abéché",
      locationLink: "https://maps.app.goo.gl/YLm9rFnL8oDW7LKGA",
      whatsapp: "+235661801336",
      email: "abdelkerimbichara@gmail.com",
      nationality: "تشاد",
      currency: "XAF",
      banks: [
        "AIRTEL MONEY: +235661801336",
        "ECOBANK CHAD: 56789012345"
      ],
      rating: 4.9,
      reviews: 156,
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png"
    },
    {
      id: 4,
      name: "محمد يوسف",
      nameEn: "Mohammed Youssef",
      specialties: ["هارد وير", "الهواتف", "الكمبيوترات", "الشاشات"],
      location: "انجمينا",
      locationEn: "N'Djamena",
      locationLink: "https://maps.app.goo.gl/qJZ2Z8V8V8Z8V8Z8V",
      whatsapp: "+23577889900",
      email: "mohammedyoussef@gmail.com",
      nationality: "تشاد",
      currency: "XAF",
      banks: [
        "MOOV MONEY: +23577889900",
        "UBA CHAD: 12345678901"
      ],
      rating: 4.7,
      reviews: 112,
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            أصحاب الصيانة المعتمدين
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تواصل مع أفضل مهندسي الصيانة المعتمدين لدينا للحصول على خدمات عالية الجودة
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engineers.map((engineer) => (
            <Card key={engineer.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={engineer.image} 
                      alt={engineer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary">{engineer.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {engineer.nameEn}
                    </CardDescription>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(engineer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground mr-1">
                        ({engineer.reviews} تقييم)
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">التخصصات:</h4>
                  <div className="flex flex-wrap gap-1">
                    {engineer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{engineer.location}</span>
                    {engineer.locationEn && (
                      <span className="text-muted-foreground">({engineer.locationEn})</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{engineer.whatsapp}</span>
                  </div>

                  {engineer.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs">{engineer.email}</span>
                    </div>
                  )}
                </div>

                {engineer.currency && (
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-primary">العملة:</h4>
                    <p className="text-xs text-muted-foreground">{engineer.currency}</p>
                  </div>
                )}

                {engineer.banks && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">حسابات البنوك:</h4>
                    <div className="space-y-1">
                      {engineer.banks.map((bank, index) => (
                        <p key={index} className="text-xs text-muted-foreground">{bank}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/${engineer.whatsapp}`, '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    واتساب
                  </Button>
                  
                  {engineer.locationLink && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(engineer.locationLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}