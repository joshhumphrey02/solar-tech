import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/mockData';
import { useAppStore } from '@/store/useAppStore';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ShoppingCart, Eye, Star, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'panels', label: 'Solar Panels' },
  { id: 'inverters', label: 'Inverters' },
  { id: 'batteries', label: 'Batteries' },
  { id: 'controllers', label: 'Controllers' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'pumps', label: 'Water Pumps' },
  { id: 'kits', label: 'Complete Kits' },
];

export function Products() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useAppStore();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Solar <span className="text-primary">Equipment</span></h1>
          <p className="text-xl text-slate-600">
            Browse our extensive catalog of high-performance solar components and complete systems. We source only from top-tier manufacturers.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search products..."
              className="pl-12 h-14 rounded-full border-slate-200 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-auto">
              <TabsList className="bg-slate-100 p-1 rounded-full h-14">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full px-6 h-12 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white border-none">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-1">
                      {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-slate-400">{key}:</span>
                          <span className="text-slate-700 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-slate-50 gap-3">
                    <Button className="flex-grow rounded-full gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Quote
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full shrink-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
            <Button
              variant="link"
              className="mt-4 text-primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
