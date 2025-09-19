import React from 'react';
import { Button } from "./ui/button";
import heroImage from '../assets/hero-background.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Infraestrutura para Usinas Fotovoltaicas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Excelência em Engenharia e Consultoria para Grandes Projetos
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Mais de 8 anos de experiência em topografia, terraplanagem, drenagem e construções civis, com foco em usinas fotovoltaicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <a href="#services">
                Nossos Serviços
              </a>
            </Button>
            
            {/* ===== INÍCIO DA CORREÇÃO ===== */}
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3"
            >
              <a href="#contact">
                Solicitar Orçamento
              </a>
            </Button>
            {/* ===== FIM DA CORREÇÃO ===== */}

          </div>
        </div>
      </div>
    </section>
  );
}