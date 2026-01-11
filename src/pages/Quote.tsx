import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [material, setMaterial] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [timeline, setTimeline] = useState("");
  const [finish, setFinish] = useState("");
  const [formLoadTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: "quote" as const,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      quantity: formData.get("quantity") as string,
      material,
      tolerance,
      timeline,
      finish,
      description: formData.get("description") as string,
      // Honeypot fields for bot detection
      website: formData.get("website") as string,
      _formTime: formLoadTime,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });
    } catch (error: any) {
      console.error("Error sending quote request:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Quote Request Received!</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your interest. Our team will review your project details and get back to you within 24 hours with a detailed quote.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Submit Another Request
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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
              Submit your project details and receive a detailed quote within 24 hours. Our team is ready to help bring your designs to reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="p-8 bg-card rounded-2xl border border-border">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Your Company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(510) 786-1683" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 bg-card rounded-2xl border border-border">
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Input id="quantity" name="quantity" type="number" placeholder="e.g., 100" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="material">Material</Label>
                        <Select value={material} onValueChange={setMaterial}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aluminum-6061">Aluminum 6061</SelectItem>
                            <SelectItem value="aluminum-7075">Aluminum 7075</SelectItem>
                            <SelectItem value="stainless-303">Stainless Steel 303</SelectItem>
                            <SelectItem value="stainless-304">Stainless Steel 304</SelectItem>
                            <SelectItem value="stainless-316">Stainless Steel 316</SelectItem>
                            <SelectItem value="steel-1018">Steel 1018</SelectItem>
                            <SelectItem value="titanium">Titanium</SelectItem>
                            <SelectItem value="brass">Brass</SelectItem>
                            <SelectItem value="delrin">Delrin</SelectItem>
                            <SelectItem value="peek">PEEK</SelectItem>
                            <SelectItem value="other">Other (specify below)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tolerance">Tolerance Requirements</Label>
                        <Select value={tolerance} onValueChange={setTolerance}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select tolerance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard (±0.005")</SelectItem>
                            <SelectItem value="precision">Precision (±0.001")</SelectItem>
                            <SelectItem value="high-precision">High Precision (±0.0005")</SelectItem>
                            <SelectItem value="ultra-precision">Ultra Precision (±0.0001")</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Desired Timeline</Label>
                        <Select value={timeline} onValueChange={setTimeline}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rush">Rush (1-3 days)</SelectItem>
                            <SelectItem value="expedited">Expedited (1 week)</SelectItem>
                            <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="finish">Surface Finish Requirements</Label>
                      <Select value={finish} onValueChange={setFinish}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select surface finish" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="as-machined">As Machined</SelectItem>
                          <SelectItem value="bead-blast">Bead Blast</SelectItem>
                          <SelectItem value="anodize">Anodize</SelectItem>
                          <SelectItem value="powder-coat">Powder Coat</SelectItem>
                          <SelectItem value="chrome">Chrome Plate</SelectItem>
                          <SelectItem value="passivate">Passivate</SelectItem>
                          <SelectItem value="other">Other (specify below)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Please describe your project, including any special requirements, certifications needed, or additional details..."
                        rows={5}
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="files">Upload Files (CAD drawings, specifications)</Label>
                      <label 
                        htmlFor="files"
                        className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer block"
                      >
                        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">
                          Drag and drop files here, or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Accepts: STEP, IGES, DXF, DWG, PDF, SolidWorks (max 50MB)
                        </p>
                        <input
                          id="files"
                          name="files"
                          type="file"
                          multiple
                          accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf,.sldprt,.sldasm,.x_t,.stl"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Honeypot field - hidden from real users */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <Button type="submit" size="lg" disabled={isLoading} className="w-full bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
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
                    { step: "1", text: "Submit your project details and files" },
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
