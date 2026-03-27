import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Home, Building2, Wrench, Lightbulb, Zap, ShieldCheck, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, any> = {
  Home,
  Building2,
  Wrench,
  Lightbulb,
};

const FEATURES = [
  { icon: Zap, title: 'High Efficiency', desc: 'Maximum energy yield from every ray of sun.' },
  { icon: ShieldCheck, title: 'Certified Quality', desc: 'Industry-leading components and standards.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Rapid assessment and efficient installation.' },
  { icon: Users, title: 'Expert Support', desc: 'Dedicated team for consultation and maintenance.' },
];

export function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our <span className="text-primary">Solar Services</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From initial consultation to long-term maintenance, we provide end-to-end solar solutions tailored to your specific energy needs and goals.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 leading-tight">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                      <Link to="/quote">Get a Quote for this Service</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-32 py-24 bg-slate-900 rounded-[3rem] text-white px-8 md:px-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why SolarTech?</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">The Standard of Excellence</h3>
              <p className="text-slate-400 text-lg">
                We combine cutting-edge technology with unmatched expertise to deliver solar systems that outperform and outlast the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
