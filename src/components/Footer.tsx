const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold text-foreground">
              Al Huda <span className="text-primary">Gallery</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Authentic Balochi Elegance
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Al Huda Gallery. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Made with ♥ for cultural heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
