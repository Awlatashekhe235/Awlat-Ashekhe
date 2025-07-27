import { Button } from "@/components/ui/button";
import { CreditCard, Building2, Wallet } from "lucide-react";

export const PaymentIcons = () => {
  const paymentMethods = [
    {
      name: "ECOBANK",
      icon: Building2,
      color: "text-green-600",
      action: () => console.log("ECOBANK selected")
    },
    {
      name: "UBA",
      icon: Building2, 
      color: "text-red-600",
      action: () => console.log("UBA selected")
    },
    {
      name: "بنك الخرطوم",
      icon: Building2,
      color: "text-blue-600", 
      action: () => console.log("بنك الخرطوم selected")
    },
    {
      name: "PayPal",
      icon: Wallet,
      color: "text-blue-500",
      action: () => window.open("https://paypal.com", "_blank")
    },
    {
      name: "Visa",
      icon: CreditCard,
      color: "text-blue-700",
      action: () => console.log("Visa selected")
    },
    {
      name: "Mastercard",
      icon: CreditCard,
      color: "text-red-500",
      action: () => console.log("Mastercard selected")
    }
  ];

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-center mb-3 text-muted-foreground">
        طرق الدفع المتاحة
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {paymentMethods.map((method, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={method.action}
            className="text-xs px-3 py-1 hover:scale-105 transition-transform"
          >
            <method.icon className={`h-3 w-3 mr-1 ${method.color}`} />
            {method.name}
          </Button>
        ))}
      </div>
    </div>
  );
};