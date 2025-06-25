/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-glb.vercel.app/', // <-- Change to your domain
  generateRobotsTxt: true, // Automatically generates robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000, // Optional
  exclude: ['/admin', '/secret-page'], // Optional: exclude pages
};
