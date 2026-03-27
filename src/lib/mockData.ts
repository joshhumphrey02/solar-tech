import { Product, Service, Project, Testimonial, FAQ } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'EcoSolar 450W Mono-Crystalline Panel',
    category: 'panels',
    description: 'High-efficiency mono-crystalline solar panel with PERC technology for maximum energy yield.',
    image: 'https://picsum.photos/seed/solarpanel1/600/400',
    features: ['21.5% Efficiency', 'Anti-reflective coating', '25-year warranty', 'Excellent low-light performance'],
    specs: {
      'Peak Power': '450W',
      'Efficiency': '21.5%',
      'Dimensions': '2094 x 1038 x 35 mm',
      'Weight': '24.5 kg'
    }
  },
  {
    id: 'p2',
    name: 'SunVolt 5kW Hybrid Inverter',
    category: 'inverters',
    description: 'Advanced hybrid inverter supporting both grid-tie and off-grid operations with seamless switching.',
    image: 'https://picsum.photos/seed/inverter1/600/400',
    features: ['Dual MPPT trackers', 'Mobile app monitoring', 'IP65 rated', 'Battery ready'],
    specs: {
      'Max Input': '6500W',
      'AC Output': '5000W',
      'Efficiency': '97.6%',
      'Warranty': '10 years'
    }
  },
  {
    id: 'p3',
    name: 'LithiumMax 10kWh Battery Storage',
    category: 'batteries',
    description: 'Safe and long-lasting LiFePO4 battery storage system for residential energy independence.',
    image: 'https://picsum.photos/seed/battery1/600/400',
    features: ['6000+ cycle life', 'Modular design', 'Built-in BMS', 'Wall-mountable'],
    specs: {
      'Capacity': '10kWh',
      'Voltage': '51.2V',
      'Max Discharge': '100A',
      'Weight': '95 kg'
    }
  },
  {
    id: 'p4',
    name: 'SmartCharge 60A MPPT Controller',
    category: 'controllers',
    description: 'High-performance MPPT charge controller for optimized battery charging from solar arrays.',
    image: 'https://picsum.photos/seed/controller1/600/400',
    features: ['99% Tracking efficiency', 'LCD display', 'Multiple battery support', 'Temperature compensation'],
    specs: {
      'Max Current': '60A',
      'System Voltage': '12/24/36/48V',
      'Max PV Input': '150V',
      'Efficiency': '98%'
    }
  },
  {
    id: 'p5',
    name: 'SolarPath 100W Street Light',
    category: 'lighting',
    description: 'All-in-one integrated solar street light with motion sensor and intelligent dimming.',
    image: 'https://picsum.photos/seed/light1/600/400',
    features: ['Integrated design', 'IP66 waterproof', 'Remote control', 'High-brightness LEDs'],
    specs: {
      'Brightness': '12000 Lumens',
      'Battery': 'LiFePO4 42Ah',
      'Panel': '80W Mono',
      'Height': '6-8 meters'
    }
  },
  {
    id: 'p6',
    name: 'AquaSolar 2HP Submersible Pump',
    category: 'pumps',
    description: 'Reliable solar-powered water pump system for agricultural irrigation and livestock.',
    image: 'https://picsum.photos/seed/pump1/600/400',
    features: ['Brushless DC motor', 'Stainless steel body', 'Dry-run protection', 'High head capacity'],
    specs: {
      'Power': '1500W',
      'Max Flow': '15 m³/h',
      'Max Head': '120m',
      'Outlet': '2 inch'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Residential Installation',
    description: 'Custom solar solutions for homes, reducing electricity bills and carbon footprint.',
    icon: 'Home',
    details: ['Site assessment', 'System design', 'Permit handling', 'Professional installation', 'Post-install support'],
    image: 'https://picsum.photos/seed/res-solar/800/600'
  },
  {
    id: 's2',
    title: 'Commercial & Industrial',
    description: 'Large-scale solar systems for businesses to achieve energy independence and sustainability goals.',
    icon: 'Building2',
    details: ['Energy audit', 'ROI analysis', 'MW-scale design', 'Grid integration', 'Project management'],
    image: 'https://picsum.photos/seed/comm-solar/800/600'
  },
  {
    id: 's3',
    title: 'Maintenance & Repair',
    description: 'Regular cleaning, performance monitoring, and rapid repair services to ensure maximum uptime.',
    icon: 'Wrench',
    details: ['Panel cleaning', 'Inverter testing', 'Wiring inspection', 'Performance reports', 'Emergency repairs'],
    image: 'https://picsum.photos/seed/maint-solar/800/600'
  },
  {
    id: 's4',
    title: 'Solar Consultation',
    description: 'Expert advice on system sizing, financial incentives, and technology selection.',
    icon: 'Lightbulb',
    details: ['Feasibility studies', 'Financial modeling', 'Policy guidance', 'Tech comparison', 'Custom roadmaps'],
    image: 'https://picsum.photos/seed/consult-solar/800/600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Green Valley Residential Estate',
    location: 'California, USA',
    type: 'Residential',
    capacity: '250kW Total',
    description: 'Full solar integration for 50 luxury homes, providing 80% energy self-sufficiency.',
    image: 'https://picsum.photos/seed/proj1/800/600',
    year: 2023
  },
  {
    id: 'proj2',
    title: 'TechHub Data Center',
    location: 'Berlin, Germany',
    type: 'Commercial',
    capacity: '1.2MW',
    description: 'Rooftop and facade solar installation powering critical cooling infrastructure.',
    image: 'https://picsum.photos/seed/proj2/800/600',
    year: 2024
  },
  {
    id: 'proj3',
    title: 'Desert Bloom Irrigation',
    location: 'Dubai, UAE',
    type: 'Industrial',
    capacity: '500kW',
    description: 'Solar-powered water pumping system for a 100-hectare organic farm.',
    image: 'https://picsum.photos/seed/proj3/800/600',
    year: 2022
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Switching to solar with SolarTech was the best decision for our family. Our electricity bill dropped by 90%!',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'EcoLogistics',
    content: 'The commercial installation was seamless. Their team handled everything from permits to grid connection.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Operations Manager',
    company: 'SunFarms',
    content: 'The solar water pumps have transformed our irrigation process. Reliability is top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 4
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'How long do solar panels last?',
    answer: 'Most modern solar panels are designed to last 25-30 years. They usually come with a performance warranty guaranteeing at least 80% output after 25 years.',
    category: 'General'
  },
  {
    id: 'f2',
    question: 'Do solar panels work on cloudy days?',
    answer: 'Yes, solar panels can still generate electricity on cloudy days using diffused sunlight, although their efficiency will be lower compared to direct sunlight.',
    category: 'Technical'
  },
  {
    id: 'f3',
    question: 'What is net metering?',
    answer: 'Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid.',
    category: 'Financial'
  }
];
