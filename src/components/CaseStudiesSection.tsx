import { motion } from 'motion/react';
import { Target, Lightbulb, Trophy, CheckCircle2, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES } from '../constants';

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-32 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Deep Dives
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Case Studies</h2>
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
              <div className="flex-1 w-full relative group rounded-3xl overflow-hidden">
                <img src={study.image} alt={study.client} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-2">{study.category}</p>
                  <h3 className="text-3xl font-bold text-white">{study.client}</h3>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{study.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent-blue">
                      <Target className="w-5 h-5 pointer-events-none" />
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
                      <Lightbulb className="w-5 h-5 pointer-events-none" />
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
                    <Trophy className="w-6 h-6 pointer-events-none" />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Results</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-white mb-1">{result.value}</p>
                        <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-12 font-bold shadow-lg">Start Your Story</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
