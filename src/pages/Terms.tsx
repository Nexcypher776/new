import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export const Terms = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
      <Helmet>
        <title>Terms & Conditions | Nexcypher</title>
        <meta name="description" content="Read the Terms and Conditions for using Nexcypher's services." />
        <meta name="keywords" content="Terms and conditions, Nexcypher terms, Legal" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">Terms & Conditions — Nexcypher</h1>
          <p className="text-text-secondary mb-12">Effective Date: April 23, 2026</p>

          <div className="space-y-8 text-text-secondary text-lg leading-relaxed">
            <p>By using Nexcypher services, you agree to the following terms:</p>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">1. Services</h3>
              <p>Nexcypher provides:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Shopify store development</li>
                <li>Marketing services</li>
                <li>AI agent development</li>
                <li>Advertising and automation solutions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">2. No Guarantee of Results</h3>
              <p>We provide proven strategies, but:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Results depend on multiple factors</li>
                <li>We do not guarantee specific sales or revenue outcomes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">3. Client Responsibility</h3>
              <p>Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Provide accurate information</li>
                <li>Communicate clearly</li>
                <li>Follow agreed strategies where applicable</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">4. Payments</h3>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>All payments must be made as agreed before or during service</li>
                <li>No refunds once work has commenced unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h3>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Final deliverables belong to the client after full payment</li>
                <li>Nexcypher may showcase work for portfolio purposes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h3>
              <p>We are not liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Business losses</li>
                <li>Platform changes (Shopify, Meta, Google, etc.)</li>
                <li>Third-party service disruptions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">7. Termination</h3>
              <p>We reserve the right to terminate services if terms are violated.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h3>
              <p>We may update these terms at any time.</p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-12">
              <p>By using our services, you agree to these Terms & Conditions.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
