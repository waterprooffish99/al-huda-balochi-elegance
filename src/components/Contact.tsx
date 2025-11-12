import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@alhudagallery.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Balochistan, Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our collections? We're here to help you find the perfect outfit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Chat with Us on WhatsApp
                  </h3>
                  <p className="text-muted-foreground">
                    Get instant responses to your queries and explore our latest collections
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant w-full"
                  onClick={() => window.open('https://wa.me/', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
