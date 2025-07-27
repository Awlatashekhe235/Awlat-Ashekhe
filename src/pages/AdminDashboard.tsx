import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  GamepadIcon, 
  Users, 
  BookOpen, 
  Settings, 
  Plus,
  Trash2,
  Edit
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // بيانات تجريبية للإحصائيات
  const stats = {
    totalProducts: 156,
    totalUsers: 1247,
    totalEngineers: 3,
    totalGames: 25,
    totalAudio: 15
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            لوحة تحكم المسؤول
          </h1>
          <p className="text-muted-foreground">
            إدارة شاملة للموقع ومحتوياته
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="games">الألعاب</TabsTrigger>
            <TabsTrigger value="engineers">المهندسين</TabsTrigger>
            <TabsTrigger value="audio">القرآن الكريم</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">المنتجات</CardTitle>
                  <Badge variant="secondary">{stats.totalProducts}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalProducts}</div>
                  <p className="text-xs text-muted-foreground">إجمالي المنتجات</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">المستخدمين</CardTitle>
                  <Badge variant="secondary">{stats.totalUsers}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">المستخدمين المسجلين</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الألعاب</CardTitle>
                  <Badge variant="secondary">{stats.totalGames}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalGames}</div>
                  <p className="text-xs text-muted-foreground">الألعاب المتاحة</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الصوتيات</CardTitle>
                  <Badge variant="secondary">{stats.totalAudio}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalAudio}</div>
                  <p className="text-xs text-muted-foreground">تسجيلات القرآن</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="games" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <GamepadIcon className="h-5 w-5" />
                    إدارة الألعاب والتطبيقات
                  </CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    إضافة لعبة جديدة
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">PUBG Mobile</h4>
                      <p className="text-sm text-muted-foreground">لعبة باتل رويال</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engineers" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    إدارة المهندسين
                  </CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    إضافة مهندس جديد
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">حمزه مكي</h4>
                      <p className="text-sm text-muted-foreground">خبير تكنولوجيا</p>
                    </div>
                    <Badge variant="secondary">نشط</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    إدارة صوتيات القرآن الكريم
                  </CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    إضافة تسجيل جديد
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">سورة الفاتحة</h4>
                      <p className="text-sm text-muted-foreground">القارئ: عبد الرحمن السديس</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  إعدادات عامة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">صلاحيات المسؤولين</h4>
                  <div className="space-y-2">
                    <p className="text-sm">hamzamacki235@gmail.com</p>
                    <p className="text-sm">walmacki235@gmail.com</p>
                    <p className="text-sm">bakhitmacki235@gmail.com</p>
                    <p className="text-sm">awladashikhe@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}