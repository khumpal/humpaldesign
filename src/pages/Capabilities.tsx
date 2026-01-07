import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const galleryImages = [
  "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
  "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
];

const capabilities = [
  {
    title: "5-Axis CNC Milling",
    description: "Complex geometries with simultaneous 5-axis positioning using our UMC 750 for aerospace and medical parts.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    title: "Precision Turning",
    description: "Thread turning, complex profiles, and tight tolerances on turned components using Okuma lathes.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    title: "CNC Milling",
    description: "High-precision milling for prototypes and production runs of any size.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Rapid Prototyping",
    description: "Fast turnaround from CAD files to finished parts for quick iteration.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
  },
];

const Capabilities = () => {
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
              Our Equipment
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Capabilities</span> & Equipment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              State-of-the-art CNC equipment including 5-axis milling with UMC 750 and Okuma lathes for precision turning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={cap.image} 
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Precision parts manufactured for aerospace, medical, semiconductor, and industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="aspect-square overflow-hidden rounded-xl border border-border"
              >
                <img 
                  src={image} 
                  alt={`Machined part ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Complex Project?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our engineering team can review your design and provide DFM feedback to optimize manufacturability.
            </p>
            <Button asChild size="lg" className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8">
              <Link to="/quote">
                Submit Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;