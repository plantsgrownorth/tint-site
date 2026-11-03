// Google Search Console ownership check, served at its exact .html address
// (Cloudflare Pages would otherwise redirect static .html files to clean URLs).
export const onRequest = () => new Response('google-site-verification: google73783d6fe39025c1.html', { headers: { 'content-type': 'text/html; charset=utf-8' } });
