import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag, Megaphone, Bot, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
      source: 'website_contact_form'
    };

    try {
      const response = await fetch('/api/klaviyo/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Klaviyo submission failed');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Project Inquiry
          </Badge>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Ready to Scale?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you with a custom strategy within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: ShoppingBag, title: "Premium Shopify", desc: "Custom themes & complex migrations." },
                { icon: Bot, title: "AI Automation", desc: "Voice agents & automated workflows." },
                { icon: Megaphone, title: "Aggressive Ads", desc: "ROAS focused campaigns on all platforms." },
                { icon: TrendingUp, title: "Growth CRO", desc: "Data-driven conversion optimization." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-blue">
                    <item.icon className="w-5 h-5 pointer-events-none" />
                  </div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-blue">
                  <img src="https://imglink.cc/cdn/EKSMSiB2jK.png" alt="Chase" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">Direct Support</p>
                  <p className="text-xs text-text-secondary">Message us directly on WhatsApp</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full h-14 rounded-2xl border-white/10 text-white hover:bg-white/5 font-bold"
                onClick={() => window.open('https://wa.me/447465616990', '_blank')}
              >
                Chat with Chase
              </Button>
            </div>
          </div>

          <Card className="glass-card p-4 sm:p-10 border-white/5 relative bg-white/[0.03]">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Message Received!</h3>
                  <p className="text-text-secondary">Chase or a team member will reach out to you within the next 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="ghost" className="text-accent-blue mt-8">Send another message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                      <Input name="name" required placeholder="John Doe" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                      <Input name="email" type="email" required placeholder="john@example.com" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Budget Range</label>
                    <div className="relative">
                      <Input name="budget" placeholder="$2k - $5k" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message</label>
                    <Textarea name="message" placeholder="Tell us about your project..." className="bg-white/[0.02] border-white/5 text-white min-h-[120px] rounded-xl focus:border-accent-blue/50 transition-colors" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-accent-blue/20">
                    {isSubmitting ? 'Sending...' : 'Send Strategy Request'}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
};
