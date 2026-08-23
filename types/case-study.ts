export interface KeyResult {
  metric: string
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  summary: string
  location: string
  industry: string
  services: string[]
  technologies: string[]
  duration: string
  team_size: string
  key_results: KeyResult[]
  situation: {
    heading: string
    detail: string
  }
  solution: {
    heading: string
    detail: string
  }
  result: {
    heading: string
    detail: string
  }
  testimonial?: {
    quote: string
    name: string
    title: string
    company: string
  }
}
