import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Brain, 
  AlertTriangle, 
  Languages, 
  Zap, 
  Shield,
  Clock,
  TrendingUp
} from "lucide-react";

const FeaturesOverview = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Summarization",
      description: "Get concise, intelligent summaries of complex legal documents in seconds.",
      badge: "Core Feature",
      color: "text-blue-600"
    },
    {
      icon: FileText,
      title: "Key Points Extraction",
      description: "Automatically identify and extract the most important clauses and provisions.",
      badge: "Popular",
      color: "text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "Identify potential legal risks and compliance issues with AI-powered analysis.",
      badge: "Advanced",
      color: "text-red-600"
    },
    {
      icon: Languages,
      title: "Multi-Language Translation",
      description: "Translate legal documents across 50+ languages while preserving legal context.",
      badge: "Global",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process documents 100x faster than traditional manual review methods.",
      badge: "Performance",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2.",
      badge: "Security",
      color: "text-gray-600"
    }
  ];

  const stats = [
    { label: "Documents Processed", value: "500K+", icon: FileText },
    { label: "Time Saved", value: "10M+ hrs", icon: Clock },
    { label: "Accuracy Rate", value: "99.7%", icon: TrendingUp },
    { label: "Languages Supported", value: "50+", icon: Languages }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="legal-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Platform Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive AI-Powered Legal Analysis
          </h2>
          <p className="text-lg text-muted-foreground">
            Our advanced AI platform provides four core analysis types to transform 
            how you work with legal documents.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-lg bg-card border">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-card group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to revolutionize your legal workflow?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of legal professionals who trust our AI platform 
              for faster, more accurate document analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero bg-white text-primary hover:bg-blue-50">
                Start Free Trial
              </button>
              <button className="btn-ghost border-white text-white hover:bg-white/10">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;