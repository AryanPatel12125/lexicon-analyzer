import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-legal-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 legal-container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            🚀 AI-Powered Legal Analysis Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Legal
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Document Analysis
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Harness the power of AI to summarize, analyze risks, extract key points, 
            and translate legal documents with unprecedented accuracy and speed.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {[
              "Smart Summarization",
              "Risk Analysis",
              "Multi-language Support",
              "Secure Processing"
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link to="/dashboard" className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload Document</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link to="/demo" className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Try Demo</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-sm text-blue-200 mb-6">Trusted by 1000+ legal professionals worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Enterprise", "Law Firms", "Corporate Legal", "Startups"].map((type) => (
                <div key={type} className="text-white/70 font-medium">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;