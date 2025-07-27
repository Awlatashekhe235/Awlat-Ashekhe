import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  MessageCircle
} from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1M5Pjmq9Tb/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://www.instagram.com/hamzamacki235t?igsh=MXFpbjF4d2Flb211eA==",
      color: "hover:text-pink-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Hamzamacki1?t=LBvD2sgjONZd4DwWzIS6RQ&s=09",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/hamza-macki-",
      color: "hover:text-blue-700"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@Awladashekhe",
      color: "hover:text-red-600"
    },
    {
      name: "Messenger",
      icon: MessageCircle,
      url: "https://m.me/hamzamacki235",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          onClick={() => window.open(link.url, '_blank')}
          className={`transition-colors ${link.color}`}
        >
          <link.icon className="h-5 w-5" />
        </Button>
      ))}
    </div>
  );
};