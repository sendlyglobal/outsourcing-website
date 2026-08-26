export interface OutcomeMetric {
  label: string
  value: string
  subtext?: string
  isHighlighted?: boolean
}

export interface CaseStudy {
  slug: string
  title: string
  summary: string
  location: string
  industry: string
  category: 'erp' | 'mobile' | 'web' | 'custom'
  categoryLabel: string
  image?: string
  metric?: string
  metricLabel?: string
  services: string[]
  technologies: string[]
  duration: string
  team_size: string
  featuredMetric?: {
    label: string
    value: string
    iconName?: 'gauge' | 'users' | 'rocket' | 'chart'
  }
  tags?: string[]
  outcomeMetrics?: OutcomeMetric[]
  key_results: {
    metric: string
    label: string
  }[]
  situation: {
    heading: string
    detail?: string
    paragraphs?: string[]
    vulnerabilityAlert?: {
      title: string
      text: string
    }
  }
  solution: {
    heading: string
    detail?: string
    paragraphs?: string[]
    subFeatures?: {
      title: string
      description: string
      icon: 'cpu' | 'cloud' | 'shield' | 'database'
    }[]
  }
  result: {
    heading: string
    detail?: string
    paragraphs?: string[]
  }
  testimonial?: {
    quote: string
    name: string
    title: string
    company: string
  }
}
