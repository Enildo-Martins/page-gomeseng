import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";

// Informações extraídas do portfólio
const achievements = [
  { icon: Award, number: "8+", label: "Anos no Mercado" },
  { icon: Users, number: "50+", label: "Clientes Satisfeitos" }, // Mantido como exemplo, pode ser alterado
  { icon: CheckCircle, number: "500+", label: "Projetos Concluídos" }, // Mantido como exemplo, pode ser alterado
  { icon: Calendar, number: "24/7", label: "Suporte Disponível" } // Mantido como exemplo, pode ser alterado
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Quem Somos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos uma empresa consolidada a mais de 8 anos no mercado, nossa missão é proporcionar excelência em serviços de engenharia civil e agrimensura, com foco destacado em topografia, terraplanagem, drenagem e construções civis em usinas fotovoltaicas. Contamos com uma equipe altamente qualificada e comprometida, dedicada a superar expectativas e garantir que cada projeto seja uma expressão de qualidade e compromisso inabalável.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Buscamos constantemente elevar o padrão de nossos serviços, proporcionando experiências excepcionais em cada empreendimento e tudo é realizado no mais alto padrão de segurança, saúde e meio ambiente. Assim, solidificamos a confiança depositada em nós e deixamos uma marca indelével de excelência em cada obra que realizamos.
            </p>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">
                Fale Conosco
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-secondary/30 rounded-lg">
                <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}