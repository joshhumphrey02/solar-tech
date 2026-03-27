import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/mockData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Premium Equipment</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Top-Rated Solar Products
          </h3>
          <p className="text-slate-600 text-lg">
            We only supply and install the highest quality components from world-leading manufacturers, ensuring long-term reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group border-slate-100 hover:border-primary/20 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="rounded-full">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-primary font-bold text-lg">Premium Quality</span>
                  <Button variant="ghost" asChild className="text-slate-600 hover:text-primary p-0">
                    <Link to={`/products`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-10">
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
