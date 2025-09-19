import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";

const achievements = [
  { icon: CheckCircle, number: "500+", label: "Projects Completed" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Users, number: "50+", label: "Happy Clients" },
  { icon: Calendar, number: "24/7", label: "Support Available" }
];

const certifications = [
  "Professional Engineer (PE)",
  "LEED Accredited Professional",
  "Project Management Professional (PMP)",
  "OSHA 30-Hour Certification"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Engineering Excellence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 15 years of experience in civil engineering, we specialize in delivering 
              innovative and sustainable solutions for complex infrastructure challenges. Our team 
              combines technical expertise with creative problem-solving to ensure every project 
              meets the highest standards of quality and safety.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Licensed Professional Engineers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Sustainable Design Practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Advanced CAD & BIM Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Code Compliance Expertise</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Certifications & Qualifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More About Us
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