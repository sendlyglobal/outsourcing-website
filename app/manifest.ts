import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RiseUp Solutions | High Performance Digital Engineering',
    short_name: 'RiseUp',
    description: 'Custom ERP, Mobile, Web, and Distributed software engineering for enterprises.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0a8a9e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
