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

  // We want to add loading="lazy" and decoding="async" to <img> tags, EXCEPT in
  // Navigation.tsx (Logo), HeroSlider.tsx (first slide might need eager, but let's just not touch it to be safe)
  
  if (file.includes('Navigation.tsx') || file.includes('HeroSlider.tsx') || file.includes('Logo') || file.includes('LeadPopup.tsx')) {
    // Add fetchPriority="high" maybe or just skip
    if (file.includes('Navigation.tsx') && content.includes('<img')) {
      // make sure logo is eager
      if (!content.includes('fetchPriority') && !content.includes('loading=')) {
        content = content.replace(/<img(.*?)(\/?)>/g, '<img$1 fetchPriority="high" loading="eager" decoding="sync"$2>');
        changed = true;
      }
    } else if (file.includes('HeroSlider.tsx')) {
       // do nothing
    }
  } else {
    // General lazy loading
    // Regex to match <img > tags
    let newContent = content.replace(/<img([^>]*)(\/?)>/g, (match, p1, p2) => {
      let attrs = p1;
      let modified = false;
      if (!attrs.includes('loading=')) {
        attrs += ' loading="lazy"';
        modified = true;
      }
      if (!attrs.includes('decoding=')) {
        attrs += ' decoding="async"';
        modified = true;
      }
      if (!attrs.includes('referrerPolicy=')) {
        attrs += ' referrerPolicy="no-referrer"';
        modified = true;
      }
      return modified ? `<img${attrs}${p2}>` : match;
    });

    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
