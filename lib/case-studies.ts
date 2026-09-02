import { CaseStudy } from '@/types/case-study'

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'globnetics-web-platform',
    title: 'Globnetics: High-Performance Global Engineering Platform',
    summary:
      'Global enterprises needed a fast, interactive digital engineering platform to explore technical capabilities, calculate architectures, and schedule direct engineering engagements. We engineered the Globnetics web platform with Next.js Server Components, interactive 2D orbital physics, and sub-80ms global response times.',
    location: 'Global',
    industry: 'Enterprise Web / Tech Platform',
    category: 'web',
    categoryLabel: 'Web Application',
    image: '/images/globnetics.jpg',
    metric: '< 80ms',
    metricLabel: 'GLOBAL TTFB',
    services: ['Web Development', 'UI/UX Design', 'Cloud & DevOps', 'QA & Testing'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Cloudflare'],
    tags: ['Web Application', 'Interactive Canvas'],
    duration: '3 Months',
    team_size: '4 Dedicated Engineers',
    featuredMetric: {
      label: 'Global TTFB',
      value: '< 80ms',
      iconName: 'zap',
    },
    key_results: [
      { metric: '< 80ms', label: 'Global Edge TTFB' },
      { metric: '99/100', label: 'Lighthouse Performance' },
      { metric: '100%', label: 'Interactive Parity' },
      { metric: '0s', label: 'Downtime' },
    ],
    outcomeMetrics: [
      {
        label: 'GLOBAL TTFB',
        value: '< 80ms',
        subtext: 'Edge-rendered server components delivering instant response times worldwide',
        isHighlighted: true,
      },
      {
        label: 'PERFORMANCE',
        value: '99/100',
        subtext: 'Optimized Core Web Vitals with zero layout shifts and progressive hydration',
      },
      {
        label: 'ACCESSIBILITY',
        value: '100%',
        subtext: 'WCAG 2.1 AA compliant color tokens and keyboard-friendly interactive components',
      },
      {
        label: 'EDGE CDN',
        value: '300+ POPs',
        subtext: 'Distributed asset caching across Cloudflare global edge network',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Prospective clients and technical stakeholders needed an intuitive, interactive medium to evaluate engineering capabilities, explore technology stacks, and calculate project timelines without scheduling multiple sales discovery calls.',
        'Existing agency websites felt generic, slow to load, and lacked interactive technical demonstrations that proved engineering excellence at first glance.',
      ],
      vulnerabilityAlert: {
        title: 'Interactive Animation & SSR Performance',
        text: 'Balancing complex mathematical orbital simulations, 3D transformations, and interactive step methodologies with sub-second server-side rendering required rigorous bundle optimization.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We built the Globnetics web platform from the ground up utilizing Next.js, TypeScript, Tailwind CSS, and custom 2D canvas/SVG physics calculations.',
        'The platform includes custom interactive 2D orbital planetary systems, stepped horizontal methodology delivery tracks, a unified dark/light design token architecture, and direct Cal.com consultation booking.',
      ],
      subFeatures: [
        {
          title: 'Interactive 2D Orbit Engine',
          description: 'Custom physics-driven technology ecosystem visualizer with real-time speed adjustments, telemetry inspection, and deep stack data.',
          icon: 'cpu',
        },
        {
          title: 'Stepped Delivery Methodology',
          description: 'Sticky horizontal scroll track showcasing domain-specific software development lifecycles across web, mobile, and ERP.',
          icon: 'workflow',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'The Globnetics platform achieved a 99/100 Google Lighthouse score and reduced visitor consultation booking friction by over 70%.',
        'Stakeholders can effortlessly explore interactive technology stacks and engineering methodologies across all desktop and mobile devices with zero latency.',
      ],
    },
    testimonial: {
      quote:
        'The platform showcases our engineering precision and technical depth. It is blazingly fast, visually stunning, and provides clients with a clear window into our engineering standards.',
      name: 'Engineering Leadership',
      title: 'Head of Product Delivery',
      company: 'Globnetics Solutions',
    },
  },
  {
    slug: 'sendly-cross-border-remittance',
    title: 'Sendly: Cross-Platform US-to-Ethiopia Remittance App',
    summary:
      'Diaspora senders faced steep 10% wire fees and multi-day clearing delays through physical remittance brick-and-mortar storefronts. We built a cross-platform mobile application and web portal with instant bank/wallet payouts, automated KYC verification, and live FX rate locking.',
    location: 'USA, Ethiopia',
    industry: 'FinTech / Remittance',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    image: '/images/sendly.jpg',
    metric: '< 30s',
    metricLabel: 'SETTLEMENT TIME',
    services: ['Mobile Development', 'Web Development', 'Backend & APIs', 'Cloud & DevOps'],
    technologies: [ 'React Native', 'Swift', 'Kotlin', 'PostgreSQL', 'Docker', ],
    tags: ['Cross-Border Remittance', 'Mobile Development', 'FinTech Security'],
    duration: '4 Months',
    team_size: '5 Dedicated Engineers',
    featuredMetric: {
      label: 'Transfer Speed',
      value: '< 30s',
      iconName: 'rocket',
    },
    key_results: [
      { metric: '< 30s', label: 'Transfer Speed' },
      { metric: '99.99%', label: 'Transaction Success' },
      { metric: '0', label: 'Security Vulnerabilities' },
      { metric: '60%', label: 'Transfer Fee Reduction' },
    ],
    outcomeMetrics: [
      {
        label: 'TRANSFER SPEED',
        value: '< 30s',
        subtext: 'Average end-to-end remittance settlement from USA to recipient bank/wallet accounts',
        isHighlighted: true,
      },
      {
        label: 'CROSS-PLATFORM',
        value: '100%',
        subtext: 'Shared business logic across iOS and Android with native hardware biometrics',
      },
      {
        label: 'RELIABILITY',
        value: '99.99%',
        subtext: 'Continuous financial transaction processing with multi-zone redundancy',
      },
      {
        label: 'FEE REDUCTION',
        value: '60%',
        subtext: 'Average cost savings compared to traditional physical wire agents',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Sending money from the United States to Ethiopia historically required senders to visit physical branch locations during business hours, fill out paper slips, and pay steep transfer fees of 8–12%.',
        'There was no mobile-first solution empowering users to initiate remittances directly from their smartphones into Ethiopian bank accounts and mobile wallets with transparent FX rates.',
      ],
      vulnerabilityAlert: {
        title: 'Cross-Border Compliance & Security',
        text: 'Financial remittances demand strict KYC/AML verification, real-time FX rate locks, and resilient integration with banking networks without storing raw card data.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We developed Sendly as a unified cross-platform mobile application supporting iOS and Android with an accompanying web management portal.',
        'The mobile app features automated photo-ID verification, instant ACH / card funding rails, biometric authentication, and direct API integrations with major commercial banks and mobile wallets.',
      ],
      subFeatures: [
        {
          title: 'Cross-Platform Mobile Client',
          description: 'High-performance mobile app with native biometric security and instant transaction notifications.',
          icon: 'cpu',
        },
        {
          title: 'Live FX Rate Lock Engine',
          description: 'Automated treasury liquidity pipeline locking exchange rates to protect users from currency slippage.',
          icon: 'cloud',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'Sendly launched to high adoption within the diaspora community, processing over $4.2M in remittances within its first 90 days with an average transfer completion time under 30 seconds.',
        'The mobile app reduced remittance fees by 60% compared to legacy brick-and-mortar operators while maintaining a 99.99% transaction reliability rate.',
      ],
    },
    testimonial: {
      quote:
        'Sendly transformed how our community supports families back home. The engineering team delivered a rock-solid, ultra-fast mobile app that makes sending money as simple as sending a text message.',
      name: 'Abel Woldemichael',
      title: 'Founder & CEO',
      company: 'Sendly Global',
    },
  },
  {
    slug: 'herancon-enterprise-erp',
    title: 'Herancon: Enterprise Construction & Supply Chain ERP',
    summary:
      'Fragmented legacy spreadsheets and disconnected software locked up daily inventory, material dispatch, and accounting across distributed construction projects. We modernized and delivered Herancon’s centralized enterprise ERP with real-time stock reconciliation, PostgreSQL partitioning, and automated billing workflows.',
    location: 'Addis Ababa, Ethiopia',
    industry: 'Construction & Supply Chain ERP',
    category: 'erp',
    categoryLabel: 'Enterprise Software',
    image: '/images/herancon.jpg',
    metric: '99.99%',
    metricLabel: 'SYSTEM UPTIME',
    services: ['Enterprise Software', 'Software Modernization', 'Backend & APIs', 'Web Development'],
    technologies: ['Python', 'PostgreSQL', 'ODOO', 'Docker', 'Kubernetes'],
    tags: ['Enterprise ERP', 'Supply Chain', 'PostgreSQL', 'Construction Management'],
    duration: '8 Months',
    team_size: '7 Dedicated Engineers',
    featuredMetric: {
      label: 'Uptime',
      value: '99.99%',
      iconName: 'workflow',
    },
    key_results: [
      { metric: '99.99%', label: 'Operational Uptime' },
      { metric: '< 20ms', label: 'Material Query Speed' },
      { metric: '100%', label: 'Ledger Audit Parity' },
      { metric: '12 Sites', label: 'Synchronized Projects' },
    ],
    outcomeMetrics: [
      {
        label: 'UPTIME',
        value: '99.99%',
        subtext: 'Continuous project dispatch operations across 12 distributed sites without data conflicts',
        isHighlighted: true,
      },
      {
        label: 'STOCK LOOKUP',
        value: '< 20ms',
        subtext: 'Instant material and warehouse inventory lookups on web and mobile site terminals',
      },
      {
        label: 'ACCURACY',
        value: '100%',
        subtext: 'Automated double-entry ledgers eliminating manual billing discrepancies',
      },
      {
        label: 'CENTRALIZED',
        value: '12 Projects',
        subtext: 'Real-time project cost tracking and procurement allocation under a single dashboard',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Herancon managed large-scale commercial construction and infrastructure projects using disconnected spreadsheets and legacy localized databases.',
        'Project managers on site suffered from multi-day inventory sync delays, resulting in duplicate procurement orders, delayed material dispatches, and inaccurate job-costing reports.',
      ],
      vulnerabilityAlert: {
        title: 'Distributed Project Coordination',
        text: 'Reconciling heavy machinery hours, concrete and steel deliveries, and subcontractor payouts across remote sites required a resilient offline-friendly database architecture.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We engineered a comprehensive, multi-tenant enterprise ERP platform with partitioned PostgreSQL databases and modular microservices.',
        'The ERP centralizes supply chain procurement, warehouse inventory, equipment telemetry, project milestone tracking, and financial ledgers into a secure, web-based dashboard.',
      ],
      subFeatures: [
        {
          title: 'Centralized Material Ledger',
          description: 'Partitioned relational database tracking stock levels, deliveries, and procurement requests across all sites in real time.',
          icon: 'database',
        },
        {
          title: 'Automated Job-Costing Pipeline',
          description: 'Live financial ledger calculating labor, machinery, and material costs per construction milestone.',
          icon: 'workflow',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'Herancon streamlined procurement operations across all 12 active project sites, cutting material requisition cycle times by 48%.',
        'The platform eliminated manual spreadsheet errors and delivered total financial visibility to executive stakeholders with 99.99% system availability.',
      ],
    },
    testimonial: {
      quote:
        'The ERP platform completely transformed how we manage material supply chains and job costing. It is fast, dependable, and gives our site engineers and executives total clarity.',
      name: 'Project Director',
      title: 'Operations & Procurement Lead',
      company: 'Herancon Construction Group',
    },
  },
]
