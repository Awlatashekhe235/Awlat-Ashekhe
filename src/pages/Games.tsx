import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Gamepad, Trophy, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Games = () => {
  const { toast } = useToast();

  const games = [
    {
      id: 1,
      name: "🎮 FIFA 24",
      category: "رياضة",
      players: "1-4 لاعبين",
      time: "90 دقيقة",
      difficulty: "متوسط",
      price: "15000 جنيه",
      image: "⚽",
      rating: 4.9,
      description: "أحدث إصدار من لعبة FIFA مع مميزات جديدة"
    },
    {
      id: 2,
      name: "🏎️ Gran Turismo",
      category: "سباق",
      players: "1-8 لاعبين",
      time: "60 دقيقة",
      difficulty: "صعب",
      price: "18000 جنيه",
      image: "🏁",
      rating: 4.8,
      description: "تجربة سباق حقيقية مع أروع السيارات"
    },
    {
      id: 3,
      name: "🎯 Call of Duty",
      category: "أكشن",
      players: "1-16 لاعب",
      time: "45 دقيقة",
      difficulty: "صعب",
      price: "20000 جنيه",
      image: "💥",
      rating: 4.7,
      description: "معارك ملحمية ومغامرات مثيرة"
    },
    {
      id: 4,
      name: "🌟 Minecraft",
      category: "إبداع",
      players: "1-10 لاعبين",
      time: "∞ لا محدود",
      difficulty: "سهل",
      price: "8000 جنيه",
      image: "🧱",
      rating: 4.9,
      description: "ابني عالمك الخاص بلا حدود"
    },
    {
      id: 5,
      name: "🗡️ Assassin's Creed",
      category: "مغامرات",
      players: "1 لاعب",
      time: "120 دقيقة",
      difficulty: "متوسط",
      price: "16000 جنيه",
      image: "⚔️",
      rating: 4.6,
      description: "رحلة تاريخية مليئة بالإثارة والتشويق"
    },
    {
      id: 6,
      name: "🏀 NBA 2K24",
      category: "رياضة",
      players: "1-4 لاعبين",
      time: "48 دقيقة",
      difficulty: "متوسط",
      price: "14000 جنيه",
      image: "🏀",
      rating: 4.5,
      description: "أفضل لعبة كرة سلة على الإطلاق"
    }
  ];

  const handleBuyGame = (game: any) => {
    toast({
      title: `🎮 شراء ${game.name}`,
      description: `تم إضافة ${game.name} إلى السلة بسعر ${game.price}`,
    });
  };

  const handleDownloadDemo = (game: any) => {
    toast({
      title: `📥 تحميل نسخة تجريبية`,
      description: `جارٍ تحميل النسخة التجريبية من ${game.name}...`,
    });
  };

  return (
    <div className="min-h-screen bg-pattern font-arabic" style={{ direction: 'rtl' }}>
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-arabic mb-4 text-transparent bg-clip-text bg-gradient-primary">
            🎮 متجر الألعاب الرقمية
          </h1>
          <p className="text-lg text-muted-foreground font-arabic max-w-2xl mx-auto">
            اكتشف أحدث وأفضل الألعاب بأفضل الأسعار مع ضمان الجودة
          </p>
        </div>

        {/* Game Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['🔥 الأكثر مبيعاً', '⚽ رياضة', '🏎️ سباق', '💥 أكشن', '🌟 إبداع', '🗡️ مغامرات'].map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="font-arabic bg-card-glass border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className="group bg-card-glass backdrop-blur-md border-card-border hover:shadow-hover transition-all duration-500 hover:scale-105 animate-fade-in relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  {game.category}
                </Badge>
              </div>

              <CardContent className="p-0">
                {/* Game Image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl cursor-pointer group-hover:scale-110 transition-transform duration-300">
                  {game.image}
                </div>

                <div className="p-6">
                  {/* Game Info */}
                  <h3 className="font-bold text-lg font-arabic mb-2 group-hover:text-primary transition-colors duration-300">
                    {game.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-arabic mb-3">
                    {game.description}
                  </p>

                  {/* Game Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-arabic">
                      <Users className="h-4 w-4" />
                      {game.players}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-arabic">
                      <Clock className="h-4 w-4" />
                      {game.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-arabic">
                      <Trophy className="h-4 w-4" />
                      مستوى: {game.difficulty}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(game.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary font-arabic">
                      {game.price}
                    </span>
                  </div>
                </div>
              </CardContent>

              <div className="p-6 pt-0 space-y-3">
                {/* Buy Button */}
                <Button
                  className="w-full bg-gradient-primary hover:bg-gradient-accent transition-all duration-300 font-arabic"
                  onClick={() => handleBuyGame(game)}
                >
                  <Gamepad className="h-4 w-4 ml-2" />
                  شراء اللعبة
                </Button>

                {/* Demo Button */}
                <Button
                  variant="outline"
                  className="w-full font-arabic border-card-border hover:bg-card-glass transition-all duration-300"
                  onClick={() => handleDownloadDemo(game)}
                >
                  📥 نسخة تجريبية مجانية
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Gaming Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold font-arabic mb-2">تحميل فوري</h3>
              <p className="text-muted-foreground font-arabic">احصل على لعبتك فوراً بعد الشراء</p>
            </CardContent>
          </Card>

          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold font-arabic mb-2">ضمان الجودة</h3>
              <p className="text-muted-foreground font-arabic">جميع الألعاب أصلية ومضمونة</p>
            </CardContent>
          </Card>

          <Card className="bg-card-glass backdrop-blur-md border-card-border text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold font-arabic mb-2">دعم فني</h3>
              <p className="text-muted-foreground font-arabic">دعم فني 24/7 لحل أي مشاكل</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Games;