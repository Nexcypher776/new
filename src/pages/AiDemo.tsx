import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { getAssistantResponse } from '@/lib/gemini';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am your Nexcypher AI assistant. How can I help you scale your Shopify store today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAssistantResponse(messages, input);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
      <div className="space-y-4 mb-4 h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-accent-blue/20 ml-auto' : 'bg-white/10 mr-auto'} max-w-[80%]`}>
            {m.content}
          </div>
        ))}
        {isLoading && <div className="text-text-secondary">AI is typing...</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow bg-transparent border border-white/20 rounded-full px-4 py-2 text-white"
          placeholder="Ask me anything about Shopify..."
        />
        <Button onClick={sendMessage} disabled={isLoading}>Send</Button>
      </div>
    </div>
  );
};

export const AiDemo = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Live AI Agent Demo",
    "provider": {
      "@type": "Organization",
      "name": "Nexcypher",
      "url": "https://nexcypher.us"
    },
    "description": "Experience a live demonstration of our autonomous AI calling agents built for sales, support, and closing."
  };

  return (
    <>
      <Helmet>
        <title>Live AI Agent Demo | Try Nexcypher AI</title>
        <meta name="description" content="Experience a live demonstration of our autonomous AI calling agents built for sales, support, and closing." />
        <meta name="keywords" content="Live AI agent demo, try AI caller, Nexcypher AI demo" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaData && (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )}
      </Helmet>
      
      <h1 className="sr-only">Live AI Agent Demo | Try Nexcypher AI</h1>

      <section className="pt-32 pb-24 bg-background min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                Ai Demo
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Live AI Agent Demo
            </h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mt-8 mb-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1620712946342-99079986bcdf?auto=format&fit=crop&w=1200&h=675&q=80"
                alt="Futuristic AI Agent"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </motion.div>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Experience a live demonstration of our autonomous AI calling agents built for sales, support, and closing.
            </p>
            
            <ChatInterface />

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest shadow-lg shadow-accent-blue/20">
                  Contact Us
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest">
                  Back to Home <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Content Placeholder Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-lg">
          <p className="text-text-secondary">
            More detailed information regarding Ai Demo will be updated here. 
            Our team is engineering the best experience.
          </p>
        </div>
      </section>
    </>
  );
};
