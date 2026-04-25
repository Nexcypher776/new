const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const h1Text = "Scale Your Shopify Store with AI Automation & Proven Marketing Systems";

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Convert all existing h1 and motion.h1 to h2 and motion.h2
  // We will do this globally before injecting our own unique h1
  content = content.replace(/<h1([\s\S]*?)<\/h1>/g, '<h2$1</h2>');
  content = content.replace(/<motion\.h1([\s\S]*?)<\/motion\.h1>/g, '<motion.h2$1</motion.h2>');

  // Also catch self-closing just in case (though highly unlikely for headings)
  // Remove any previously injected sr-only h1s to be safe
  content = content.replace(/<h1 className="sr-only">.*?<\/h1>\n?/g, '');

  // Now, inject exactly ONE h1 right after the main return wrapper
  const returnWrapperRegex = /(return\s*\(\s*<[^>]+>\s*)/;
  if (returnWrapperRegex.test(content)) {
    content = content.replace(returnWrapperRegex, `$1\n        <h1 className="sr-only">${h1Text}</h1>\n`);
  } else if (content.includes("return (")) {
     const parts = content.split("return (");
     parts[1] = `\n    <>\n      <h1 className="sr-only">${h1Text}</h1>\n` + parts[1].replace(/;?$/, '\n    </>;');
     content = parts.join("return (");
  }

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
  console.log(`Processed ${file}`);
});

