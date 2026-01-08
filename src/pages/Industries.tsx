import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Stethoscope, Cpu, Factory, Shield, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
// Unique images for Industries page - no duplicates from other pages
import partEnclosureSet from "@/assets/part-enclosure-set.jpg";
import partAssemblySet from "@/assets/part-assembly-set.jpg";
import partRadialDisc from "@/assets/part-radial-disc.jpg";

const industries = [
  {
    icon: Plane,
    name: "Aerospace & Defense",
    description: "Precision components for aircraft, spacecraft, and defense systems requiring the highest standards of quality and traceability.",
    standards: ["AS9100 capable", "ITAR registered", "Full traceability"],
  },
  {
    icon: Stethoscope,
    name: "Medical & Biotech",
    description: "Life-critical medical device components manufactured with strict adherence to FDA requirements and biocompatibility standards.",
    standards: ["ISO 13485 capable", "FDA compliant", "Clean room compatible"],
  },
  {
    icon: Cpu,
    name: "Semiconductor & Technology",
    description: "Ultra-precision components for semiconductor manufacturing equipment and high-tech electronic systems.",
    standards: ["Clean manufacturing", "Ultra-tight tolerances", "Contamination control"],
  },
  {
    icon: Factory,
    name: "General Manufacturing",
    description: "Versatile machining solutions for industrial equipment, automation systems, and commercial products.",
    standards: ["ISO 9001 capable", "SPC monitoring", "Flexible volumes"],
  },
  {
    icon: Microscope,
    name: "Research & Development",
    description: "Rapid prototyping and short-run production for R&D teams developing next-generation technologies.",
    standards: ["Fast turnaround", "Design feedback", "Iteration support"],
  },
  {
    icon: Shield,
    name: "Energy & Clean Tech",
    description: "Components for renewable energy systems, power generation equipment, and sustainable technology.",
    standards: ["Durability testing", "Environmental compliance", "High reliability"],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={partRadialDisc} 
            alt="Precision machined part" 
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
              Sectors We Serve
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Industries</span> We Serve
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From aerospace and medical to semiconductor and general manufacturing, we deliver precision parts that meet the most demanding industry requirements.
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
              <img src={partRadialDisc} alt="Radial disc" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[16/9] rounded-xl overflow-hidden border border-border"
            >
              <img src={partAssemblySet} alt="Assembly set" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[16/9] rounded-xl overflow-hidden border border-border"
            >
              <img src={partEnclosureSet} alt="Enclosure components" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{industry.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.standards.map((standard) => (
                    <span
                      key={standard}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality That Meets Your Standards</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              We understand that different industries have unique requirements. Our quality management system is designed to meet or exceed the standards required by each sector we serve.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "100%", subtitle: "Inspection Available" },
                { title: "Full", subtitle: "Traceability" },
                { title: "Certified", subtitle: "Materials" },
              ].map((item) => (
                <div key={item.subtitle} className="p-6 bg-background rounded-xl border border-border">
                  <p className="text-3xl font-bold text-gradient mb-2">{item.title}</p>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our precision machining capabilities can support your industry-specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;