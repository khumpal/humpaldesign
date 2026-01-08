import { motion } from "framer-motion";
import { Award, Users, Target, History } from "lucide-react";
import Layout from "@/components/layout/Layout";
import buildingExterior from "@/assets/building-exterior.jpg";
import partBracket from "@/assets/part-bracket.jpg";
import partsCollection from "@/assets/parts-collection.jpg";

const milestones = [
  { year: "2000", event: "Humpal Design Support founded in Silicon Valley" },
  { year: "2005", event: "Expanded facility and added 5-axis capability" },
  { year: "2010", event: "Achieved ISO 9001 certification" },
  { year: "2015", event: "Major equipment expansion" },
  { year: "2020", event: "Celebrated 20 years with facility upgrade" },
  { year: "2024", event: "Continuing to serve aerospace, medical, and tech industries" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every part we produce meets exact specifications with tolerances as tight as ±0.0001\".",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Rigorous inspection at every stage ensures consistent, reliable results.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with clients to understand their needs and exceed expectations.",
  },
  {
    icon: History,
    title: "Experience",
    description: "26 years of machining expertise applied to every project we undertake.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Humpal Design</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 26 years, Humpal Design Support has been a trusted partner for companies requiring precision CNC machining services in Silicon Valley and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2000 in the heart of Silicon Valley, Humpal Design Support began with a simple mission: to provide the highest quality precision machining services to innovative companies developing cutting-edge products.
                </p>
                <p>
                  Over the past 26 years, we've grown from a small job shop into a full-service CNC machining facility equipped with advanced 5-axis machines, precision turning centers, and the latest inspection equipment.
                </p>
                <p>
                  Today, we serve clients across aerospace, medical devices, semiconductor equipment, and general manufacturing industries. Our reputation for quality, reliability, and on-time delivery has made us a preferred partner for companies ranging from startups to Fortune 500 corporations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden">
                <img 
                  src={partsCollection} 
                  alt="Collection of precision machined parts"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Milestones</h2>
            <p className="text-muted-foreground text-lg">Key moments in our 26-year journey.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-gradient">{milestone.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Silicon Valley Location</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strategically located in the heart of Silicon Valley, we're positioned to serve the Bay Area's thriving tech, medical, and manufacturing industries with quick turnaround times and easy access for local pickups.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Convenient Bay Area location
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Easy freeway access for deliveries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Local pickup available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Nationwide shipping available
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-card rounded-2xl border border-border overflow-hidden"
            >
              <img 
                src={buildingExterior} 
                alt="Humpal Design Support facility exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
