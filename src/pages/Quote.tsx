import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const QUOTE_MAILTO =
  "mailto:karan@humpaldesign.com?subject=Quote%20Request";

const Quote = () => {
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
              Get Started
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request a <span className="text-gradient">Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Email us your project details and receive a detailed quote within 24 hours. Our team is ready to help bring your designs to reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-12 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Email Us Your Project</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Send us your part details — quantity, material, tolerances, timeline, surface finish — and attach any
                  CAD drawings or specifications (STEP, IGES, DXF, DWG, PDF, SolidWorks). We'll review and reply with a
                  detailed quote within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold"
                  >
                    <a href={QUOTE_MAILTO}>
                      <Mail className="mr-2 w-5 h-5" />
                      Email Us for a Quote
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+15107861683">
                      <Phone className="mr-2 w-5 h-5" />
                      (510) 786-1683
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Or email us directly at{" "}
                  <a href={QUOTE_MAILTO} className="text-primary hover:underline">
                    karan@humpaldesign.com
                  </a>
                </p>
              </div>
            </motion.div>


            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* What to Expect */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    { step: "1", text: "Email your project details and files" },
                    { step: "2", text: "Our team reviews within 24 hours" },
                    { step: "3", text: "Receive detailed quote with pricing" },
                    { step: "4", text: "Approve and we start production" },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        {item.step}
                      </span>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6">Need it Faster?</h3>
                <p className="text-muted-foreground mb-6">
                  For urgent projects or quick questions, give us a call directly.
                </p>
                <a
                  href="tel:+15107861683"
                  className="block w-full p-4 bg-primary/10 rounded-lg text-center text-primary font-semibold hover:bg-primary/20 transition-colors"
                >
                  (510) 786-1683
                </a>
              </div>

              {/* File Formats */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6">Accepted File Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {["STEP", "IGES", "DXF", "DWG", "PDF", "SolidWorks", "Parasolid", "STL"].map((format) => (
                    <span key={format} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
