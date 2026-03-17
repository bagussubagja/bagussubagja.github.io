import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { products, getProductCategories } from "@/data/products";
import { AnimatedSection, AnimatedList, AnimatedItem } from "@/components/animations/MotionWrapper";

const AllProducts = () => {
  const categories = getProductCategories();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Digital Products | Bagus Subagja</title>
        <meta name="description" content="Premium digital products collection - templates, plugins, and tools to accelerate your development workflow." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm" className="group">
              <Link to="/#products">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <ShoppingBag className="w-3 h-3 mr-2" />
              Digital Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Digital <span className="text-primary">Products</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Premium templates, plugins, and tools designed to accelerate your development workflow
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("All")}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <AnimatedItem key={product.id}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to={`/products/${product.id}`}>
                    <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {product.badge && (
                          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                            <span>{product.rating}</span>
                            <span>({product.reviews})</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
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
        </div>

        <div className="fixed top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </main>

      <Footer />
    </>
  );
};

export default AllProducts;
