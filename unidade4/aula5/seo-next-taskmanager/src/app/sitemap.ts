import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXTAUTH_URL || 'https://localhost:3000',
      lastModified: new Date(),
    },
    {
      url: process.env.NEXTAUTH_URL || 'https://localhost:3000/sobre',
      lastModified: new Date(),
    }
  ]
}