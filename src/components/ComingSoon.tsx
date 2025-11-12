import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Wand2 } from "lucide-react";

const ComingSoon = () => {
  const features = [
    {
      icon: Wand2,
      title: "Virtual Try-On",
      description: "Experience our dresses virtually with AI-powered try-on technology",
    },
    {
      icon: Sparkles,
      title: "AI Style Advisor",
      description: "Get personalized styling recommendations based on your preferences",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground">
            Exciting AI-powered features to enhance your shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 border-dashed border-primary/30 bg-card/50 backdrop-blur hover:border-primary/60 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>In Development</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
