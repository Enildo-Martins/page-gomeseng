import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Modern Bridge Design",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1683205817608-f3818b3b9428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NTgyOTgyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Design and construction of a 500-meter cable-stayed bridge with innovative seismic isolation systems."
  },
  {
    title: "Commercial Complex",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1692910056923-de8686184b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZ3xlbnwxfHx8fDE3NTgyOTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "25-story mixed-use development with sustainable design features and LEED Gold certification."
  },
  {
    title: "Infrastructure Planning",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1729551610640-e8adee1172e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludHMlMjBwbGFuc3xlbnwxfHx8fDE3NTgyOTgyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Comprehensive master planning for a 200-acre residential development with integrated utilities."
  },
  {
    title: "Highway Expansion",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NTgyOTgyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Design and project management for 15-mile highway expansion with environmental considerations."
  },
  {
    title: "Water Treatment Facility",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1683205817608-f3818b3b9428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NTgyOTgyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Advanced water treatment facility serving 100,000 residents with cutting-edge filtration technology."
  },
  {
    title: "Residential Development",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1692910056923-de8686184b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBidWlsZGluZ3xlbnwxfHx8fDE3NTgyOTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Site development and infrastructure design for 500-unit sustainable housing community."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful engineering projects across various sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-white border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}