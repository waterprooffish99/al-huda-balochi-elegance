import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ComingSoon from "@/components/ComingSoon";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Collections />
        <ComingSoon />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
