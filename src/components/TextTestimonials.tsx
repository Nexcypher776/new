import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS } from '../constants';

export const TextTestimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Client Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 bg-white/5 border border-white/10 rounded-3xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-accent-blue text-sm font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
