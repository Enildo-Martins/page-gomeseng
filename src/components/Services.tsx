import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

// Importando as imagens dos serviços
import usinas from '../assets/servico-usinas.jpg';
import topografia from '../assets/servico-topografia.jpg';
import drenagem from '../assets/servico-drenagem.jpg';
import linhas from '../assets/servico-linhas-transmissao.jpg';
import obraCivil from '../assets/servico-obra-civil.jpg';
import infraestrutura from '../assets/servico-infraestrutura.jpg';
import terraplanagem from '../assets/servico-terraplanagem.jpg';
import hidrossemeadura from '../assets/servico-hidrossemeadura.jpg';

// Lista de serviços baseada no portfólio do cliente
const services = [
  {
    image: usinas,
    title: "Infraestrutura Para Usinas Fotovoltaicas",
    description: "Execução completa de terraplanagem, drenagem e obras civis para usinas fotovoltaicas."
  },
  {
    image: topografia,
    title: "Topografia",
    description: "Serviços de agrimensura e levantamentos topográficos de alta precisão para seus projetos."
  },
  {
    image: drenagem,
    title: "Drenagem",
    description: "Projetos e implementação de sistemas de drenagem eficientes para controle de águas pluviais."
  },
  {
    image: linhas,
    title: "Obras de Linha de Transmissão",
    description: "Construção e manutenção de infraestrutura para linhas de transmissão de energia."
  },
  {
    image: obraCivil,
    title: "Obra Civil",
    description: "Construções civis em geral, incluindo fundações, cabines de medição e estruturas de concreto."
  },
  {
    image: infraestrutura,
    title: "Infraestrutura",
    description: "Desenvolvimento de projetos de infraestrutura complexos, garantindo durabilidade e segurança."
  },
  {
    image: terraplanagem,
    title: "Terraplanagem",
    description: "Serviços de movimentação de terra, nivelamento e preparação de terrenos para construção."
  },
  {
    image: hidrossemeadura,
    title: "Hidrossemeadura",
    description: "Técnica de plantio para controle de erosão e revegetação de taludes e áreas degradadas."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Conheça Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e de alta qualidade em engenharia civil e agrimensura para o seu projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* ===== INÍCIO DA ALTERAÇÃO ===== */}
              {/* Agora o título e a descrição estão juntos no CardContent para um layout mais coeso */}
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 flex-grow">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
              {/* ===== FIM DA ALTERAÇÃO ===== */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}