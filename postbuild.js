const fs = require('fs');
const path = require('path');
try {
  fs.copyFileSync(
    path.join(__dirname, '_redirects'),
    path.join(__dirname, 'dist/client/_redirects')
  );
} catch(e) {}
