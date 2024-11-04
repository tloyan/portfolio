import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thomasloyan.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://qr-code-component.tloyan.com/',
      lastModified: '2024-10-16T08:12:15.430Z ',
      priority: 0.8,
    },
  ]
}