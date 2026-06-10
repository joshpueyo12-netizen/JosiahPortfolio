const fs = require('fs');
try {
  fs.copyFileSync('_redirects', 'dist/client/_redirects');
} catch(e) {}
