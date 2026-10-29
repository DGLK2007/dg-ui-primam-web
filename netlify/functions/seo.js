const fs = require('fs');
const path = require('path');

const META = {
  '': { title: 'DG UI PRIMAM — Premium Component Library', desc: '500+ premium HTML, CSS & JavaScript snippets — loaders, animations, login forms, buttons, colors, fonts.' },
  'home': { title: 'Home — DG UI PRIMAM', desc: 'Build beautiful interfaces faster — 500+ premium snippets.' },
  'projects': { title: 'All Components — DG UI PRIMAM', desc: 'Browse 500+ HTML, CSS and JavaScript components.' },
  'loading': { title: 'Loading Components — DG UI PRIMAM', desc: '50+ CSS loading spinners and animations. Copy-paste ready.' },
  'animation': { title: 'Animations — DG UI PRIMAM', desc: '50+ CSS animations and transitions.' },
  'login': { title: 'Login Forms — DG UI PRIMAM', desc: '50+ beautiful login form designs.' },
  'component': { title: 'UI Components — DG UI PRIMAM', desc: '30+ premium UI components.' },
  'buttons': { title: 'Buttons — DG UI PRIMAM', desc: '60+ button designs with hover effects.' },
  'portfolio': { title: 'Portfolio Templates — DG UI PRIMAM', desc: '5 modern portfolio templates.' },
  'navbars': { title: 'Navigation Bars — DG UI PRIMAM', desc: '30 navigation bar designs.' },
  'colors': { title: 'CSS Colors — DG UI PRIMAM', desc: '150+ RGB colors with hex codes.' },
  'rgb': { title: 'RGB Transitions — DG UI PRIMAM', desc: '25 animated color transitions.' },
  'contacts': { title: 'Contact Boxes — DG UI PRIMAM', desc: '25 animated contact cards.' },
  'fonts': { title: 'Google Fonts — DG UI PRIMAM', desc: '200 popular Google Fonts with import code.' },
  'profile': { title: 'Profile — DG UI PRIMAM', desc: 'Manage your DG UI PRIMAM account.' },
  'auth': { title: 'Sign In — DG UI PRIMAM', desc: 'Sign in or create your free DG UI PRIMAM account.' }
};

function findIndexHtml() {
  const c = [
    path.join(process.cwd(), 'index.html'),
    path.join(__dirname, '..', '..', 'index.html'),
    path.join(__dirname, 'index.html'),
    '/var/task/index.html',
    '/var/task/user/index.html'
  ];
  for (const p of c) { try { if (fs.existsSync(p)) return p; } catch (e) {} }
  return null;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

exports.handler = async (event) => {
  const route = (event.path || '/').replace(/^\/+|\/+$/g, '').split('?')[0];
  const m = META[route] || META[''];
  const host = (event.headers && (event.headers['x-forwarded-host'] || event.headers.host)) || 'dgui.netlify.app';
  const SITE = 'https://' + host;
  const canonical = SITE + '/' + route;

  let html;
  try {
    const p = findIndexHtml();
    if (!p) throw new Error('index.html not found');
    html = fs.readFileSync(p, 'utf8');
  } catch (e) {
    return { statusCode: 500, headers: { 'Content-Type': 'text/html' }, body: '<h1>SEO error</h1><p>' + esc(e.message) + '</p>' };
  }

  html = html.replace(/<title>[^<]*<\/title>/i, '<title>' + esc(m.title) + '</title>');
  const descTag = '<meta name="description" content="' + esc(m.desc) + '">';
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html))
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, descTag);
  else
    html = html.replace(/<\/head>/i, '  ' + descTag + '\n</head>');

  html = html.replace(/<meta\s+property=["']og:[^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']twitter:[^>]*>/gi, '');

  const extras =
    '<link rel="canonical" href="' + canonical + '">\n  ' +
    '<meta property="og:type" content="website">\n  ' +
    '<meta property="og:title" content="' + esc(m.title) + '">\n  ' +
    '<meta property="og:description" content="' + esc(m.desc) + '">\n  ' +
    '<meta property="og:url" content="' + canonical + '">\n  ' +
    '<meta property="og:site_name" content="DG UI PRIMAM">\n  ' +
    '<meta name="twitter:card" content="summary_large_image">\n  ' +
    '<meta name="twitter:title" content="' + esc(m.title) + '">\n  ' +
    '<meta name="twitter:description" content="' + esc(m.desc) + '">';

  html = html.replace(/<\/head>/i, '  ' + extras + '\n</head>');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=0, must-revalidate' },
    body: html
  };
};
