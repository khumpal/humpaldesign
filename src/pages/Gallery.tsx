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
// New complex parts - 5-axis, turning, different materials
import partImpellerTurning from "@/assets/part-impeller-turning.jpg";
import part5axisDisc from "@/assets/part-5axis-disc.jpg";
import partAnodizedTube from "@/assets/part-anodized-tube.jpg";
import partShowroomDisplay from "@/assets/part-showroom-display.jpg";
import part5axisRotary from "@/assets/part-5axis-rotary.jpg";


import partAluminumFrames from "@/assets/part-aluminum-frames.jpg";

// Gallery ordered: most complex first, mix of 5-axis, turning, different materials
const galleryImages = [
  // Most complex 5-axis + turning combos first
  partImpellerTurning,      // Large impeller - turning + 5-axis combo
  part5axisDisc,            // Complex disc on 5-axis
  partShowroomDisplay,      // Showroom with copper plate + variety
  partAnodizedTube,         // Anodized turned housing
  part5axisRotary,          // 5-axis rotary bracket
  partSpindle,              // Turned spindle
  partFinnedRing,           // Finned turned component
  
  
  partAluminumFrames,       // Aluminum frame assemblies
  partBracket,              // Complex bracket
  partEnclosure,            // Deep pocket enclosure
  partHeatsinkBox,          // Finned heatsink
  partHousing1,             // Housing assembly
  partCouplers,             // Couplers
  partStarWheels,           // Star wheels
  partPlate2,               // Mounting plate
  partDisc,                 // Multi-feature disc
  partPlasticRing,          // Plastic - different material
  partHousing2,             // Instrument housing
  partTrioDiscs,            // Disc set
  partComplexDisc,          // Circular plate
  partSpiralDisc,           // Spiral pattern
  partPlate1,               // Large plate
  partPlate3,               // Contoured ring
  partsCollection,          // Collection
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={partImpellerTurning} 
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
            <p className="text-sm text-muted-foreground/70 mt-4 italic">
              Note: All parts displayed are shown with customer clearance. We have produced work for many additional companies whose parts remain confidential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden">
                  <img 
                    src={src} 
                    alt="Precision machined part"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
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
