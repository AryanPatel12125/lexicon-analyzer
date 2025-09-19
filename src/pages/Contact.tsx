import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Zap
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our expert team",
      contact: "support@legalai.com",
      availability: "24/7 response within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Speak directly with our specialists",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized product demo",
      contact: "calendly.com/legalai-demo",
      availability: "Available all week"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support via chat",
      contact: "Available on our platform",
      availability: "Mon-Fri, 8AM-8PM EST"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      primary: true
    },
    {
      city: "New York",
      address: "456 Legal District Ave, Floor 15",
      zipcode: "New York, NY 10004", 
      phone: "+1 (555) 987-6543",
      primary: false
    },
    {
      city: "London",
      address: "789 Legal Quarter, Suite 200",
      zipcode: "London EC2M 7PP, UK",
      phone: "+44 20 7123 4567",
      primary: false
    }
  ];

  const faqs = [
    {
      question: "How secure is my document data?",
      answer: "We use enterprise-grade encryption and follow SOC 2, GDPR, and HIPAA compliance standards to ensure your data is completely secure."
    },
    {
      question: "What file formats do you support?",
      answer: "We support PDF, DOCX, DOC, and TXT files up to 10MB in size for comprehensive analysis."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI maintains a 99.7% accuracy rate, continuously improved through machine learning and legal expert validation."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes, we offer REST APIs and integrations with popular legal management platforms. Contact our team for custom integration support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="legal-container text-center">
          <Badge className="mb-6">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch with
            <span className="block text-primary">Our Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you have questions about our AI platform, need technical support, 
            or want to explore enterprise solutions, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to assist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                <CardDescription className="mb-3">{method.description}</CardDescription>
                <div className="text-sm font-medium text-primary mb-2">{method.contact}</div>
                <div className="text-xs text-muted-foreground">{method.availability}</div>
              </Card>
            ))}
          </div>

          {/* Contact Form & Office Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your needs or questions..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Our Offices</span>
                  </CardTitle>
                  <CardDescription>
                    Visit us at one of our global locations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{office.city}</h3>
                        {office.primary && (
                          <Badge variant="secondary">Headquarters</Badge>
                        )}
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>{office.address}</p>
                        <p>{office.zipcode}</p>
                        <p className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{office.phone}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <hr className="my-4" />
                  <div className="text-sm text-muted-foreground">
                    <p className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>Emergency support available 24/7</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Enterprise customers get priority support</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="legal-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="legal-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of legal and technical experts is here to help you succeed. 
            Get personalized support for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;