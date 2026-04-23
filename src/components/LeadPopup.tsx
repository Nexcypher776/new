import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Home, LayoutGrid, User, Mail, Phone, Briefcase, Zap, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { LOGO_URL } from '../constants';
import { useNavigate, Link } from 'react-router-dom';

export const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const navigate = useNavigate();

  const isDoubleOptIn = import.meta.env.VITE_KLAVIYO_DOUBLE_OPT_IN === 'true';

  useEffect(() => {
    // Check if submitted in this session
    const hasSubmitted = sessionStorage.getItem('nexcypher_lead_submitted');
    if (hasSubmitted) {
      setIsSubmitted(true);
    }

    // Check if shown in this session
    const hasShown = sessionStorage.getItem('nexcypher_lead_popup_shown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('nexcypher_lead_popup_shown', 'true');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(false);
    
    if (!window.klaviyo) {
      console.error("Klaviyo script not loaded. Cannot submit lead.");
      setSubmitError(true);
      return;
    }
    
    console.log("Klaviyo script loaded.");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const business = formData.get('business') as string;
    const service = formData.get('service') as string;
    const budget = formData.get('budget') as string;
    const notes = formData.get('notes') as string;

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.error("Invalid email address provided.");
      setSubmitError(true);
      return;
    }

    setIsSubmitting(true);

    const parts = name.trim().split(' ');
    const firstName = parts[0] || '';
    const lastName = parts.length > 1 ? parts.slice(1).join(' ') : '';

    try {
      // 1. Identify User
      await window.klaviyo.push([
        'identify',
        {
          '$email': email,
          '$first_name': firstName,
          '$last_name': lastName,
          '$phone_number': phone,
          'business_name': business,
          'service_needed': service,
          'budget': budget,
          'notes': notes
        }
      ]);
      console.log("Profile identified.");

      // 2. Track Custom Event
      await window.klaviyo.push([
        'track',
        'Lead Submitted',
        {
          service: service,
          budget: budget
        }
      ]);

      // 3. Subscribe to List
      const listId = import.meta.env.VITE_KLAVIYO_LIST_ID;
      const companyId = import.meta.env.VITE_KLAVIYO_COMPANY_ID || 'XYMq3i';

      if (listId) {
        console.log("Subscription request sent.");
        const subscribeRes = await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${companyId}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
            'Revision': '2024-02-15' 
          },
          body: JSON.stringify({
            data: {
              type: 'subscription',
              attributes: { 
                custom_source: 'Popup Form', 
                profile: { 
                  data: { 
                    type: 'profile', 
                    attributes: { 
                      email: email,
                      first_name: firstName,
                      last_name: lastName,
                      phone_number: phone
                    }
                  }
                }
              },
              relationships: {
                list: {
                  data: {
                    type: 'list',
                    id: listId
                  }
                }
              }
            }
          })
        });

        if (!subscribeRes.ok) {
          const errorText = await subscribeRes.text();
          throw new Error(`Subscription API responded with ${subscribeRes.status}: ${errorText}`);
        }
        console.log("Subscription request success.");
      } else {
        console.warn("VITE_KLAVIYO_LIST_ID is missing. Skipped list subscription.");
      }

      // 4. Show success state only after identify and subscribe are processed.
      setIsSubmitted(true);
      sessionStorage.setItem('nexcypher_lead_submitted', 'true');
      
      // Redirect to dedicated thank you page
      setTimeout(() => {
        navigate('/thank-you');
        setIsOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error("Subscription request failed:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 md:p-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                    className="w-20 h-20 bg-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-8 relative group"
                  >
                    <div className="absolute inset-0 bg-accent-blue/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <CheckCircle2 className="w-10 h-10 text-accent-blue relative z-10" />
                  </motion.div>

                  <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    Success
                  </Badge>

                  <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-tight mb-6">
                    Thank You for <br/> <span className="text-accent-blue">Reaching Out</span>
                  </h3>

                  <div className="space-y-4 mb-10 text-sm md:text-base">
                    {isDoubleOptIn ? (
                      <>
                        <p className="text-white font-medium">Your request has been received.</p>
                        <p className="text-accent-blue font-bold text-lg border-y border-white/10 py-3 my-4 inline-block">Please check your email to confirm your subscription.</p>
                      </>
                    ) : (
                      <>
                        <p className="text-white font-medium">Thank you. Your details have been submitted successfully.</p>
                        <p className="text-text-secondary">Our team will get back to you soon.</p>
                      </>
                    )}
                    <p className="text-text-secondary/60 italic text-xs pt-2">
                      Results are built through strategy, structure, and execution. We appreciate your interest in Nexcypher.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link to="/" onClick={() => setIsOpen(false)} className="w-full">
                      <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-2 group">
                        <Home className="w-3.5 h-3.5 text-accent-blue group-hover:scale-110 transition-transform" />
                        Back to Home
                      </Button>
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="w-full">
                      <Button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white h-12 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/10 group">
                        <LayoutGrid className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
                        View Services
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 p-3 mb-6 relative group">
                      <div className="absolute inset-0 bg-accent-blue/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain relative z-10" referrerPolicy="no-referrer" />
                    </div>
                    <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                      Scale Your Brand
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
                      Get Your Free <span className="text-accent-blue">Growth Strategy</span>
                    </h2>
                    <p className="text-text-secondary text-base max-w-md">
                      Join 1,000+ brands that scaled to 7-8 figures with Nexcypher.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <User className="w-3 h-3 text-accent-blue" /> Full Name
                        </label>
                        <Input name="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent-blue/50" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <Mail className="w-3 h-3 text-accent-blue" /> Email Address
                        </label>
                        <Input name="email" type="email" required placeholder="john@brand.com" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent-blue/50" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <Phone className="w-3 h-3 text-accent-blue" /> Phone Number
                        </label>
                        <Input name="phone" required placeholder="+1 (555) 000-0000" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent-blue/50" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <Briefcase className="w-3 h-3 text-accent-blue" /> Business Name
                        </label>
                        <Input name="business" required placeholder="Brand Name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent-blue/50" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <Zap className="w-3 h-3 text-accent-blue" /> Interested Service
                        </label>
                        <select name="service" className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl px-4 text-sm focus:border-accent-blue/50 outline-none appearance-none cursor-pointer">
                          <option value="Shopify Dev" className="bg-black text-white">Shopify Development</option>
                          <option value="Shopify Marketing" className="bg-black text-white">Shopify Marketing</option>
                          <option value="AI Calling Agents" className="bg-black text-white">AI Calling Agents</option>
                          <option value="Full Stack Growth" className="bg-black text-white">Full Stack Growth</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                          <Star className="w-3 h-3 text-accent-blue" /> Budget Range
                        </label>
                        <Input name="budget" placeholder="$2k - $5k" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent-blue/50" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest italic flex items-center gap-2">
                        <MessageSquare className="w-3 h-3 text-accent-blue" /> Any Specific Notes?
                      </label>
                      <Textarea name="notes" placeholder="Current revenue, goals, etc..." className="bg-white/5 border-white/10 text-white min-h-[80px] rounded-xl focus:border-accent-blue/50" />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white h-14 rounded-xl font-black text-lg shadow-xl shadow-accent-blue/20 italic uppercase tracking-tighter"
                    >
                      {isSubmitting ? 'Processing...' : 'Send Strategy Request'}
                    </Button>
                    
                    {submitError && (
                      <div className="text-red-400 text-sm text-center font-medium mt-4 bg-red-500/10 border border-red-500/20 py-2 rounded-lg">
                        We could not complete your signup right now. Please try again.
                      </div>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
