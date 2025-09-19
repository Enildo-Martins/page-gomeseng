import React from 'react';
import { Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/logo-gomes.png";
import { Separator } from './ui/separator'; // Importando o componente Separator

export function Footer() {
  const whatsappNumber = "5517997731876";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse nos serviços da GOMES Engenharia.")}`;
  const instagramUrl = "https://www.instagram.com/gomes_engenhariaa?igsh=NTJmNnRqMTBtanBs";

  return (
    <footer className="bg-secondary/50 py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-muted-foreground">
          
          {/* Coluna 1: Logo, Descrição e Sociais */}
          <div className="space-y-4 pr-4">
            <img src={logo} alt="GOMES Engenharia e Consultoria" className="h-10" />
            <p className="text-sm">
              Excelência em engenharia civil e agrimensura, com foco em usinas fotovoltaicas, topografia e terraplanagem.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Onde Atuamos</a></li>
            </ul>
          </div>
          
          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Usinas Fotovoltaicas</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Topografia</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Drenagem</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Obra Civil</a></li>
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>Rua Ovídio Custódio Moreira, 435, Icém-SP</li>
              <li>(17) 99773-1876</li>
              <li>gomes.engenhariaeconsultoria@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* ===== INÍCIO DA ALTERAÇÃO ===== */}
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GOMES Engenharia e Consultoria. Todos os direitos reservados.</p>
        </div>
        {/* ===== FIM DA ALTERAÇÃO ===== */}

      </div>
    </footer>
  );
}