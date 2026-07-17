const { execSync } = require('child_process');
try {
  execSync('git status', { stdio: 'inherit' });
  execSync('git checkout -- .', { stdio: 'inherit' });
} catch (e) {
  console.error(e);
}
