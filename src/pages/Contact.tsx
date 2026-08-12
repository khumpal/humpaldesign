import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";


const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(510) 786-1683",
    link: "tel:+15107861683",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@humpaldesign.com",
    link: "mailto:info@humpaldesign.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "3338 Arden Road, Hayward CA, 94544",
    link: "https://www.google.com/maps/search/?api=1&query=3338+Arden+Road+Hayward+CA+94544",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 7AM - 5PM PST",
    link: null,
  },
];

const CONTACT_MAILTO = "mailto:karan@humpaldesign.com?subject=Website%20Inquiry";

const Contact = () => {


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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Contact</span> Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question or need more information? We're here to help. Reach out to our team and we'll get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="aspect-video bg-card rounded-2xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.234567890123!2d-122.0838!3d37.6347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9321c3aab4a1%3A0x1234567890abcdef!2s3338%20Arden%20Rd%2C%20Hayward%2C%20CA%2094544!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Humpal Design Support Location"
                />
              </div>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-8 md:p-10 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Email us with your question or project details and our team will get back to you as soon as possible.
                  Feel free to attach drawings or specifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold"
                  >
                    <a href={CONTACT_MAILTO}>
                      <Mail className="mr-2 w-5 h-5" />
                      Email Us
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
                  Or reach us directly at{" "}
                  <a href={CONTACT_MAILTO} className="text-primary hover:underline">
                    karan@humpaldesign.com
                  </a>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
