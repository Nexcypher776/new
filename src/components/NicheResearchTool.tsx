import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, TrendingUp, Users, Target, Rocket, DollarSign, Lightbulb, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const NicheResearchTool = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<null | any>(null);

  const handleAnalyze = () => {
    if (!query) return;
    setIsLoading(true);
    // Simulate analysis delay
    setTimeout(() => {
      setReport({
        niche: query,
        score: 85,
        demand: "High",
        competition: "Medium-High",
        angle: "Focus on AI-driven personalization and premium sustainable sourcing.",
        positioning: "Eco-conscious luxury tech integrator",
        monetization: "Subscription SaaS + Direct High-Ticket Consultation",
        nextStep: "Book a Deep-Dive Scale Strategy Call"
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20">Market Intelligence</Badge>
          <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
            Research Your Niche <br /> <span className="text-accent-blue">Before You Build.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Enter the niche you want to explore and get a structured opportunity report designed to help you make better business decisions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-[32px] backdrop-blur-xl mb-8">
            <div className="flex-1 flex items-center px-4 md:px-6">
              <Search className="w-5 h-5 text-text-secondary mr-4 shrink-0" />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a niche, product category, or market..."
                className="bg-transparent border-none text-white placeholder:text-text-secondary focus-visible:ring-0 text-base md:text-lg h-14"
              />
            </div>
            <Button 
              onClick={handleAnalyze}
              disabled={isLoading || !query}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white w-full md:w-auto rounded-xl md:rounded-full h-14 px-12 font-black italic uppercase tracking-widest shadow-2xl shadow-accent-blue/20"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
              Analyze Niche
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-12 rounded-[32px] bg-white/[0.02] border border-white/5 border-dashed text-center"
              >
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin" />
                  <p className="text-text-secondary font-bold uppercase tracking-widest text-xs animate-pulse">Scanning Market Data Clusters...</p>
                </div>
              </motion.div>
            )}

            {report && !isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Header Information Card */}
                <div className="md:col-span-2 lg:col-span-3 p-8 rounded-[32px] bg-accent-blue/10 border border-accent-blue/20 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                    <div>
                      <p className="text-accent-blue font-black uppercase tracking-widest text-[10px] mb-2">Analysis Result for:</p>
                      <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">"{report.niche}"</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-text-secondary text-[10px] font-bold uppercase">Opportunity Score</p>
                        <p className="text-4xl font-black text-accent-blue italic tracking-tighter">{report.score}/100</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-accent-blue/20 border-t-accent-blue flex items-center justify-center">
                         <TrendingUp className="w-6 h-6 text-accent-blue" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[10px] text-white/40 bg-white/5 p-3 rounded-xl italic">
                    <Info className="w-4 h-4 text-accent-blue" />
                    Detailed live niche analysis requires a connected analysis engine. This preview shows the interface and report structure only.
                  </div>
                </div>

                {/* Detail Cards */}
                <ReportCard icon={Target} title="Demand Potential" value={report.demand} />
                <ReportCard icon={Users} title="Competition Level" value={report.competition} />
                <ReportCard icon={Lightbulb} title="Success Angle" value={report.angle} />
                <ReportCard icon={Rocket} title="Brand Positioning" value={report.positioning} />
                <ReportCard icon={DollarSign} title="Monetization" value={report.monetization} />

                {/* Next Step CTA Card */}
                <div className="p-8 rounded-[32px] bg-white text-black flex flex-col justify-between group cursor-pointer hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="text-accent-blue font-black uppercase tracking-widest text-[10px] mb-2">Recommended Next Step</p>
                    <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">{report.nextStep}</h4>
                  </div>
                  <Link to="/contact">
                    <Button variant="ghost" className="p-0 h-auto font-black italic uppercase tracking-widest text-xs flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Get full strategy <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!report && !isLoading && (
            <div className="p-20 rounded-[32px] bg-white/[0.01] border border-white/5 border-dashed text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white/20" />
              </div>
              <p className="text-text-secondary font-bold uppercase tracking-widest text-xs">Awaiting market parameters...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ReportCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string }) => (
  <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent-blue">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{title}</p>
    <p className="text-white font-bold text-sm leading-relaxed">{value}</p>
  </div>
);
