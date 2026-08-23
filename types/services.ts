export interface ServiceItem {
  id: string
  slug: string
  title: string
  eyebrow: string
  description: string
  longDescription: string
  iconName: string
  features: string[]
  technologies: string[]
  benefits: {
    title: string
    description: string
  }[]
}
