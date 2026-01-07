import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Stethoscope, Cpu, Factory, Shield, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const industries = [
  {
    icon: Plane,
    name: "Aerospace & Defense",
    description: "Precision components for aircraft, spacecraft, and defense systems requiring the highest standards of quality and traceability.",
    applications: [
      "Structural components",
      "Flight control systems",
      "Engine components",
      "Satellite hardware",
      "UAV parts",
      "Military equipment",
    ],
    standards: ["AS9100 capable", "ITAR registered", "Full traceability"],
  },
  {
    icon: Stethoscope,
    name: "Medical & Biotech",
    description: "Life-critical medical device components manufactured with strict adherence to FDA requirements and biocompatibility standards.",
    applications: [
      "Surgical instruments",
      "Implant components",
      "Diagnostic equipment",
      "Laboratory devices",
      "Dental equipment",
      "Prosthetic parts",
    ],
    standards: ["ISO 13485 capable", "FDA compliant", "Clean room compatible"],
  },
  {
    icon: Cpu,
    name: "Semiconductor & Technology",
    description: "Ultra-precision components for semiconductor manufacturing equipment and high-tech electronic systems.",
    applications: [
      "Wafer handling",
      "Process chambers",
      "Test fixtures",
      "Optical systems",
      "Vacuum components",
      "Electronic housings",
    ],
    standards: ["Clean manufacturing", "Ultra-tight tolerances", "Contamination control"],
  },
  {
    icon: Factory,
    name: "General Manufacturing",
    description: "Versatile machining solutions for industrial equipment, automation systems, and commercial products.",
    applications: [
      "Automation components",
      "Robotic parts",
      "Industrial machinery",
      "Tooling & fixtures",
      "Custom equipment",
      "Production parts",
    ],
    standards: ["ISO 9001 capable", "SPC monitoring", "Flexible volumes"],
  },
  {
    icon: Microscope,
    name: "Research & Development",
    description: "Rapid prototyping and short-run production for R&D teams developing next-generation technologies.",
    applications: [
      "Prototype parts",
      "Test fixtures",
      "Lab equipment",
      "Experimental hardware",
      "Research instruments",
      "One-off designs",
    ],
    standards: ["Fast turnaround", "Design feedback", "Iteration support"],
  },
  {
    icon: Shield,
    name: "Energy & Clean Tech",
    description: "Components for renewable energy systems, power generation equipment, and sustainable technology.",
    applications: [
      "Solar equipment",
      "Wind turbine parts",
      "Battery systems",
      "Power electronics",
      "Grid equipment",
      "EV components",
    ],
    standards: ["Durability testing", "Environmental compliance", "High reliability"],
  },
];

const Industries = () => {
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

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{industry.name}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.standards.map((standard) => (
                      <span
                        key={standard}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-8 bg-card rounded-2xl border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xl font-semibold mb-6">Typical Applications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industry.applications.map((app) => (
                      <div key={app} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
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
              <Button asChild size="lg" className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8">
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
