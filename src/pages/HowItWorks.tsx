import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload,
  Brain,
  FileCheck,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Your Document",
      description: "Securely upload your legal documents in PDF, DOCX, or TXT format. Files up to 10MB are supported.",
      details: [
        "Drag & drop interface",
        "Multiple file formats supported",
        "Secure encrypted upload",
        "Progress tracking",
        "File validation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Analysis Processing",
      description: "Our advanced AI analyzes your document across all four analysis types simultaneously.",
      details: [
        "Natural language processing",
        "Legal context understanding",
        "Risk pattern recognition",
        "Multi-language detection",
        "Quality assurance checks"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      icon: FileCheck,
      title: "Review Results",
      description: "Access comprehensive analysis results through our intuitive dashboard with interactive tabs.",
      details: [
        "Tabbed result interface",
        "Interactive summaries",
        "Risk scoring visualization",
        "Key points highlighting",
        "Translation options"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      icon: Download,
      title: "Export & Share",
      description: "Download your analysis results in multiple formats or share securely with your team.",
      details: [
        "PDF report generation",
        "Word document export",
        "Secure sharing links",
        "Team collaboration",
        "Version control"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Average processing time: 30 seconds"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade encryption"
    },
    {
      icon: CheckCircle,
      title: "99.7% Accuracy",
      description: "Consistently accurate results"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Process documents anytime"
    }
  ];

  const analysisTypes = [
    {
      title: "Document Summarization",
      description: "Intelligent extraction of key information into concise summaries",
      time: "15-30 seconds"
    },
    {
      title: "Key Points Extraction",
      description: "Identification of critical clauses, obligations, and important details",
      time: "20-40 seconds"
    },
    {
      title: "Risk Analysis",
      description: "Comprehensive assessment of legal risks and compliance issues",
      time: "30-60 seconds"
    },
    {
      title: "Translation",
      description: "Professional translation maintaining legal context and terminology",
      time: "45-90 seconds"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="legal-container text-center">
          <Badge className="mb-6">How It Works</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple 4-Step Process to
            <span className="block text-primary">Transform Your Documents</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From upload to insights in minutes. See how our AI-powered platform 
            processes your legal documents with unprecedented speed and accuracy.
          </p>
          <Button size="lg" asChild>
            <Link to="/dashboard" className="inline-flex items-center space-x-2">
              <span>Try It Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="legal-container">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2"></div>
                )}
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${step.color}`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <Badge variant="secondary">Step {step.step}</Badge>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">{step.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-2">
                      <div className={`h-64 bg-gradient-to-r ${step.color} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                        <step.icon className="h-24 w-24 text-white/80" />
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium">
                          Step {step.step}
                        </div>
                      </div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>
                          Interactive demo of step {step.step} in the process
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Types Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Four Analysis Types, One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each document gets processed through all four AI analysis types, 
              providing comprehensive insights in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisTypes.map((type, index) => (
              <Card key={type.title} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {type.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Platform?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="legal-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven legal document analysis. 
            Start your free trial and process your first document in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/dashboard">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/demo">Watch Demo Video</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;