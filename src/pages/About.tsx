import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Linkedin,
  Mail,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former Partner at Morrison & Associates, 15+ years in legal tech",
      image: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "Ex-Google AI Engineer, PhD in Natural Language Processing",
      image: "👨‍💻"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Chief Legal Officer",
      background: "Former General Counsel at Fortune 500, Harvard Law",
      image: "👩‍⚖️"
    },
    {
      name: "David Kim",
      role: "Head of AI Research",
      background: "Former Research Scientist at OpenAI, Stanford PhD",
      image: "👨‍🔬"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to revolutionize legal document analysis"
    },
    {
      year: "2023",
      title: "AI Engine Launch",
      description: "Released our first AI-powered document analysis platform"
    },
    {
      year: "2024",
      title: "Enterprise Growth",
      description: "Reached 1000+ legal professionals and 500+ law firms"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Multi-language support and international compliance"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI and legal technology"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building secure, reliable solutions that legal professionals can depend on"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making advanced legal analysis tools available to organizations of all sizes"
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "Committed to delivering the highest quality AI-powered legal insights"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="legal-container text-center">
          <Badge className="mb-6">About LegalAI</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Legal Work with
            <span className="block text-primary">Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to democratize access to sophisticated legal document analysis, 
            empowering legal professionals with AI-powered insights that were once only available 
            to the largest firms.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="legal-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize the legal industry by making advanced AI-powered document 
                analysis accessible, accurate, and affordable for legal professionals worldwide. 
                We believe that every lawyer, regardless of firm size, should have access to 
                cutting-edge technology that enhances their ability to serve clients effectively.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Democratize Legal Tech</h3>
                    <p className="text-muted-foreground text-sm">
                      Make enterprise-grade AI tools accessible to all legal professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enhance Productivity</h3>
                    <p className="text-muted-foreground text-sm">
                      Help lawyers focus on high-value work by automating routine analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-muted-foreground text-sm">
                      Support legal professionals across languages and jurisdictions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="text-base">
                  A world where every legal professional has AI-powered insights at their fingertips
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a future where artificial intelligence seamlessly integrates with 
                  legal workflows, enabling faster decision-making, improved accuracy, and better 
                  outcomes for clients worldwide.
                </p>
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center space-x-2">
                    <span>Join Our Mission</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {value.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seasoned legal and technology experts working together to transform the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                <CardDescription className="font-medium text-primary mb-3">
                  {member.role}
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {member.background}
                </CardDescription>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform legal document analysis.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-3 font-bold min-w-[4rem] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="legal-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Future of Legal Tech?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven legal document analysis. 
            See why thousands of legal professionals trust our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/dashboard">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;