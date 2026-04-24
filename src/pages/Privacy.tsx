import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export const Privacy = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
      <Helmet>
        <title>Privacy Policy | Nexcypher</title>
        <meta name="description" content="Read the Privacy Policy to understand how Nexcypher handles your data." />
        <meta name="keywords" content="Privacy policy, Data protection, Nexcypher privacy" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">Privacy Policy — Nexcypher</h1>
          <p className="text-text-secondary mb-12">Effective Date: April 23, 2026</p>

          <div className="space-y-8 text-text-secondary text-lg leading-relaxed">
            <p>Welcome to Nexcypher. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.</p>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h3>
              <p>We may collect personal information such as your name, email address, phone number, and business details when you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Contact us for services</li>
                <li>Subscribe to our newsletters</li>
                <li>Provide information during the project onboarding process</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h3>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                <li>Deliver requested services</li>
                <li>Communicate with you regarding your project</li>
                <li>Send relevant marketing communications (you can opt-out at any time)</li>
                <li>Improve our website and service offerings</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Protection</h3>
              <p>We do not sell your personal data to third parties. We may share information with trusted third-party service providers (such as hosting partners or marketing platforms) only to the extent necessary to provide our services. We implement reasonable security measures to protect your data.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">4. Your Rights</h3>
              <p>Depending on your location, you may have the right to access, correct, or delete your personal data. Please contact us to exercise these rights.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">5. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us via our website's contact form.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
