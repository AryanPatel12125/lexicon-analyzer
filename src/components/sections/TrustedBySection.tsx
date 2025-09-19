import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, Globe } from "lucide-react";

const TrustedBySection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Partner",
      company: "Morrison & Associates",
      content: "LegalAI has transformed our document review process. What used to take days now takes hours.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Legal Director",
      company: "TechCorp Inc.",
      content: "The risk analysis feature has helped us identify potential issues we might have missed.",
      rating: 5
    },
    {
      name: "Dr. Emma Thompson",
      role: "Compliance Officer",
      company: "Global Finance Ltd.",
      content: "Multi-language support is exceptional. Perfect for our international contracts.",
      rating: 5
    }
  ];

  const companies = [
    { name: "Law Firms", icon: Building, count: "500+" },
    { name: "Corporations", icon: Globe, count: "200+" },
    { name: "Legal Professionals", icon: Users, count: "10K+" },
    { name: "Countries", icon: Award, count: "50+" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="legal-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Legal Professionals Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what industry leaders say about our AI-powered legal analysis platform.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companies.map((company) => (
            <div key={company.name} className="text-center p-6">
              <company.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-primary mb-1">{company.count}</div>
              <div className="text-sm text-muted-foreground">{company.name}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;