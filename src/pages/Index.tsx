import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBackground from "@/assets/hero-background.gif";
import part1983 from "@/assets/part-1983.jpg";
import part2495 from "@/assets/part-2495.jpg";
import part2499 from "@/assets/part-2499.jpg";
import part2501 from "@/assets/part-2501.jpg";
import part2510 from "@/assets/part-2510.jpg";
import part2855 from "@/assets/part-2855.jpg";
import part1820 from "@/assets/part-1820.jpg";
import partSpindle from "@/assets/part-spindle.jpg";
import partFinnedRing from "@/assets/part-finned-ring.jpg";


const industries = [
  { name: "Aerospace & Defense", icon: "✈️" },
  { name: "Medical & Biotech", icon: "🏥" },
  { name: "Semiconductor", icon: "💾" },
  { name: "General Manufacturing", icon: "⚙️" },
];

const galleryImages = [
  part1983,
  part2495,
  part2499,
  part2501,
  part2510,
  part2855,
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with GIF Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="CNC Machining" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Silicon Valley's Trusted CNC Partner Since 2000
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">26 Years of</span>
              <br />
              <span className="text-gradient">Precision Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              Specializing in complex 5-axis milling and precision turning for aerospace, medical, semiconductor, and advanced manufacturing industries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/capabilities">View Capabilities</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Photo Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complex prototypes and precision parts manufactured for the most demanding industries.
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
                className="aspect-square overflow-hidden rounded-xl border border-border group"
              >
                <img 
                  src={image} 
                  alt={`Precision machined part ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From aerospace components to medical devices, we deliver precision parts that meet the most stringent requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border"
                  >
                    <span className="text-2xl">{industry.icon}</span>
                    <span className="text-sm font-medium text-foreground">{industry.name}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="mt-8 bg-gradient-primary hover:opacity-90">
                <Link to="/industries">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border border-border">
                <img 
                  src={part1820} 
                  alt="Precision machined part" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Humpal Design?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Decades of machining expertise combined with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "26 Years Experience",
                description: "Established in 2000, we bring decades of precision machining expertise to every project.",
                image: partSpindle,
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Rapid prototyping capabilities with quick quotes and expedited production options.",
                image: partFinnedRing,
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Rigorous inspection processes ensure every part meets your exact specifications.",
                image: part2510,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={part2495} 
            alt="Precision machined parts" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get a quote within 24 hours. Upload your CAD files and let our team provide a detailed estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
