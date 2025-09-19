import React from 'react'; // Garanta que o React está importado
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingSocialButtons } from "./components/FloatingSocialButtons";
import { Toaster } from "./components/ui/sonner"; // <--- 1. IMPORTE AQUI

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingSocialButtons />
      <Toaster richColors /> {/* <--- 2. ADICIONE A TAG AQUI */}
    </div>
  );
}