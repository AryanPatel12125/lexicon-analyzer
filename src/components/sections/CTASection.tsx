import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Get Started in Minutes",
      description: "No complex setup required"
    },
    {
      icon: FileText,
      title: "Free Document Analysis",
      description: "Try with your own documents"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data stays secure"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="legal-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Badge className="mb-6">Get Started Today</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your 
            <span className="block text-primary">Legal Document Workflow?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of legal professionals who have revolutionized their 
            document analysis process with our AI-powered platform.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 group px-8"
              asChild
            >
              <Link to="/dashboard" className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
              asChild
            >
              <Link to="/demo">
                View Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
            <div className="flex justify-center items-center space-x-6 text-xs text-muted-foreground">
              <span>✓ SOC 2 Compliant</span>
              <span>✓ GDPR Ready</span>
              <span>✓ 256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;