import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { toast } from "sonner"; // Importa a função de toast
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

// As informações de contato não mudam
const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: [
      "Rua Ovídio Custódio Moreira, Nº 435, Centro",
      "Icém – SP, CEP 15.460-007",
    ],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(17) 99773-1876"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["gomes.engenhariaeconsultoria@gmail.com"],
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: ["Segunda a Sexta: 08:00 - 18:00", "Sábado: 08:00 - 12:00"],
  },
];

export function Contact() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // ===== INÍCIO DA ALTERAÇÃO =====
    // Convertendo os dados do formulário para um objeto JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Adicionando a chave de acesso ao objeto
    const dataToSend = {
      ...object,
      access_key: "adfa6953-2d20-434b-b9ac-e6773a5986c8", // Sua chave de acesso
      subject: "Novo Contato do Site - GOMES Engenharia",
      from_name: "Contato via Site",
      redirect:
        "https://web3forms.com/success?__WEB3FORMS_SUCCESS_MESSAGE__=Obrigado!%20Sua%20mensagem%20foi%20enviada.",
    };

    // Exibe um toast de "carregando" enquanto envia
    const promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      // Adicionando os cabeçalhos para indicar que estamos enviando JSON
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataToSend), // Enviando o corpo como JSON
    }).then((response) => {
      if (!response.ok) {
        // Se a resposta do servidor não for OK (ex: erro 500), lança um erro
        return response.json().then((err) => {
          throw new Error(err.message || "Erro no servidor.");
        });
      }
      return response.json();
    });
    // ===== FIM DA ALTERAÇÃO =====

    toast.promise(promise, {
      loading: "Enviando mensagem...",
      success: (data) => {
        if (data.success) {
          (event.target as HTMLFormElement).reset(); // Limpa o formulário
          return "Mensagem enviada com sucesso!";
        }
        throw new Error(data.message || "Ocorreu um erro na API.");
      },
      error: (error) => {
        return error.message || "Falha na comunicação. Tente novamente.";
      },
    });
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu próximo projeto? Fale conosco para uma
            consultoria e vamos discutir suas necessidades de engenharia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Nossas Informações
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-muted-foreground text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">
                  Envie-nos uma Mensagem
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-1">
                  Responderemos o mais breve possível.
                </p>
              </CardHeader>

              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      name="nome"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      name="sobrenome"
                      placeholder="Seu sobrenome"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="telefone"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="mensagem"
                    placeholder="Conte-nos sobre o seu projeto..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enviar Mensagem
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
