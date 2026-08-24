import { CaseStudy } from '@/types/case-study'

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'global-supply-chain-optimization',
    title: 'Global Supply Chain Optimization',
    summary: 'Re-architected legacy monolithic system into scalable microservices, reducing data latency across international nodes.',
    location: 'Berlin, Germany',
    industry: 'Logistics & Supply Chain',
    services: ['ERP Development', 'Cloud Architecture', 'Performance Optimization'],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Kafka'],
    duration: '6 months',
    team_size: '6 senior engineers, 1 architect',
    key_results: [
      { metric: '40%', label: 'Efficiency Gain' },
      { metric: '42%', label: 'Latency Reduction' },
      { metric: '99.99%', label: 'Platform Availability' },
    ],
    situation: {
      heading: 'Legacy Monolith Bottlenecking Global Logistics Flow',
      detail: 'An international logistics provider was struggling with a 12-year-old monolithic ERP system experiencing 3.8s query latencies during peak warehouse shifts across 40+ regional hubs.',
    },
    solution: {
      heading: 'Event-Driven Microservices Architecture on AWS',
      detail: 'Designed an event-driven architecture utilizing Apache Kafka for asynchronous telemetry streaming and containerized Node.js microservices deployed on AWS ECS with distributed PostgreSQL caching.',
    },
    result: {
      heading: '40% Overall Efficiency Gain and Sub-200ms Telemetry Sync',
      detail: 'Reduced end-to-end data latency by 42% while unlocking 40% higher operational throughput during peak seasonal demand periods.',
    },
    testimonial: {
      quote: 'RiseUp transformed our supply chain backbone into a high-performance system that scales seamlessly across all continents.',
      name: 'Klaus Reinhardt',
      title: 'VP of Engineering',
      company: 'TransGlobal Logistics',
    },
  },
  {
    slug: 'secure-neo-banking-app',
    title: 'Secure Neo-Banking Platform',
    summary: 'Developed a high-security, low-latency mobile banking platform handling millions of daily transactions with 99.99% uptime.',
    location: 'London, UK',
    industry: 'FinTech',
    services: ['Mobile Apps', 'Cybersecurity & Compliance', 'Backend Engineering'],
    technologies: ['Flutter', 'Go', 'K8s', 'Redis', 'AWS KMS'],
    duration: '5 months',
    team_size: '5 mobile engineers, 3 backend engineers',
    key_results: [
      { metric: '2.5M', label: 'Active Users' },
      { metric: '99.99%', label: 'Platform Uptime' },
      { metric: '<150ms', label: 'Transaction Latency' },
    ],
    situation: {
      heading: 'High Transaction Concurrency and Stringent Compliance',
      detail: 'A rapidly scaling challenger bank required a zero-trust mobile banking solution capable of processing 10,000 TPS under stringent FCA and SOC2 Type II compliance.',
    },
    solution: {
      heading: 'Zero-Trust Reactive Architecture with Golang Microservices',
      detail: 'Built a cross-platform mobile frontend with Flutter coupled with high-throughput Go backend services on Kubernetes, with end-to-end hardware-backed biometric security.',
    },
    result: {
      heading: 'Scaled to 2.5M Active Users with Zero Security Incidents',
      detail: 'Achieved sub-150ms transaction roundtrips while maintaining 99.99% operational uptime across multi-region failover zones.',
    },
    testimonial: {
      quote: 'The engineering rigor RiseUp brought to our banking core allowed us to pass all security audits on the first pass.',
      name: 'Sophie Laurent',
      title: 'Head of Mobile',
      company: 'Aura Financial',
    },
  },
  {
    slug: 'integrated-patient-portal',
    title: 'Integrated Patient Portal',
    summary: 'Built a HIPAA-compliant web portal that aggregates real-time diagnostics data across multiple disparate clinical systems.',
    location: 'Boston, USA',
    industry: 'Healthcare & Life Sciences',
    services: ['Web Platforms', 'Custom Systems', 'API Integration'],
    technologies: ['Vue.js', 'Python', 'Azure', 'FastAPI', 'FHIR'],
    duration: '4 months',
    team_size: '4 full-stack engineers, 1 compliance officer',
    key_results: [
      { metric: '10x', label: 'Faster Sync' },
      { metric: '100%', label: 'HIPAA Compliance' },
      { metric: '180K', label: 'Patients Onboarded' },
    ],
    situation: {
      heading: 'Fragmented Clinical Data Across Disparate Hospital EHRs',
      detail: 'A regional healthcare network was burdened by siloed EHR databases, requiring clinicians to manually reconcile laboratory results and patient diagnostics across 3 distinct legacy portals.',
    },
    solution: {
      heading: 'FHIR-Compliant Unified Real-Time Diagnostic Hub',
      detail: 'Engineered a unified patient portal leveraging Python FastAPI microservices, Azure Healthcare APIs, and an optimized Vue.js responsive interface with real-time biometric telemetry charting.',
    },
    result: {
      heading: '10x Faster Clinical Data Synchronization for Care Providers',
      detail: 'Cut lab result delivery times from 4 hours to instantaneous push notifications, securely serving over 180,000 patients and 1,200 active clinicians.',
    },
    testimonial: {
      quote: 'RiseUp delivered a critical healthcare platform that our clinical staff relies on 24/7 without friction.',
      name: 'Dr. David Sterling',
      title: 'Chief Medical Information Officer',
      company: 'NorthEast Health Alliance',
    },
  },
]
