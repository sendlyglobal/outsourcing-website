import React from 'react'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'RiseUp Solutions',
    url: 'https://riseup.solutions',
    logo: 'https://riseup.solutions/images/hero_circuit_matrix.jpg',
    description:
      'Engineering high-performance digital systems. Custom ERP, mobile apps, web platforms, and distributed software built for scale.',
    email: 'sendlyglobal@gmail.com',
    priceRange: '$$$$',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ERP Development',
            description: 'Custom enterprise resource planning architectures and data pipelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Development',
            description: 'High-performance native and cross-platform mobile applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Platforms',
            description: 'Scalable, secure, and robust web applications leveraging modern frameworks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Systems',
            description: 'Bespoke software engineering solving unique technical challenges.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
