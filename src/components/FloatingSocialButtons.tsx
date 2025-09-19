import { Button } from "./ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export function FloatingSocialButtons() {
  const handleWhatsAppClick = () => {
    // Replace with actual phone number and custom message
    const phoneNumber = "15551234567"; // Format: country code + number (no + or spaces)
    const message = "Hello! I'm interested in your civil engineering services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    // Replace with actual Instagram username
    const instagramUsername = "civilengineeringpro";
    const instagramUrl = `https://www.instagram.com/${instagramUsername}`;
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      <Button
        onClick={handleInstagramClick}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
      </Button>
    </div>
  );
}