import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { Info, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const generateData = () => {
  const data = [];
  const startValue = 4500;
  for (let i = 0; i < 24; i++) {
    const hoursAgo = 23 - i;
    const date = new Date(Date.now() - hoursAgo * 60 * 60 * 1000);
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Create an upward trend with some volatility
    const growth = i * 250;
    const noise = Math.random() * 400;
    data.push({
      time: timeStr,
      revenue: startValue + growth + noise,
    });
  }
  return data;
};

export const GrowthChart = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 60000); // Refresh every minute to keep dates "living"
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-blue/5 blur-[160px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 space-y-8">
            <Badge className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest leading-none">
               Scale Architecture
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
              Built to Scale <br /> <span className="text-accent-blue font-black">Over Time.</span>
            </h2>
            <p className="text-text-secondary text-xl font-medium italic leading-relaxed">
              Growth is a process powered by structure, testing, execution, and continuous optimization. Our systems are engineered to produce compounding performance.
            </p>
            
            <div className="space-y-6 pt-4">
               <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white italic tracking-tighter">$14,208.50</p>
                    <p className="text-text-secondary text-[10px] font-bold uppercase tracking-widest">Projected Daily Scaling Velocity</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-2 text-[10px] text-white/30 italic px-4">
                <Info className="w-4 h-4 text-accent-blue/50" />
                This visualization represents our illustrative growth model for high-velocity Shopify stores.
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="p-8 pb-12 rounded-[48px] bg-white/[0.01] border border-white/5 backdrop-blur-[2px] relative group"
             >
                <div className="flex justify-between items-center mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest italic opacity-50">Live Growth Trajectory (Last 24 Hours)</span>
                   </div>
                   <div className="bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-2 italic">
                      <ArrowUpRight className="w-3 h-3" />
                      UP +14.2%
                   </div>
                </div>

                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                      <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 900 }} 
                        interval={3}
                      />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '12px' }}
                        itemStyle={{ color: '#3b82f6', fontWeight: 900, textTransform: 'uppercase' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3b82f6" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorRevenue)" 
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-blue blur-[80px] opacity-20 pointer-events-none" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
