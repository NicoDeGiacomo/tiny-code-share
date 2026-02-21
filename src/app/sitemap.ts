import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: 'https://www.tinycodeshare.app/', lastModified, priority: 1.0 },
    { url: 'https://www.tinycodeshare.app/about', lastModified, priority: 0.8 },
    { url: 'https://www.tinycodeshare.app/features', lastModified, priority: 0.8 },
    { url: 'https://www.tinycodeshare.app/how-it-works', lastModified, priority: 0.7 },
    { url: 'https://www.tinycodeshare.app/privacy', lastModified, priority: 0.7 },
  ];
}
