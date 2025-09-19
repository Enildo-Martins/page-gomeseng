import React from 'react';
import { Separator } from "./ui/separator";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo-gomes.png";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <img src={logo} alt="GOMES Engenharia e Consultoria" className="h-12" />
            <p className="text-muted-foreground text-sm">
              Excelência em engenharia civil e agrimensura, com foco em usinas fotovoltaicas, topografia e terraplanagem.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Onde Atuamos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Usinas Fotovoltaicas</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Topografia</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Drenagem</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Obra Civil</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rua Ovídio Custódio Moreira, 435, Icém-SP</li>
              <li>(17) 99773-1876</li>
              <li>gomes.engenhariaeconsultoria@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GOMES Engenharia e Consultoria. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}