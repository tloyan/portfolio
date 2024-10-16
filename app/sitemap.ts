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
      lastModified: '2024-10-15T20:41:49.960Z',
      priority: 0.8,
    },
  ]
}