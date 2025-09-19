import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileText, 
  AlertTriangle, 
  Languages,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Document Summarization",
      description: "Transform lengthy legal documents into concise, actionable summaries",
      features: [
        "Intelligent content extraction",
        "Key clause identification",
        "Executive summaries",
        "Custom summary lengths",
        "Multi-format support"
      ],
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600"
    },
    {
      icon: FileText,
      title: "Key Points Extraction",
      description: "Automatically identify and highlight the most critical information",
      features: [
        "Important clause detection",
        "Obligation identification",
        "Date and deadline extraction",
        "Party information parsing",
        "Priority ranking"
      ],
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "Comprehensive AI-powered risk assessment and compliance checking",
      features: [
        "Legal risk identification",
        "Compliance gap analysis",
        "Liability assessment",
        "Regulatory compliance",
        "Risk scoring"
      ],
      color: "from-red-500 to-orange-500",
      textColor: "text-red-600"
    },
    {
      icon: Languages,
      title: "Multi-Language Translation",
      description: "Professional legal translation across 50+ languages",
      features: [
        "Legal context preservation",
        "Terminology consistency",
        "Cultural adaptation",
        "Quality assurance",
        "Native review options"
      ],
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process documents 100x faster than manual review"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock document processing and analysis"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and collaborate on document analysis with your team"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="legal-container text-center">
          <Badge className="mb-6">Platform Features</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive AI-Powered
            <span className="block text-primary">Legal Analysis Suite</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how our four core AI analysis types can revolutionize your legal document 
            workflow and boost your productivity by 10x.
          </p>
          <Button size="lg" asChild>
            <Link to="/dashboard" className="inline-flex items-center space-x-2">
              <span>Try All Features</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="legal-container">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div key={feature.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary">Core Feature</Badge>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.features.map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${feature.textColor}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" asChild>
                      <Link to="/how-it-works">Learn How It Works</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-2">
                    <div className={`h-64 bg-gradient-to-r ${feature.color} rounded-lg mb-6 flex items-center justify-center`}>
                      <feature.icon className="h-24 w-24 text-white/80" />
                    </div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{feature.title} Demo</CardTitle>
                      <CardDescription>
                        Interactive preview of {feature.title.toLowerCase()} capabilities
                      </CardDescription>
                    </CardHeader>
                    <Button className="w-full" variant="outline">
                      Try Interactive Demo
                    </Button>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-muted/30">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional capabilities that make our platform the complete solution 
              for legal document analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="legal-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how our AI-powered features 
            can transform your legal document workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/dashboard">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;