import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const Collections = () => {
  // Placeholder product data - will be replaced with real images
  const mensWear = [
    { title: "Traditional Shalwar Kameez", category: "Men's Wear", image: "/placeholder.svg", isNew: true },
    { title: "Embroidered Waistcoat", category: "Men's Wear", image: "/placeholder.svg" },
    { title: "Formal Kurta Set", category: "Men's Wear", image: "/placeholder.svg" },
    { title: "Festive Collection", category: "Men's Wear", image: "/placeholder.svg", isNew: true },
  ];

  const womensWear = [
    { title: "Elegant Balochi Dress", category: "Women's Wear", image: "/placeholder.svg", isNew: true },
    { title: "Embroidered Gown", category: "Women's Wear", image: "/placeholder.svg" },
    { title: "Traditional Frock", category: "Women's Wear", image: "/placeholder.svg" },
    { title: "Festive Attire", category: "Women's Wear", image: "/placeholder.svg" },
    { title: "Casual Elegance", category: "Women's Wear", image: "/placeholder.svg", isNew: true },
    { title: "Summer Collection", category: "Women's Wear", image: "/placeholder.svg" },
  ];

  const bridalCollection = [
    { title: "Royal Bridal Ensemble", category: "Bridal", image: "/placeholder.svg", isNew: true },
    { title: "Heritage Bridal Dress", category: "Bridal", image: "/placeholder.svg" },
    { title: "Modern Bridal Gown", category: "Bridal", image: "/placeholder.svg" },
    { title: "Luxury Wedding Attire", category: "Bridal", image: "/placeholder.svg", isNew: true },
  ];

  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover authentic Balochi fashion crafted with traditional techniques and modern aesthetics
          </p>
        </div>

        <Tabs defaultValue="women" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-1 bg-muted">
            <TabsTrigger 
              value="women" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Women's Wear
            </TabsTrigger>
            <TabsTrigger 
              value="men"
              className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Men's Wear
            </TabsTrigger>
            <TabsTrigger 
              value="bridal"
              className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Bridal Collection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="women" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {womensWear.map((product, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="men" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {mensWear.map((product, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bridal" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {bridalCollection.map((product, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Collections;
