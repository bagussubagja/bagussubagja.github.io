import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Check, ArrowLeft, ExternalLink, ShoppingCart, Package, Code, FileText } from "lucide-react";
import { getProductById } from "@/data/products";
import { AnimatedSection, AnimatedList, AnimatedItem, fadeLeft, fadeRight } from "@/components/animations/MotionWrapper";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div className="text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you are looking for is not available.</p>
          <Button asChild>
            <Link to="/products"><ArrowLeft className="mr-2 w-4 h-4" />Back to Products</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Bagus Subagja</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <Navigation />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />Back to Products
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
            >
              {/* Product Image */}
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                )}
              </motion.div>

              {/* Title & Description */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </AnimatedSection>

              <Separator />

              {/* Features */}
              <AnimatedSection>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedList className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <AnimatedItem key={index}>
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        </AnimatedItem>
                      ))}
                    </AnimatedList>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Tech Stack */}
              <AnimatedSection>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }}>
                          <Badge variant="outline" className="px-3 py-1">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />What You Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.includes.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              animate="visible"
              variants={fadeRight}
            >
              <div className="sticky top-24">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                          Save {calculateDiscount(product.originalPrice, product.price)}%
                        </Badge>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      {["Lifetime access", "Free updates", "Support included"].map((text, i) => (
                        <motion.div
                          key={text}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {text}
                        </motion.div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full" size="lg">
                          <ShoppingCart className="mr-2 w-4 h-4" />Buy Now
                        </Button>
                      </motion.div>
                      {product.demoUrl && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" className="w-full" size="lg" asChild>
                            <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 w-4 h-4" />View Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span>{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="fixed top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </main>

      <Footer />
    </>
  );
};

const calculateDiscount = (original: string, current: string): number => {
  const originalNum = parseInt(original.replace(/[^\d]/g, ""));
  const currentNum = parseInt(current.replace(/[^\d]/g, ""));
  return Math.round(((originalNum - currentNum) / originalNum) * 100);
};

export default ProductDetail;
