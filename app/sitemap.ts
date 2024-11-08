import { MetadataRoute } from 'next'
import projects from "@/app/data/projects.json"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thomasloyan.com',
      lastModified: new Date(),
      priority: 1,
    },
    ...projects.map(({ live_url, updated_at }) => ({
      url: live_url,
      lastModified: updated_at,
      priority: 0.8
    }))
  ]
}