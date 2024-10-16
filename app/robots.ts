import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
        'https://thomasloyan.com/sitemap.xml',
        'https://qr-code-component.tloyan.com/sitemap.xml'
    ],
  }
}