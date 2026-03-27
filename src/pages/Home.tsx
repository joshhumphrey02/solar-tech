import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { CTA } from '@/components/sections/CTA';
import { TESTIMONIALS, FAQS } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <ServicesPreview />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
                  <CardHeader className="relative">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <p className="text-sm text-slate-500">{testimonial.role}{testimonial.company ? ` @ ${testimonial.company}` : ''}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Frequently Asked Questions</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-white px-6 rounded-2xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
