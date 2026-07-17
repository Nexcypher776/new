const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const fixed = content
    .replace(/\/\s*loading="lazy"/g, 'loading="lazy" /')
    .replace(/\/\s*decoding="async"/g, 'decoding="async" /')
    .replace(/\/\s*loading="eager"/g, 'loading="eager" /')
    .replace(/\/\s*decoding="sync"/g, 'decoding="sync" /')
    .replace(/\/\s*referrerPolicy="no-referrer"/g, 'referrerPolicy="no-referrer" /');
    
  let reFixed = fixed;
  // Let's aggressively fix any / followed by attributes before >
  reFixed = reFixed.replace(/\/\s+([^>]+)>/g, '$1 />');
    
  if (reFixed !== content) {
    fs.writeFileSync(file, reFixed, 'utf8');
    console.log('Fixed', file);
  }
});
