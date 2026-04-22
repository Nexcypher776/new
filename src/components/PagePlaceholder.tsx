import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PagePlaceholderProps {
  title: string;
  description: string;
  tag: string;
  color?: string;
}

export const PagePlaceholder = ({ title, description, tag, color = "accent-blue" }: PagePlaceholderProps) => {
  return (
    <div className="pt-64 pb-32 min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <Badge className={`mb-6 bg-${color}/10 text-${color} border-${color}/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest`}>
          {tag}
        </Badge>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
          {title}
        </h1>
        <p className="text-text-secondary text-xl mb-12 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <Button size="lg" variant="outline" className="border-white/10 text-white rounded-full px-8 h-12">
              <ArrowLeft className="mr-2 w-4 h-4" /> Go Back Home
            </Button>
          </Link>
          <Button size="lg" className={`bg-${color} text-white rounded-full px-8 h-12 shadow-xl shadow-${color}/20`}>
            Inquire About {title}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
