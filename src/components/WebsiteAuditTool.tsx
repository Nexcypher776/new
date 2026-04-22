import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Info, Zap, Search, ShieldCheck, Smartphone, Target, Layout, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const WebsiteAuditTool = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<null | any>(null);

  const handleAudit = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate audit delay
    setTimeout(() => {
      setAuditResult({
        url: url.replace(/^https?:\/\//, ''),
        performance: 82,
        seo: 74,
        speed: 91,
        health: 88,
        mobile: "Excellent",
        issues: ["Missing meta descriptions on products", "Unoptimized high-res images", "Broken internal links in footer"],
        opportunities: ["Implement AI Search Discovery", "Scale conversion tracking via GTM", "Personalize add-to-cart flows"],
        nextStep: "Book a Strategy Call"
      });
      setIsLoading(false);
    }, 2500);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20">Site Diagnostics</Badge>
          <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
            Analyze Your <br /> <span className="text-accent-blue">Store Performance.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Paste your website link to review key performance signals, technical issues, speed insights, and store optimization opportunities.
          </p>
        </div>

        <div className="relative max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl mb-12">
            <div className="flex-1 flex items-center px-8">
              <Globe className="w-5 h-5 text-text-secondary mr-4" />
              <Input 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your website or store URL..."
                className="bg-transparent border-none text-white placeholder:text-text-secondary focus-visible:ring-0 text-lg h-14"
              />
            </div>
            <Button 
              onClick={handleAudit}
              disabled={isLoading || !url}
              className="bg-white text-black hover:bg-gray-100 rounded-full h-14 px-12 font-black italic uppercase tracking-widest"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
              Analyze My Store
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-24 rounded-[48px] bg-white/[0.02] border border-white/5 border-dashed text-center"
              >
                <div className="inline-flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-accent-blue/10 border-t-accent-blue rounded-full animate-spin" />
                    <Search className="absolute inset-0 m-auto w-8 h-8 text-white/50 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-black italic uppercase tracking-widest text-xl">Crawling Your Infrastructure</p>
                    <p className="text-text-secondary text-sm">Testing performance clusters and SEO signals...</p>
                  </div>
                </div>
              </motion.div>
            )}

            {auditResult && !isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                {/* Header Profile Card */}
                <div className="md:col-span-4 p-8 rounded-[40px] bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                      <Layout className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter lowercase">{auditResult.url}</h3>
                      <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">Active Audit Session</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <ScoreRing value={auditResult.performance} label="Performance" />
                    <ScoreRing value={auditResult.seo} label="SEO" />
                    <ScoreRing value={auditResult.speed} label="Speed" />
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-green-400 mb-6" />
                  <p className="text-text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">Technical Health</p>
                  <p className="text-3xl font-black text-white italic tracking-tighter">{auditResult.health}%</p>
                </div>
                
                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                  <Smartphone className="w-6 h-6 text-accent-blue mb-6" />
                  <p className="text-text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">Mobile Optimized</p>
                  <p className="text-3xl font-black text-white italic tracking-tighter uppercase">{auditResult.mobile}</p>
                </div>

                {/* List Cards */}
                <div className="md:col-span-2 space-y-6">
                   <div className="p-8 rounded-[32px] bg-red-500/5 border border-red-500/10 h-full">
                      <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-red-500/10 inline-block rounded-lg">Critical Fixes</h4>
                      <ul className="space-y-4">
                        {auditResult.issues.map((issue: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                            <Zap className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                   <div className="p-8 rounded-[32px] bg-green-500/5 border border-green-500/10 h-full">
                      <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-green-500/10 inline-block rounded-lg">Growth Opportunities</h4>
                      <ul className="space-y-4">
                        {auditResult.opportunities.map((opp: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                            <Target className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                            {opp}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                {/* Final Action Disclaimer & CTA */}
                <div className="md:col-span-4 p-8 rounded-[40px] bg-accent-blue text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-[10px] text-white/60 bg-white/10 p-3 rounded-xl italic mb-6 w-fit mx-auto md:mx-0">
                      <Info className="w-4 h-4" />
                      Live website analysis requires an enabled audit engine. This preview shows the full interface and reporting layout.
                    </div>
                    <h4 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight">Let Nexcypher Fix These <br /> Issues & Scale Your Store.</h4>
                  </div>
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 h-20 px-12 rounded-full font-black text-2xl italic uppercase tracking-tighter shadow-2xl">
                      Book Full Audit
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!auditResult && !isLoading && (
            <div className="p-24 rounded-[48px] bg-white/[0.01] border border-white/5 border-dashed text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <Globe className="w-10 h-10 text-white/20" />
              </div>
              <p className="text-text-secondary font-bold uppercase tracking-widest text-sm italic">Waiting for storefront target link...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ScoreRing = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle cx="32" cy="32" r="28" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-white/10" />
        <circle cx="32" cy="32" r="28" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray={176} strokeDashoffset={176 - (176 * value) / 100} className="text-accent-blue" />
      </svg>
      <span className="absolute text-sm font-black text-white italic">{value}%</span>
    </div>
    <span className="text-[8px] font-black uppercase tracking-widest text-text-secondary">{label}</span>
  </div>
);
