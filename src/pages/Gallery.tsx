import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, Wrench, Cpu, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const galleryItems = [
  {
    title: "Aerospace Bracket",
    category: "Aerospace",
    description: "5-axis machined aluminum bracket for aircraft structural assembly",
    icon: "✈️",
  },
  {
    title: "Medical Implant Housing",
    category: "Medical",
    description: "Titanium housing for implantable medical device with sub-micron tolerances",
    icon: "🏥",
  },
  {
    title: "Semiconductor Fixture",
    category: "Semiconductor",
    description: "Ultra-precision wafer handling component in 6061-T6 aluminum",
    icon: "💾",
  },
  {
    title: "Complex Impeller",
    category: "Industrial",
    description: "5-axis machined stainless steel impeller for pumping application",
    icon: "⚙️",
  },
  {
    title: "Optical Mount",
    category: "Technology",
    description: "Precision aluminum mount for laser alignment system",
    icon: "🔬",
  },
  {
    title: "Surgical Tool",
    category: "Medical",
    description: "Stainless steel surgical instrument with complex geometry",
    icon: "🏥",
  },
  {
    title: "Defense Component",
    category: "Defense",
    description: "ITAR-compliant aluminum component for defense application",
    icon: "🛡️",
  },
  {
    title: "Prototype Assembly",
    category: "R&D",
    description: "Multi-component prototype for product development team",
    icon: "🔧",
  },
  {
    title: "Vacuum Chamber Part",
    category: "Semiconductor",
    description: "Leak-tight stainless component for vacuum system",
    icon: "💾",
  },
];

const categories = ["All", "Aerospace", "Medical", "Semiconductor", "Defense", "Industrial", "Technology", "R&D"];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
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

      {/* Category Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden relative">
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-6xl">{item.icon}</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-medium mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card/50 border-y border-border">
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
