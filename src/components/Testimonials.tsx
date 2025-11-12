import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima Ahmed",
      location: "Karachi",
      text: "The quality and craftsmanship of Al Huda Gallery dresses are exceptional. I wore their bridal collection and received countless compliments.",
      rating: 5,
    },
    {
      name: "Hassan Ali",
      location: "Quetta",
      text: "Finally found authentic Balochi fashion online! The attention to detail and traditional designs are exactly what I was looking for.",
      rating: 5,
    },
    {
      name: "Ayesha Khan",
      location: "Lahore",
      text: "Beautiful collection with modern touches. The customer service was excellent and delivery was prompt. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Read experiences from our satisfied customers across Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
