import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { AnimatedSection, AnimatedList, AnimatedItem } from "./animations/MotionWrapper";

const DigitalProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            <ShoppingBag className="w-3 h-3 mr-2" />
            Digital Products
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Premium Digital{" "}
            <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Premium templates, plugins, and tools designed to accelerate your development workflow
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <AnimatedItem key={product.id}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to={`/products/${product.id}`}>
                  <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                          <span>{product.rating}</span>
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedList>

        <AnimatedSection className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DigitalProducts;
