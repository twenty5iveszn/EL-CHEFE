import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function productionDomainPlugin() {
  return {
    name: 'production-domain-plugin',
    closeBundle() {
      const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
      const isCustomDomain = siteUrl && !siteUrl.includes('localhost') && !siteUrl.includes('127.0.0.1') && !siteUrl.includes('run.app');
      
      if (isCustomDomain) {
        const cleanUrl = siteUrl.replace(/\/$/, '');
        const sitemapPath = path.resolve(__dirname, 'dist/sitemap.xml');
        const robotsPath = path.resolve(__dirname, 'dist/robots.txt');
        
        if (fs.existsSync(sitemapPath)) {
          let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
          sitemapContent = sitemapContent.replace('https://PRODUCTION_DOMAIN_URL/', `${cleanUrl}/`);
          fs.writeFileSync(sitemapPath, sitemapContent);
        }
        
        if (fs.existsSync(robotsPath)) {
          let robotsContent = fs.readFileSync(robotsPath, 'utf8');
          if (!robotsContent.includes(`Sitemap: ${cleanUrl}/sitemap.xml`)) {
            robotsContent += `\nSitemap: ${cleanUrl}/sitemap.xml\n`;
            fs.writeFileSync(robotsPath, robotsContent);
          }
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), productionDomainPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
