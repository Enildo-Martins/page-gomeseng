import logo from "../assets/logo-gomes.png";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Usando a tag img para a logo importada */}
          <img
            src={logo}
            alt="GOMES Engenharia e Consultoria"
            className="h-12"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Início
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Quem Somos
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href="#contact">Fazer Orçamento</a>
        </Button>
      </div>
    </header>
  );
}
