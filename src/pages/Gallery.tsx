import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    title: "5-Axis Machined Component",
    category: "Aerospace",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    title: "Precision Medical Part",
    category: "Medical",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    title: "CNC Turned Component",
    category: "Industrial",
  },
  {
    src: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
    title: "Semiconductor Fixture",
    category: "Semiconductor",
  },
  {
    src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    title: "Complex Geometry Part",
    category: "Aerospace",
  },
  {
    src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
    title: "Prototype Assembly",
    category: "R&D",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Aluminum Housing",
    category: "Industrial",
  },
  {
    src: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=800&q=80",
    title: "Stainless Steel Component",
    category: "Medical",
  },
  {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    title: "Defense Component",
    category: "Defense",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    title: "Titanium Part",
    category: "Aerospace",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    title: "Optical Mount",
    category: "Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    title: "Production Run Parts",
    category: "Industrial",
  },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80" 
            alt="CNC Machining" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Project <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of precision parts we've manufactured across various industries and applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-medium mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">26 Years of Precision Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every part we produce reflects our commitment to quality and precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Industries Served" },
              { number: "1M+", label: "Parts Produced" },
              { number: "99.9%", label: "Quality Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind? Share your design files with us and let's discuss how we can bring your ideas to life.
            </p>
            <Button asChild size="lg" className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8">
              <Link to="/quote">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;