/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ShoppingBag, 
  Megaphone, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Star,
  Menu,
  X,
  ArrowRight,
  Zap,
  ShieldCheck,
  Users,
  Mail,
  Play,
  Trophy,
  Target,
  Lightbulb,
  Award,
  Briefcase,
  Clock,
  Sparkles,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  SERVICES, 
  PRICING, 
  TESTIMONIALS, 
  FAQS,
  VIDEO_TESTIMONIALS,
  SALES_PROOFS,
  NICHE_PROJECTS,
  CASE_STUDIES,
  LOGO_URL
} from './constants';
import { db, OperationType, handleFirestoreError } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// --- Components ---

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`${className} flex items-center justify-center overflow-hidden relative group`}>
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-accent-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {!error ? (
        <img 
          src={LOGO_URL} 
          alt="Nexcypher - Premium Shopify Development and AI Automation Agency Logo" 
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" 
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center shadow-lg shadow-accent-blue/20">
          <Bot className="text-white w-2/3 h-2/3" />
        </div>
      )}
    </div>
  );
};

const TopBanner = () => {
  return (
    <div className="bg-black border-b border-white/5 py-2.5 px-4 text-center relative z-[70]">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="hidden sm:inline">🚀</span>
          Limited Time: Get a Free 15-Min Shopify Growth Audit — 
          <span className="underline cursor-pointer hover:text-white/80 transition-colors">Book Now</span>
        </p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6">
      {/* Top: Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center"
      >
        <Logo className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>

      {/* Bottom: Menu Bar */}
      <div className="max-w-5xl w-full bg-black/80 border border-white/10 h-14 md:h-16 rounded-full grid grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8 relative shadow-2xl backdrop-blur-2xl">
        {/* Left: Mobile Menu Toggle */}
        <div className="flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a href="#about" className="text-xs md:text-sm font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest">About</a>
          <a href="#services" className="text-xs md:text-sm font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest">Services</a>
          <a href="#portfolio" className="text-xs md:text-sm font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest">Portfolio</a>
          <a href="#case-studies" className="text-xs md:text-sm font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest">Case Studies</a>
          <a href="#pricing" className="text-xs md:text-sm font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest">Pricing</a>
        </div>

        {/* Right: CTAs */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost" className="hidden lg:flex text-text-secondary hover:text-white text-[10px] uppercase tracking-widest font-bold">Hire on Fiverr</Button>
          <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-4 md:px-6 h-9 md:h-10 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-accent-blue/20">
            Book a Call
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 glass-card p-6 flex flex-col gap-4 md:hidden z-[100]"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest py-2 border-b border-white/5">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest py-2 border-b border-white/5">Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest py-2 border-b border-white/5">Portfolio</a>
            <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest py-2 border-b border-white/5">Case Studies</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest py-2 border-b border-white/5">Pricing</a>
            <Button className="bg-accent-blue text-white w-full rounded-full h-12 font-bold uppercase tracking-widest mt-2">Book a Call</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBanner />
      <Navbar />
    </header>
  );
};

const StartProjectCTA = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 h-14 rounded-full font-bold shadow-lg shadow-accent-blue/20">
        Start Your Project
      </Button>
      <Button size="lg" variant="outline" className="border-white/10 text-white px-8 h-14 rounded-full hover:bg-white/5">
        Book a Call
      </Button>
      <Button 
        size="lg" 
        variant="ghost" 
        className="text-text-secondary hover:text-white px-8 h-14 rounded-full"
        onClick={() => window.open('https://wa.me/447465616990', '_blank')}
      >
        Chat on WhatsApp
      </Button>
    </div>
  );
};

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Social Proof
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Real Clients. Real Results.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">See what our clients are saying about working with Nexcypher</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group relative cursor-pointer"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="relative aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={`Video testimonial thumbnail for ${video.clientName} - ${video.result}`} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-xl shadow-accent-blue/40 group-hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-md">
                    Verified Client
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{video.clientName}</h3>
                <p className="text-accent-cyan font-bold text-sm tracking-wide uppercase">{video.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-white/10 overflow-hidden">
            <DialogHeader className="p-4 border-b border-white/5">
              <DialogTitle className="text-white">Client Testimonial</DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              {selectedVideo && (
                <iframe
                  src={`https://player.vimeo.com/video/${getVimeoId(selectedVideo)}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="mt-16 flex justify-center">
          <StartProjectCTA />
        </div>
      </div>
    </section>
  );
};

const SalesProofSection = () => {
  return (
    <section className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Proven Results That Speak for Themselves</h2>
          <p className="text-text-secondary text-lg">Real screenshots from Shopify dashboards and ad managers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SALES_PROOFS.map((proof) => (
            <motion.div
              key={proof.id}
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={proof.image} 
                  alt={`Sales proof screenshot: ${proof.title}`} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent-blue text-white border-none shadow-lg">
                    {proof.label}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">{proof.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <StartProjectCTA />
        </div>
      </div>
    </section>
  );
};

const NichePortfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Shopify Dev' | 'Marketing' | 'AI Automation'>('All');
  
  const categories = ['All', 'Shopify Dev', 'Marketing', 'AI Automation'] as const;
  
  const filteredProjects = filter === 'All' 
    ? NICHE_PROJECTS 
    : NICHE_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Projects Across Multiple Niches</h2>
          <p className="text-text-secondary text-lg mb-10">We’ve built and scaled stores in different industries</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-accent-blue border-accent-blue text-white shadow-lg shadow-accent-blue/20' 
                    : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden relative group h-[300px]"
              >
                <img 
                  src={project.image} 
                  alt={`Portfolio project in the ${project.niche} niche - ${project.category}`} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-6 right-6 z-10">
                  <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/20 backdrop-blur-md">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.niche}</h3>
                  <p className="text-sm text-text-secondary mb-6 line-clamp-2">{project.description}</p>
                  <a href="#case-studies">
                    <Button variant="outline" className="w-fit border-white/10 text-white hover:bg-white/5 rounded-full px-6">
                      View Case Study
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <StartProjectCTA />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                About Nexcypher
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                Engineering High-Performance <br />
                <span className="text-gradient">Digital Ecosystems</span> That Scale.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                I'm Chase, Co-founder of Nexcypher Team. At Nexcypher, we don't just build stores; we architect growth. Specializing in premium Shopify development, data-driven marketing, and cutting-edge AI automation, we empower brands to dominate their niche.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Experience', value: '5+ Years', icon: Clock },
                { label: 'Projects', value: '1000+', icon: Briefcase },
                { label: 'Platform', value: 'Fiverr Pro', icon: ShieldCheck },
                { label: 'Expertise', value: 'Multi-Niche', icon: Award },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent-blue mx-auto mb-2 opacity-70" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Conversion-focused Shopify stores',
                'High-performing marketing systems',
                'AI automation for business growth',
                'Fast communication & reliable support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-bold shadow-lg shadow-accent-blue/20 flex items-center gap-2">
                Hire Me on Fiverr
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-14 font-bold flex items-center gap-2"
                onClick={() => window.open('https://wa.me/447465616990', '_blank')}
              >
                Chat on WhatsApp
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative group">
                <img 
                  src="https://imglink.cc/cdn/EKSMSiB2jK.png" 
                  alt="Chase, Co-founder of Nexcypher Team - Professional Portrait" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 glass p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium">Verified</p>
                  <p className="text-sm font-bold text-white">Shopify Expert</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-10 z-20 glass p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium">Specialist</p>
                  <p className="text-sm font-bold text-white">AI Agent Dev</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 right-10 z-20 glass p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium">Top Rated</p>
                  <p className="text-sm font-bold text-white">5+ Years Exp.</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-[48px] blur-2xl -z-10 opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-32 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Deep Dives
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Case Studies</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A detailed look at how we solve complex problems and deliver measurable growth for our clients.
          </p>
        </div>

        <div className="space-y-24">
          {CASE_STUDIES.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-accent-blue/10">
                  <img 
                    src={study.image} 
                    alt={`Case Study: ${study.title} for ${study.client}`} 
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-2">{study.category}</p>
                    <h3 className="text-3xl font-bold text-white">{study.client}</h3>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {study.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent-blue">
                      <Target className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">The Goals</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.goals.map((goal, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent-purple">
                      <Lightbulb className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Our Solution</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.solutions.map((sol, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <Zap className="w-4 h-4 text-accent-purple mt-0.5 shrink-0" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6 text-accent-cyan">
                    <Trophy className="w-6 h-6" />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Measurable Results</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-1">{result.value}</p>
                        <p className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-medium">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full sm:w-fit bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-accent-blue/20">
                  Start Your Success Story
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Build a High-Converting Shopify Store That Actually Sells",
      subtitle: "We combine Shopify, AI automation, and data-driven marketing to scale your business fast",
      ctas: [
        { label: "Get Started Now", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000", // Modern Storefront
      color: "from-blue-900/40 to-black",
      accent: "bg-accent-blue"
    },
    {
      id: 2,
      title: "Shopify Store Design That Converts Visitors Into Buyers",
      subtitle: "From product research to full store setup we build winning stores",
      ctas: [
        { label: "View Portfolio", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
      color: "from-purple-900/40 to-black",
      accent: "bg-accent-purple"
    },
    {
      id: 3,
      title: "AI Agents That Call, Chat, and Close Deals For You",
      subtitle: "Automate your business with smart AI systems that work 24/7",
      ctas: [
        { label: "Explore AI Services", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000", // AI Agent/Robot
      color: "from-cyan-900/40 to-black",
      accent: "bg-accent-cyan"
    },
    {
      id: 4,
      title: "Turn Traffic Into Sales With Powerful Ads",
      subtitle: "Google Ads, Facebook, and TikTok strategies that generate real ROI",
      ctas: [
        { label: "Start Growing", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
      color: "from-orange-900/40 to-black",
      accent: "bg-orange-500"
    },
    {
      id: 5,
      title: "Trusted by 1000+ Clients Worldwide",
      subtitle: "Real results, real growth, real businesses scaled",
      ctas: [
        { label: "See Success Stories", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000",
      color: "from-red-900/40 to-black",
      accent: "bg-red-500"
    },
    {
      id: 6,
      title: "We Have Built Stores Across Multiple Niches",
      subtitle: "Pet, Fashion, Tech, Home Decor, Beauty, and More",
      ctas: [
        { label: "Browse Niches", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000",
      color: "from-green-900/40 to-black",
      accent: "bg-green-500"
    },
    {
      id: 7,
      title: "Ready to Scale Your Business?",
      subtitle: "Let us build, automate, and grow your brand together",
      ctas: [
        { label: "Book a Free Consultation", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000",
      color: "from-yellow-900/40 to-black",
      accent: "bg-yellow-500"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-background mt-[220px] md:mt-[280px] bg-gradient-to-br from-background via-accent-blue/5 to-background animate-gradient-shift"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              key={`img-${current}`}
              initial={{ opacity: 0, y: 30, scale: 1.1 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              src={slides[current].image} 
              alt={`Hero background: ${slides[current].title} - Scaling your business with Nexcypher`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} backdrop-blur-[2px]`} />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Side: Text */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <Logo className="w-16 h-16 md:w-20 md:h-20" />
                  <div className={`w-12 h-1 ${slides[current].accent} rounded-full`} />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-xl">
                  {slides[current].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  {slides[current].ctas.map((cta, idx) => (
                    <Button 
                      key={idx}
                      size="lg"
                      className={`h-14 px-8 rounded-full text-lg font-bold transition-all duration-300 ${
                        cta.primary 
                          ? `${slides[current].accent} hover:opacity-90 text-white shadow-xl shadow-black/20` 
                          : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                      }`}
                    >
                      {cta.label}
                      {cta.primary && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* Right Side: Image Illustration */}
              <motion.div
                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hidden lg:block relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                  <img 
                    src={slides[current].image} 
                    alt={`Hero slide: ${slides[current].title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating UI Elements for futuristic feel */}
                  <div className="absolute top-4 right-4 glass p-3 rounded-2xl border border-white/20 animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">Live Performance</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 glass p-4 rounded-2xl border border-white/20 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${slides[current].accent} rounded-xl flex items-center justify-center`}>
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Growth Rate</p>
                        <p className="text-lg font-bold text-white">+340%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow behind image */}
                <div className={`absolute -inset-4 ${slides[current].accent} opacity-20 blur-3xl rounded-full -z-10`} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-6 flex items-center z-20">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-6 flex items-center z-20">
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            animate={current === idx ? {
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 12px rgba(255,255,255,0.6)",
                "0 0 0px rgba(255,255,255,0)"
              ],
              scale: [1, 1.05, 1]
            } : { 
              boxShadow: "0 0 0px rgba(255,255,255,0)",
              scale: 1 
            }}
            transition={current === idx ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            } : { duration: 0.3 }}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              current === idx ? `w-12 ${slides[current].accent}` : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [loadingCard, setLoadingCard] = useState<number | null>(null);

  const handleHover = (id: number) => {
    setHoveredCard(id);
    setLoadingCard(id);
    setTimeout(() => setLoadingCard(null), 800);
  };

  const images = [
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000", // Clear Storefront for Shopify Experts
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2000", // Scale Your Brand Storefront
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000", // Futuristic AI Agent Illustration
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000"
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 relative z-10">
        {/* Section 1: Shopify Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => setHoveredCard(null)}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card overflow-hidden relative group h-[500px] flex flex-col justify-end p-8"
        >
          <AnimatePresence>
            {loadingCard === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-sm"
              >
                <Loader2 className="w-10 h-10 text-accent-blue animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
          <img 
            src={images[0]} 
            alt="Modern Shopify storefront showcasing premium design and layout" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-4">
              <ShoppingBag className="text-accent-blue w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Shopify Experts</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Premium storefronts designed for high conversion and seamless user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-accent-cyan font-bold uppercase tracking-widest border border-white/5">Development</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-accent-cyan font-bold uppercase tracking-widest border border-white/5">Design</span>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Main Brand Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => setHoveredCard(null)}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-1 glass-card overflow-hidden relative group h-[500px] flex flex-col justify-center items-center p-12 text-center border-accent-blue/30"
        >
          <AnimatePresence>
            {loadingCard === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-sm"
              >
                <Loader2 className="w-10 h-10 text-accent-blue animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
          <img 
            src={images[1]} 
            alt="Ecommerce growth visualization representing scaling a Shopify brand" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Megaphone className="text-accent-blue w-6 h-6" />
            </div>
            <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              5+ Years of Excellence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-none">
              Scale Your <br />
              <span className="text-gradient">Shopify Brand.</span>
            </h1>
            <p className="text-base text-text-secondary max-w-sm mb-8 leading-relaxed mx-auto">
              Premium storefronts and AI-driven marketing systems that scaled 1000+ brands.
            </p>
            <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 h-14 text-base rounded-full shadow-xl shadow-accent-blue/20 group w-full">
              Start Scaling <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Section 3: AI & Marketing Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => setHoveredCard(null)}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card overflow-hidden relative group h-[500px] flex flex-col justify-end p-8"
        >
          <AnimatePresence>
            {loadingCard === 3 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-sm"
              >
                <Loader2 className="w-10 h-10 text-accent-purple animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
          <img 
            src={images[2]} 
            alt="Futuristic AI agent interface representing automated business systems" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-4">
              <Bot className="text-accent-purple w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">AI Automation</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Custom AI agents that handle sales and support 24/7, boosting ROI by 40%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-accent-purple font-bold uppercase tracking-widest border border-white/5">AI Agents</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-accent-purple font-bold uppercase tracking-widest border border-white/5">Marketing</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto mt-8 relative z-10">
        <div className="glass-card p-6 flex flex-wrap items-center justify-between gap-6 px-12">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
              <span className="text-white font-bold text-sm">5.0</span>
              <span className="text-text-secondary text-xs">Fiverr Pro</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Users className="text-accent-blue w-4 h-4" />
              <span className="text-white font-bold text-sm">1000+</span>
              <span className="text-text-secondary text-xs">Projects</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Starting From</span>
            {PRICING.slice(0, 3).map(plan => (
              <div key={plan.name} className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{plan.name}</span>
                <span className="text-accent-cyan font-bold text-xs">{plan.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const iconMap: Record<string, any> = {
    ShoppingBag,
    Megaphone,
    Bot
  };

  return (
    <section className="py-24 bg-background relative lg:hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Comprehensive solutions designed to dominate the e-commerce landscape.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card group h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-accent-blue w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-accent-blue hover:text-accent-blue/80 hover:bg-accent-blue/10 group rounded-xl h-12">
                      {service.cta}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-text-secondary">Choose the plan that fits your current stage of growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`glass-card relative overflow-hidden h-full flex flex-col transition-all duration-500 hover:border-accent-blue/50 ${plan.recommended ? 'border-accent-blue/50 shadow-2xl shadow-accent-blue/10 scale-[1.02] z-10' : ''}`}>
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-accent-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-text-secondary text-sm leading-relaxed">{plan.description}</CardDescription>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-text-secondary text-sm">/project</span>}
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8">
                  <Button className={`w-full h-14 rounded-xl font-bold transition-all duration-300 text-lg ${plan.recommended ? 'bg-accent-blue hover:bg-accent-blue/90 text-white shadow-lg shadow-accent-blue/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    const leadData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      businessType: formData.get('businessType') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
      source: 'form' as const,
      createdAt: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'leads'), leadData);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale?</h2>
          <p className="text-text-secondary text-lg mb-8">
            Fill out the form and our team will get back to you within 24 hours with a custom strategy for your brand.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                <Mail className="text-accent-blue w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Email us at</p>
                <p className="text-white font-medium">hello@nexcypher.us</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="text-green-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">WhatsApp</p>
                <p className="text-white font-medium">+44 7465 616990</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="glass-card p-8 border-accent-blue/10">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-green-500 w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-text-secondary text-lg">We'll be in touch within 24 hours.</p>
              <Button variant="link" className="mt-6 text-accent-blue" onClick={() => setIsSuccess(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                  <Input name="name" required placeholder="John Doe" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <Input name="email" type="email" required placeholder="john@example.com" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Business Type</label>
                  <Input name="businessType" placeholder="E-commerce" className="bg-white/[0.02] border-white/5 text-white h-12 rounded-xl focus:border-accent-blue/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Budget Range</label>
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
        </Card>
      </div>
    </section>
  );
};

const FiverrProfileSection = () => {
  const fiverrUrl = "https://www.fiverr.com/nexcypher_us";
  
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1dbf73]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.01, 
            y: -8,
            transition: { type: "spring", stiffness: 400, damping: 17 } 
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-16 relative overflow-hidden border-[#1dbf73]/20 shadow-2xl shadow-[#1dbf73]/5 cursor-default"
        >
          {/* Fiverr Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1dbf73] to-transparent opacity-50" />
          
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-[#1dbf73] to-accent-blue shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-white/5 flex items-center justify-center p-4">
                  <img 
                    src={LOGO_URL} 
                    alt="Chase - Nexcypher Official Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#1dbf73] p-2 rounded-full shadow-lg border-2 border-background">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Name & Bio */}
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">Chase</h3>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#1dbf73] text-[#1dbf73]" />
                ))}
                <span className="ml-2 text-white/60 text-sm font-bold uppercase tracking-widest">5.0 Rating</span>
              </div>
              <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
                Helping businesses build high-converting Shopify stores, AI agents, and scalable marketing systems
              </p>
            </div>

            {/* Headline & Subheadline */}
            <div className="mb-12">
              <Badge className="mb-6 bg-[#1dbf73]/10 text-[#1dbf73] border-[#1dbf73]/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                Fiverr Pro Status
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">
                Hire Me on <span className="text-[#1dbf73]">Fiverr</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                Work directly with a Shopify expert, AI automation specialist, and digital marketing strategist
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
              {[
                { icon: Clock, label: "5+ Years Experience", color: "text-blue-400" },
                { icon: Users, label: "1000+ Client Reviews", color: "text-[#1dbf73]" },
                { icon: Trophy, label: "Proven Results", color: "text-amber-400" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <span className="text-white font-bold text-sm uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center w-full">
              <Button 
                onClick={() => window.open(fiverrUrl, '_blank')}
                size="lg" 
                className="bg-[#1dbf73] hover:bg-[#1dbf73]/90 text-white rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-[#1dbf73]/20 group transition-all"
              >
                Contact Me Now
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => window.open(fiverrUrl, '_blank')}
                size="lg" 
                variant="outline" 
                className="border-white/10 text-white hover:bg-white/5 rounded-full px-12 h-16 text-xl font-bold backdrop-blur-md"
              >
                Hire Me on Fiverr
              </Button>
            </div>
          </div>

          {/* Decorative Corner Glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#1dbf73]/10 rounded-full blur-[60px]" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-blue/10 rounded-full blur-[60px]" />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Logo className="w-14 h-14" />
            <span className="text-3xl font-bold tracking-tighter text-white">Nexcypher</span>
          </div>
          <p className="text-text-secondary text-lg max-w-sm mb-10 leading-relaxed">
            Premium Shopify development and marketing agency. We build high-converting stores and intelligent AI agents to scale your business.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/447465616990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-accent-blue transition-colors">Shopify Development</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Dropshipping Setup</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">AI Agent Solutions</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Digital Marketing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-text-secondary text-sm">
            <li><a href="#" className="hover:text-accent-blue transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Portfolio</a></li>
            <li><a href="https://www.fiverr.com/nexcypher_us" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">Fiverr Profile</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-text-secondary text-xs">
        © {new Date().getFullYear()} Nexcypher. All rights reserved. Built for high performance.
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-accent-blue/30">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent-blue origin-left z-[80]" style={{ scaleX }} />
      
      <Header />
      
      <main>
        <HeroSlider />
        <Hero />
        <AboutSection />
        <section id="stats" className="py-12 border-y border-white/5 bg-white/5 lg:hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">1000+</p>
              <p className="text-text-secondary text-sm uppercase tracking-widest">Projects</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">5+</p>
              <p className="text-text-secondary text-sm uppercase tracking-widest">Years</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
              <p className="text-text-secondary text-sm uppercase tracking-widest">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
              <p className="text-text-secondary text-sm uppercase tracking-widest">AI Support</p>
            </div>
          </div>
        </section>

        <Services />

        {/* Banner 2: Trusted By */}
        <section className="py-16 border-y border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-text-secondary text-xs uppercase tracking-[0.3em] mb-12 font-bold">Trusted by 1000+ Global Brands</p>
            
            <div className="relative">
              {/* Gradient Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex overflow-hidden">
                <motion.div 
                  animate={{ x: [0, -1920] }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
                >
                  {[
                    { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com' },
                    { name: 'Fiverr', url: 'https://logo.clearbit.com/fiverr.com' },
                    { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
                    { name: 'Meta', url: 'https://logo.clearbit.com/meta.com' },
                    { name: 'TikTok', url: 'https://logo.clearbit.com/tiktok.com' },
                    { name: 'Klaviyo', url: 'https://logo.clearbit.com/klaviyo.com' },
                    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
                    { name: 'Stripe', url: 'https://logo.clearbit.com/stripe.com' },
                    // Duplicate for seamless loop
                    { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com' },
                    { name: 'Fiverr', url: 'https://logo.clearbit.com/fiverr.com' },
                    { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
                    { name: 'Meta', url: 'https://logo.clearbit.com/meta.com' },
                    { name: 'TikTok', url: 'https://logo.clearbit.com/tiktok.com' },
                    { name: 'Klaviyo', url: 'https://logo.clearbit.com/klaviyo.com' },
                    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
                    { name: 'Stripe', url: 'https://logo.clearbit.com/stripe.com' },
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center w-32 md:w-48 h-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                      <img 
                        src={brand.url} 
                        alt={`${brand.name} official logo - Trusted partner`} 
                        className="max-w-full max-h-full object-contain brightness-0 invert"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <NichePortfolio />
        <CaseStudiesSection />
        <SalesProofSection />
        <VideoTestimonials />
        
        {/* Banner 3: Process */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Audit', desc: 'Deep analysis of your current store.' },
                { step: '02', title: 'Strategy', desc: 'Custom growth roadmap for your brand.' },
                { step: '03', title: 'Build', desc: 'High-converting design & AI integration.' },
                { step: '04', title: 'Scale', desc: 'Aggressive marketing & optimization.' }
              ].map((item) => (
                <div key={item.step} className="glass-card p-8 group hover:border-accent-blue/50 transition-all">
                  <span className="text-4xl font-black text-accent-blue/20 group-hover:text-accent-blue/40 transition-colors mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-accent-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Limited Availability
            </Badge>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
              Stop Leaving Money <br className="hidden md:block" /> on the Table.
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Our AI-powered Shopify ecosystems are designed to convert every visitor into a loyal customer. Scale your brand with precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-black/20">
                Get a Free Audit
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-12 h-16 text-xl font-bold">
                Book a Call
              </Button>
            </div>
          </div>
        </section>

        <Pricing />

        <section id="faq" className="py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Common Questions</h2>
              <p className="text-text-secondary text-lg">Everything you need to know about working with Nexcypher.</p>
            </div>
            <div className="glass-card p-8 md:p-12">
              <Accordion className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/5 py-2">
                    <AccordionTrigger className="text-white hover:text-accent-blue text-lg font-bold text-left transition-colors">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-text-secondary text-base leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <LeadForm />
        <FiverrProfileSection />

        {/* Banner 6: Newsletter */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-white mb-2">Join the Growth Circle</h2>
                <p className="text-text-secondary">Get exclusive Shopify scaling tips and AI insights delivered weekly.</p>
              </div>
              <div className="flex w-full md:w-auto gap-3">
                <Input placeholder="Enter your email" className="bg-white/[0.02] border-white/10 text-white h-14 md:w-80" />
                <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 h-14 font-bold rounded-xl">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
