import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Target, Users, Award, ShieldCheck, Zap, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VALUES = [
  { icon: Leaf, title: 'Sustainability', desc: 'We are committed to a carbon-free future through clean energy.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Honest advice and transparent pricing in every interaction.' },
  { icon: Zap, title: 'Innovation', desc: 'Always pushing the boundaries of solar technology efficiency.' },
  { icon: Globe, title: 'Impact', desc: 'Creating positive change for communities and the planet.' },
];

const TEAM = [
  { name: 'David Miller', role: 'CEO & Founder', image: 'https://i.pravatar.cc/150?u=david' },
  { name: 'Sarah Chen', role: 'Chief Engineer', image: 'https://i.pravatar.cc/150?u=sarahc' },
  { name: 'James Wilson', role: 'Head of Installation', image: 'https://i.pravatar.cc/150?u=james' },
  { name: 'Maria Garcia', role: 'Customer Success', image: 'https://i.pravatar.cc/150?u=maria' },
];

export function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Leading the <span className="text-primary">Solar Revolution</span> Since 2010
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              SolarTech was founded with a simple mission: to make clean, renewable energy accessible to everyone. What started as a small team of passionate engineers has grown into a global leader in solar technology.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              We believe that the transition to sustainable energy is the most important challenge of our generation. By providing premium equipment and expert installation, we empower individuals and businesses to take control of their energy future.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-slate-500 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">850+</p>
                <p className="text-slate-500 font-medium">Projects Done</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-slate-500 font-medium">Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
                alt="Solar Farm"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Industry Leader</p>
                  <p className="text-sm text-slate-500">Top Solar Provider 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-[4rem] py-24 px-8 md:px-16 mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">What Drives Us Forward</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Team</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">The Minds Behind the Power</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-[3rem] py-16 px-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Zap className="w-96 h-96 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Join the Clean Energy Revolution</h3>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg relative z-10">
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
