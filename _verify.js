var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf8');
var errors = [];

// Check JS files exist
['app.js', 'app-lang.js', 'style.css', 'preload_data.js', 'manifest.json'].forEach(function(f) {
  try {
    fs.accessSync(f);
    console.log('OK:', f);
  } catch(e) {
    errors.push('MISSING: ' + f);
  }
});

// Check essential functions exist
var app = fs.readFileSync('app.js', 'utf8');
['function showDedication', 'function navSetup', 'function doSearch', 'function showCertificate', 'function showLevelTest', 'function showWelcome', 'function initApp'].forEach(function(fn) {
  if (app.indexOf(fn) === -1) errors.push('Missing function: ' + fn);
});

// Check dedication overlay exists in HTML
if (html.indexOf('dedicationOverlay') === -1) errors.push('Missing dedicationOverlay in index.html');
if (html.indexOf('data:image/png;base64') === -1) errors.push('Missing embedded image in dedication');

if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach(function(e) { console.log('  - ' + e); });
} else {
  console.log('\nNo errors found!');
}

// Clean up
fs.unlinkSync('_check_html.js');
