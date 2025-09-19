import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building, Construction, Wrench, MapPin, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Structural Engineering",
    description: "Design and analysis of buildings, bridges, and other structures to ensure safety and durability."
  },
  {
    icon: Construction,
    title: "Infrastructure Design",
    description: "Planning and design of roads, bridges, water systems, and other critical infrastructure projects."
  },
  {
    icon: Wrench,
    title: "Construction Management",
    description: "Project oversight from conception to completion, ensuring quality, timeline, and budget adherence."
  },
  {
    icon: MapPin,
    title: "Site Development",
    description: "Land development planning, grading, drainage, and utility design for residential and commercial sites."
  },
  {
    icon: Shield,
    title: "Safety Assessment",
    description: "Comprehensive structural inspections and safety evaluations for existing buildings and infrastructure."
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert consultation on engineering challenges, code compliance, and project feasibility studies."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive civil engineering solutions for all your construction and infrastructure needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}