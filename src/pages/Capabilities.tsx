import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Target, Maximize, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const equipment = [
  {
    category: "5-Axis Machining Centers",
    machines: [
      { name: "Haas UMC-750SS", specs: "30\" x 20\" x 20\" travel, 15,000 RPM" },
      { name: "Hurco VMX42HSi", specs: "42\" x 24\" x 24\" travel, 12,000 RPM" },
    ],
  },
  {
    category: "CNC Turning Centers",
    machines: [
      { name: "Haas ST-20Y", specs: "Y-axis live tooling, 3\" bar capacity" },
      { name: "Haas DS-30Y", specs: "Dual spindle, Y-axis, sub-spindle" },
    ],
  },
  {
    category: "Vertical Machining Centers",
    machines: [
      { name: "Haas VF-4SS", specs: "50\" x 20\" x 25\" travel, 12,000 RPM" },
      { name: "Haas VF-2SS", specs: "30\" x 16\" x 20\" travel, 12,000 RPM" },
    ],
  },
  {
    category: "Inspection Equipment",
    machines: [
      { name: "CMM", specs: "Coordinate Measuring Machine for precision verification" },
      { name: "Optical Comparator", specs: "Profile and contour verification" },
    ],
  },
];

const tolerances = [
  {
    icon: Ruler,
    title: "Linear Tolerances",
    value: "±0.0005\"",
    description: "Standard machining tolerance for most features",
  },
  {
    icon: Target,
    title: "Precision Tolerances",
    value: "±0.0001\"",
    description: "For critical features requiring highest precision",
  },
  {
    icon: Maximize,
    title: "Surface Finish",
    value: "16 Ra μin",
    description: "Standard finish, finer finishes available on request",
  },
  {
    icon: Layers,
    title: "Positional",
    value: "±0.001\"",
    description: "True position tolerance for hole patterns",
  },
];

const partSizes = [
  {
    type: "Milling",
    max: "50\" x 20\" x 25\"",
    details: "Large envelope for sizeable parts",
  },
  {
    type: "Turning",
    max: "20\" diameter x 24\" length",
    details: "With live tooling capabilities",
  },
  {
    type: "5-Axis",
    max: "30\" x 20\" x 20\"",
    details: "Complex geometry in single setup",
  },
];

const Capabilities = () => {
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
              Our Equipment
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Capabilities</span> & Equipment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              State-of-the-art CNC equipment and decades of expertise to handle your most demanding projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tolerances Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Precision Standards</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meeting the tightest tolerances for aerospace, medical, and semiconductor applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tolerances.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border text-center group hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-gradient mb-2">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Part Size Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Part Size Capacity</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From small precision components to large structural parts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partSizes.map((size, index) => (
              <motion.div
                key={size.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background rounded-2xl border border-border text-center"
              >
                <h3 className="text-2xl font-bold text-gradient mb-4">{size.type}</h3>
                <p className="text-xl font-semibold text-foreground mb-2">{size.max}</p>
                <p className="text-sm text-muted-foreground">{size.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Equipment</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modern CNC machines from industry-leading manufacturers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">{group.category}</h3>
                <div className="space-y-4">
                  {group.machines.map((machine) => (
                    <div key={machine.name} className="p-4 bg-background rounded-lg border border-border">
                      <p className="font-semibold text-foreground mb-1">{machine.name}</p>
                      <p className="text-sm text-muted-foreground">{machine.specs}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50 border-t border-border">
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
