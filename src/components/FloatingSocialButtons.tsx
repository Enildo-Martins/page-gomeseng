import React from 'react';
import { Button } from "./ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export function FloatingSocialButtons() {
  const handleWhatsAppClick = () => {
    // Número do cliente, incluindo código do país (55 para Brasil)
    const phoneNumber = "5517997731876"; 
    const message = "Olá! Tenho interesse nos serviços da GOMES Engenharia e gostaria de um orçamento.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    // Link do Instagram do cliente
    const instagramUrl = "https://www.instagram.com/gomes_engenhariaa?igsh=NTJmNnRqMTBtanBs";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      <Button
        onClick={handleInstagramClick}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Siga-nos no Instagram"
      >
        <Instagram className="w-6 h-6" />
      </Button>
    </div>
  );
}