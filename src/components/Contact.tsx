import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Informações de contato atualizadas com os dados do cliente
const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua Ovídio Custódio Moreira, Nº 435, Centro", "Icém – SP, CEP 15.460-007"]
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(17) 99773-1876"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["gomes.engenhariaeconsultoria@gmail.com"]
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: ["Segunda a Sexta: 08:00 - 18:00", "Sábado: 08:00 - 12:00"]
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu próximo projeto? Fale conosco para uma consultoria e vamos discutir suas necessidades de engenharia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Nossas Informações</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Envie-nos uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Seu sobrenome" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(XX) XXXXX-XXXX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos sobre o seu projeto..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}