import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cog, Wrench, Cpu, Factory, Settings, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import partFixturePlates from "@/assets/part-fixture-plates.jpg";
import partShowroomDisplay from "@/assets/part-showroom-display.jpg";
import partGearShaft from "@/assets/part-gear-shaft.jpg";

const services = [
  {
    icon: Cog,
    title: "5-Axis CNC Machining",
    description: "Our advanced 5-axis CNC machining centers enable the production of complex geometries in a single setup, reducing cycle times and improving accuracy.",
    features: [
      "Simultaneous 5-axis contouring",
      "Complex aerospace components",
      "Undercuts and compound angles",
      "Reduced setup time",
      "Improved surface finishes",
    ],
  },
  {
    icon: Wrench,
    title: "Precision CNC Turning",
    description: "High-precision turning for cylindrical parts, featuring thread cutting, grooving, and complex profile machining with exceptional accuracy.",
    features: [
      "Live tooling capabilities",
      "Thread turning (internal & external)",
      "Complex profiles and contours",
      "Bar feeding for production runs",
      "Tight tolerance work",
    ],
  },
  {
    icon: Cpu,
    title: "CNC Milling",
    description: "Versatile 3-axis and 4-axis milling for a wide range of parts, from simple plates to complex multi-feature components.",
    features: [
      "3-axis and 4-axis milling",
      "Large capacity work envelope",
      "Prototype to production",
      "Wide material selection",
      "High-speed machining",
    ],
  },
  {
    icon: Factory,
    title: "Rapid Prototyping",
    description: "Fast turnaround prototyping services to help you validate designs quickly and iterate efficiently before moving to production.",
    features: [
      "Quick quote turnaround",
      "Expedited manufacturing",
      "Design feedback available",
      "Single piece to small batch",
      "Multiple revision support",
    ],
  },
  {
    icon: Settings,
    title: "Production Runs",
    description: "Scalable manufacturing solutions for both short and long production runs, maintaining consistent quality across all parts.",
    features: [
      "Short run flexibility",
      "Long run efficiency",
      "Kanban/JIT delivery",
      "Statistical process control",
      "Repeat order management",
    ],
  },
  {
    icon: Gauge,
    title: "Quality Inspection",
    description: "Comprehensive inspection services to ensure every part meets your specifications and industry requirements.",
    features: [
      "CMM inspection",
      "First article reports",
      "Material certifications",
      "Dimensional reporting",
      "Visual inspection",
    ],
  },
];


const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={partFixturePlates} 
            alt="Precision part" 
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
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive CNC machining services tailored to your needs, from rapid prototypes to high-volume production runs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Banner */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] rounded-xl overflow-hidden border border-border"
            >
              <img src={partFixturePlates} alt="Fixture plates" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[16/9] rounded-xl overflow-hidden border border-border"
            >
              <img src={partShowroomDisplay} alt="Showroom display" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[16/9] rounded-xl overflow-hidden border border-border"
            >
              <img src={partGearShaft} alt="Gear shaft assembly" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Files Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-4">Materials We Work With</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over our 26 years in business, we've machined virtually every material imaginable — from common aluminum and steel alloys to exotic metals like titanium and Inconel, as well as engineering plastics. Whatever your project requires, we have the experience to handle it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-4">File Formats Accepted</h3>
              <p className="text-muted-foreground leading-relaxed">
                We accept all major CAD file formats. Send us your files in whatever format you have — STEP, IGES, SolidWorks, DXF, PDF drawings, or any other format — and we'll take care of the rest.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8">
              Upload your CAD files and receive a detailed quote within 24 hours.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
              <Link to="/quote">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
