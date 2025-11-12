import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  price?: string;
  isNew?: boolean;
}

const ProductCard = ({ title, category, image, price, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover-lift cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-0">
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
            <h3 className="text-base font-display font-semibold text-foreground mt-1">{title}</h3>
          </div>
          {price && (
            <p className="text-sm font-medium text-primary whitespace-nowrap">{price}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
