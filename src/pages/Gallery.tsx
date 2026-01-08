import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import partBracket from "@/assets/part-bracket.jpg";
import partHousing1 from "@/assets/part-housing-1.jpg";
import partHousing2 from "@/assets/part-housing-2.jpg";
import partPlate1 from "@/assets/part-plate-1.jpg";
import partPlate2 from "@/assets/part-plate-2.jpg";
import partPlate3 from "@/assets/part-plate-3.jpg";
import partDisc from "@/assets/part-disc.jpg";
import partsCollection from "@/assets/parts-collection.jpg";
import haas5Axis from "@/assets/haas-5axis.jpg";
import machiningPart1 from "@/assets/machining-part-1.jpg";
import partEnclosure from "@/assets/part-enclosure.jpg";
import partFinnedRing from "@/assets/part-finned-ring.jpg";
import partHeatsinkBox from "@/assets/part-heatsink-box.jpg";
import partSpindle from "@/assets/part-spindle.jpg";
import partCouplers from "@/assets/part-couplers.jpg";
import partStarWheels from "@/assets/part-star-wheels.jpg";
import partPlasticRing from "@/assets/part-plastic-ring.jpg";
import partTrioDiscs from "@/assets/part-trio-discs.jpg";
import partComplexDisc from "@/assets/part-complex-disc.jpg";
import partSpiralDisc from "@/assets/part-spiral-disc.jpg";

const galleryImages = [
  { src: partFinnedRing, title: "Finned Circular Component" },
  { src: partBracket, title: "Complex 5-Axis Bracket" },
  { src: partEnclosure, title: "Deep Pocket Enclosure" },
  { src: partHeatsinkBox, title: "Finned Heatsink Housing" },
  { src: partHousing1, title: "Precision Housing Assembly" },
  { src: partCouplers, title: "Multi-Feature Couplers" },
  { src: partStarWheels, title: "Star Wheel Components" },
  { src: partPlate2, title: "Aerospace Mounting Plate" },
  { src: partDisc, title: "Multi-Feature Disc" },
  { src: partSpindle, title: "Turned Spindle Component" },
  { src: partPlasticRing, title: "Machined Plastic Ring" },
  { src: partHousing2, title: "Instrument Housing" },
  { src: partTrioDiscs, title: "Precision Disc Set" },
  { src: partComplexDisc, title: "Complex Circular Plate" },
  { src: partSpiralDisc, title: "Spiral Pattern Component" },
  { src: partPlate1, title: "Large Format Plate" },
  { src: partPlate3, title: "Contoured Ring Plate" },
  { src: partsCollection, title: "Production Parts Collection" },
  { src: haas5Axis, title: "5-Axis Machine Work" },
  { src: machiningPart1, title: "Precision Turned Component" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={partFinnedRing} 
            alt="Precision parts" 
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
              Complex prototypes and precision parts we've manufactured. Our specialty is tackling the most difficult projects combining 5-axis milling and precision turning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
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
                    <h3 className="text-lg font-bold">{item.title}</h3>
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
              Have a challenging project? We specialize in the most difficult prototyping work. Share your design files and let's discuss.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8">
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
