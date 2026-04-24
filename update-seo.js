const fs = require('fs');

const seoConfig = {
  Home: {
    title: 'Nexcypher | Premium Shopify & AI Agency',
    desc: 'We build high-converting Shopify stores, AI calling agents, and growth marketing strategies to scale your business.',
    keywords: 'Shopify, AI Agents, Growth Marketing, E-commerce strategy, Nexcypher'
  },
  About: {
    title: 'About Nexcypher | Our Mission & Team',
    desc: 'Learn about Nexcypher\'s mission, our team of experts, and how we help e-commerce brands scale with Shopify and AI.',
    keywords: 'About Nexcypher, E-commerce experts, Shopify developers, AI marketing team'
  },
  Services: {
    title: 'Our Services | Shopify & AI Solutions | Nexcypher',
    desc: 'Explore Nexcypher\'s premium services: Shopify development, AI calling agents, and Shopify growth marketing.',
    keywords: 'Shopify services, AI services, E-commerce marketing, Growth strategies'
  },
  AiCallingAgents: {
    title: 'AI Calling Agents | Nexcypher',
    desc: 'Automate your customer service and sales with Nexcypher\'s advanced AI calling agents tailored for e-commerce.',
    keywords: 'AI calling agents, Customer service AI, AI sales automation, E-commerce AI bots'
  },
  ShopifyMarketing: {
    title: 'Shopify Marketing | Nexcypher',
    desc: 'Scale your Shopify store with Nexcypher\'s data-driven marketing, paid ads, and retention strategies.',
    keywords: 'Shopify marketing, E-commerce ads, Paid social, Email marketing, SMS marketing'
  },
  ShopifyGrowth: {
    title: 'Shopify Growth Agency | Nexcypher',
    desc: 'Accelerate your e-commerce revenue with our proven Shopify growth systems and conversion rate optimization.',
    keywords: 'Shopify growth, CRO, Conversion rate optimization, E-commerce scaling'
  },
  Portfolio: {
    title: 'Our Portfolio | Nexcypher Success Stories',
    desc: 'View our past work and see how Nexcypher has transformed Shopify stores and integrated AI solutions for our clients.',
    keywords: 'Nexcypher portfolio, Shopify case studies, E-commerce success stories'
  },
  SalesVideoProof: {
    title: 'Sales Video Proof | Nexcypher',
    desc: 'Watch how our AI calling agents and Shopify growth strategies generate real sales and revenue for our clients.',
    keywords: 'Sales proof, AI agent results, Shopify growth video, Nexcypher reviews'
  },
  Results: {
    title: 'Client Results | Nexcypher',
    desc: 'Discover the incredible ROI and revenue growth our clients have achieved with Nexcypher\'s e-commerce and AI solutions.',
    keywords: 'Client results, E-commerce ROI, Nexcypher testimonials, Shopify success'
  },
  Pricing: {
    title: 'Pricing | Nexcypher Services',
    desc: 'Transparent pricing for our Shopify development, marketing, and AI agent services. Find the perfect plan to scale your brand.',
    keywords: 'Nexcypher pricing, Shopify agency cost, AI agent pricing'
  },
  Contact: {
    title: 'Contact Us | Nexcypher',
    desc: 'Get in touch with Nexcypher. Let\'s discuss how we can scale your Shopify store and implement AI automation.',
    keywords: 'Contact Nexcypher, E-commerce consultation, Hire Shopify agency'
  },
  ThankYou: {
    title: 'Thank You | Nexcypher',
    desc: 'Thank you for contacting Nexcypher. We will be in touch shortly.',
    keywords: 'Thank you, contact confirmed'
  },
  Terms: {
    title: 'Terms & Conditions | Nexcypher',
    desc: 'Read the Terms and Conditions for using Nexcypher\'s services.',
    keywords: 'Terms and conditions, Nexcypher terms, Legal'
  },
  Privacy: {
    title: 'Privacy Policy | Nexcypher',
    desc: 'Read the Privacy Policy to understand how Nexcypher handles your data.',
    keywords: 'Privacy policy, Data protection, Nexcypher privacy'
  }
};

const dir = 'src/pages';
fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const pageName = file.replace('.tsx', '');
  const config = seoConfig[pageName];
  if (!config) return;

  const helmetTag = `      <Helmet>\n        <title>${config.title}</title>\n        <meta name="description" content="${config.desc}" />\n        <meta name="keywords" content="${config.keywords}" />\n      </Helmet>`;

  let content = fs.readFileSync(`${dir}/${file}`, 'utf8');

  // Add import if missing
  if (!content.includes('import { Helmet }')) {
    content = `import { Helmet } from 'react-helmet-async';\n` + content;
  }

  // Check if Helmet already exists in the return block
  if (content.includes('<Helmet>')) {
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/, helmetTag.trim());
  } else {
    // Inject right after the first `return (` and the opening tag inside it
    // Using regex to find `return (` followed by `<div` or similar
    const returnRegex = /(return\s*\(\s*<[a-zA-Z0-9_\-\s="']+[^>]*>)/;
    if (returnRegex.test(content)) {
      content = content.replace(returnRegex, `$1\n${helmetTag}`);
    } else {
        const returnRegex2 = /(return\s*\(\s*(<[^>]+>))/;
        if(returnRegex2.test(content)) {
            content = content.replace(returnRegex2, `$1\n${helmetTag}`);
        } else {
            console.log("Could not inject Helmet into", file);
        }
    }
  }

  fs.writeFileSync(`${dir}/${file}`, content, 'utf8');
  console.log(`Updated ${file}`);
});
