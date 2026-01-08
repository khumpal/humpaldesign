import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
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
// New batch of complex parts
import partComplexContour1 from "@/assets/part-complex-contour-1.jpg";
import partComplexContour2 from "@/assets/part-complex-contour-2.jpg";
import partTurnedHousings from "@/assets/part-turned-housings.jpg";
import partSpokedWheel from "@/assets/part-spoked-wheel.jpg";
import partAssemblySet from "@/assets/part-assembly-set.jpg";
import partPlasticRings from "@/assets/part-plastic-rings.jpg";
import partTurbineDisc from "@/assets/part-turbine-disc.jpg";
import partCurvedBrackets from "@/assets/part-curved-brackets.jpg";
import partGearRing from "@/assets/part-gear-ring.jpg";
import partSpokedDisc from "@/assets/part-spoked-disc.jpg";
// More complex parts
import partRadialDisc from "@/assets/part-radial-disc.jpg";
import partThreadedSpindle from "@/assets/part-threaded-spindle.jpg";
import partFlangesArray from "@/assets/part-flanges-array.jpg";
import partEnclosureSet from "@/assets/part-enclosure-set.jpg";
import partWheelHubs from "@/assets/part-wheel-hubs.jpg";
import part1725 from "@/assets/part-1725.jpg";
import part1735 from "@/assets/part-1735.jpg";
import part1836 from "@/assets/part-1836.jpg";
import part1982 from "@/assets/part-1982.jpg";
// Final batch of complex parts
import part2495 from "@/assets/part-2495.jpg";
import part2499 from "@/assets/part-2499.jpg";
import part2501 from "@/assets/part-2501.jpg";
import part2510 from "@/assets/part-2510.jpg";
import part2759 from "@/assets/part-2759.jpg";
import part2855 from "@/assets/part-2855.jpg";
import part1820 from "@/assets/part-1820.jpg";
// Gallery - shuffled for variety
const galleryImages = [
  part5axisDisc,
  partTurnedHousings,
  part2759,
  partSpiralDisc,
  partFinnedRing,
  part1836,
  partShowroomDisplay,
  partCouplers,
  partComplexContour1,
  part2495,
  partSpindle,
  partGearRing,
  partImpellerTurning,
  partPlate2,
  part1725,
  partEnclosureSet,
  partSpokedWheel,
  partAnodizedTube,
  part2510,
  partCurvedBrackets,
  partHousing1,
  partTurbineDisc,
  part1735,
  partAluminumFrames,
  partBracket,
  part2499,
  partSpokedDisc,
  partPlasticRings,
  part5axisRotary,
  partRadialDisc,
  part1982,
  partComplexContour2,
  partStarWheels,
  partFlangesArray,
  partHeatsinkBox,
  part2501,
  partWheelHubs,
  partTrioDiscs,
  partAssemblySet,
  partEnclosure,
  partThreadedSpindle,
  partDisc,
  part2855,
  partHousing2,
  partComplexDisc,
  partPlate1,
  part1820,
  partPlasticRing,
  partsCollection,
  partPlate3,
];

const testimonials = [
  {
    name: "Michael Regalbuto",
    text: "It has been my pleasure to work with Raj for over three years. The quality of his work is excellent, his prices are fair, and he makes his delivery commitments. I trust Raj to be able to manufacture my most complicated designs. I appreciate his calls and visits to make sure the parts he makes work as expected.",
    rating: 5,
  },
  {
    name: "Lawson Fisher",
    title: "VP Manufacturing, NovaTorque",
    text: "I have been using Humpal Design for over 10 years. Consistently the highest quality parts delivered on time, even on very complex parts. Humpal stands by their work.",
    rating: 5,
  },
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

      {/* Testimonials Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground">5.0 Rating</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="https://www.manta.com/c/mmbq285/humpal-design-support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              See more reviews on Manta
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
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
