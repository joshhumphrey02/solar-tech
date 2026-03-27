import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our <span className="text-primary">Success Stories</span></h1>
          <p className="text-xl text-slate-600">
            Explore our portfolio of completed solar installations across residential, commercial, and industrial sectors. Real impact, real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg group hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary text-white px-4 py-1.5 text-sm font-semibold border-none shadow-lg">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="p-8">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      {project.capacity}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <Button variant="outline" asChild className="rounded-full border-primary text-primary hover:bg-primary hover:text-white group/btn">
                    <Link to="/contact" className="flex items-center">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary/5 p-10 rounded-3xl text-center border border-primary/10">
            <h4 className="text-5xl font-bold text-primary mb-2">12k+</h4>
            <p className="text-slate-600 font-medium">Solar Panels Installed</p>
          </div>
          <div className="bg-primary/5 p-10 rounded-3xl text-center border border-primary/10">
            <h4 className="text-5xl font-bold text-primary mb-2">850+</h4>
            <p className="text-slate-600 font-medium">Projects Completed</p>
          </div>
          <div className="bg-primary/5 p-10 rounded-3xl text-center border border-primary/10">
            <h4 className="text-5xl font-bold text-primary mb-2">15</h4>
            <p className="text-slate-600 font-medium">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
}
