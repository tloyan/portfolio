import { MetadataRoute } from 'next'
import projects from "@/app/data/projects.json"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
        'https://thomasloyan.com/sitemap.xml',
        ...projects.map(({ live_url }) => `${live_url}/sitemap.xml`),
    ],
  }
}