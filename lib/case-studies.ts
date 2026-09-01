import { CaseStudy } from '@/types/case-study'

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'pulse-analytics-saas',
    title: 'PulseAnalytics: Real-Time B2B SaaS Telemetry Platform',
    summary:
      'Enterprise teams struggled with fragmented user event tracking across siloed browser sessions with delayed 24-hour reporting pipelines. We engineered a high-concurrency real-time web telemetry platform with sub-second event ingestion, interactive dashboards, and automated anomaly alerts.',
    location: 'San Francisco, USA',
    industry: 'SaaS / Web Analytics',
    category: 'web',
    categoryLabel: 'Web Application',
    image: '/images/outcome_neobank_app.jpg',
    metric: '< 100ms',
    metricLabel: 'QUERY LATENCY',
    services: ['Web Development', 'Backend & APIs', 'UI/UX Design', 'Cloud & DevOps'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'ClickHouse'],
    tags: ['Web Application', 'SaaS Dashboard', 'Real-Time Analytics', 'Next.js'],
    duration: '4 Months',
    team_size: '4 Dedicated Engineers',
    featuredMetric: {
      label: 'Query Latency',
      value: '< 100ms',
      iconName: 'zap',
    },
    key_results: [
      { metric: '< 100ms', label: 'Dashboard Query Speed' },
      { metric: '10M+', label: 'Daily Events Ingested' },
      { metric: '99.99%', label: 'Platform Availability' },
      { metric: '0s', label: 'Reporting Delay' },
    ],
    outcomeMetrics: [
      {
        label: 'QUERY SPEED',
        value: '< 100ms',
        subtext: 'Real-time aggregation across millions of active user sessions without cache lag',
        isHighlighted: true,
      },
      {
        label: 'EVENT VOLUME',
        value: '10M+',
        subtext: 'Continuous streaming data ingestion handled daily with zero data loss',
      },
      {
        label: 'UPTIME',
        value: '99.99%',
        subtext: 'High-availability multi-region web infrastructure on AWS',
      },
      {
        label: 'REPORTING DELAY',
        value: 'Instant',
        subtext: 'Replaced legacy 24-hour batch jobs with sub-second live streaming updates',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Enterprise analytics customers were losing visibility into user journeys because existing reporting engines relied on slow, overnight batch jobs that took up to 24 hours to process raw event logs.',
        'High-volume event spikes frequently overloaded analytical dashboards, causing severe timeouts and preventing product teams from diagnosing drop-offs during active marketing campaigns.',
      ],
      vulnerabilityAlert: {
        title: 'Real-Time Ingestion Bottlenecks',
        text: 'Handling millions of concurrent websocket and REST event streams required an architecture capable of massive parallel writes without locking analytical query pipelines.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We architected a modern, full-stack web application leveraging Next.js and TypeScript on the frontend paired with an optimized ClickHouse columnar data warehouse on the backend.',
        'The responsive web platform delivers instant filtering, dynamic cohort breakdowns, and real-time visualization widgets that render complex queries in under 100 milliseconds.',
      ],
      subFeatures: [
        {
          title: 'Real-Time Dashboard Engine',
          description: 'Interactive analytics canvas powered by Next.js and Tailwind CSS with sub-100ms query response times.',
          icon: 'cpu',
        },
        {
          title: 'High-Throughput Ingestion API',
          description: 'Distributed event collector absorbing over 10 million daily events without queue buildup.',
          icon: 'cloud',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'PulseAnalytics successfully onboarded over 45 enterprise customers within 60 days of launch, cutting analytical query times from minutes to sub-second responses.',
        'The platform operates with 99.99% continuous availability and delivers live operational telemetry directly to executive decision-makers with zero delay.',
      ],
    },
    testimonial: {
      quote:
        'The engineering quality delivered by the team was outstanding. We went from struggling with 24-hour data delays to delivering instant, real-time analytics to our largest enterprise clients.',
      name: 'David Chen',
      title: 'VP of Product',
      company: 'PulseAnalytics Inc.',
    },
  },
  {
    slug: 'sendly-cross-border-remittance',
    title: 'Sendly: Cross-Platform US-to-Ethiopia Remittance',
    summary:
      'There was no simple, friction-free way for the diaspora in the United States to send money directly to Ethiopia from their mobile devices. We architected and built Sendly — a secure, cross-platform mobile application and web platform enabling instant, low-cost cross-border remittances.',
    location: 'USA, Ethiopia',
    industry: 'FinTech / Remittance',
    category: 'mobile',
    categoryLabel: 'Mobile & Web App Infrastructure',
    image: '/images/outcome_neobank_app.jpg',
    metric: '< 30s',
    metricLabel: 'SETTLEMENT TIME',
    services: ['Mobile Development', 'Web Development', 'Backend & APIs', 'Cloud & DevOps'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'PostgreSQL', 'AWS'],
    tags: ['Cross-Border Remittance', 'Mobile Development', 'FinTech Security', 'Flutter'],
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
    slug: 'aerolink-booking-engine',
    title: 'AeroLink: High-Throughput Global Booking Engine & APIs',
    summary:
      'High search volumes and flash booking spikes caused frequent API timeouts and inconsistent inventory across airline reservation partners. We architected an asynchronous gRPC microservices backend handling 45,000 requests per second with distributed seat reservation locks and zero double-bookings.',
    location: 'Chicago, USA',
    industry: 'Travel & Logistics',
    category: 'custom',
    categoryLabel: 'Backend & APIs',
    image: '/images/outcome_supply_chain.jpg',
    metric: '45k req/s',
    metricLabel: 'PEAK THROUGHPUT',
    services: ['Backend & API Development', 'Enterprise Software', 'QA & Testing', 'Cloud & DevOps'],
    technologies: ['Go', 'gRPC', 'Redis', 'Apache Kafka', 'PostgreSQL', 'Docker'],
    tags: ['Backend APIs', 'High Throughput', 'Distributed Systems', 'gRPC'],
    duration: '6 Months',
    team_size: '6 Dedicated Engineers',
    featuredMetric: {
      label: 'Throughput',
      value: '45k req/s',
      iconName: 'server',
    },
    key_results: [
      { metric: '45k req/s', label: 'Peak Booking Throughput' },
      { metric: '< 20ms', label: 'P99 API Latency' },
      { metric: '0', label: 'Double-Booking Incidents' },
      { metric: '99.999%', label: 'Core Uptime' },
    ],
    outcomeMetrics: [
      {
        label: 'THROUGHPUT',
        value: '45k req/s',
        subtext: 'High-concurrency reservation queries handled during peak seasonal sales',
        isHighlighted: true,
      },
      {
        label: 'LATENCY',
        value: '< 20ms',
        subtext: 'Sub-millisecond serialization using binary gRPC protocols and Redis caching',
      },
      {
        label: 'CONSISTENCY',
        value: '100%',
        subtext: 'Distributed Redis locks preventing duplicate inventory allocation across partners',
      },
      {
        label: 'UPTIME',
        value: '99.999%',
        subtext: 'Multi-region clustering ensuring uninterrupted ticket booking availability',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Legacy REST APIs in AeroLink’s booking infrastructure suffered from severe latency degradation whenever seasonal ticket flash sales triggered 10x traffic spikes.',
        'High database lock contention frequently caused race conditions, resulting in duplicate seat allocations and partner API timeouts that directly lost ticket revenue.',
      ],
      vulnerabilityAlert: {
        title: 'Distributed State Synchronization',
        text: 'Synchronizing real-time seat inventory across multiple global reservation systems required guaranteed ACID consistency without introducing query lag.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We re-engineered the backend core into a distributed Go microservices cluster communicating over binary gRPC and Protocol Buffers.',
        'We implemented distributed redlock algorithms in Redis for instant seat holds, coupled with Apache Kafka event streams to handle asynchronous partner booking confirmations.',
      ],
      subFeatures: [
        {
          title: 'Asynchronous gRPC Microservices',
          description: 'High-performance Go backend services delivering sub-20ms P99 latency under heavy concurrent loads.',
          icon: 'server',
        },
        {
          title: 'Distributed Reservation Lock',
          description: 'Atomic memory locking mechanism eliminating race conditions and double-bookings across partners.',
          icon: 'shield',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'The modernized booking engine comfortably handled a 400% traffic surge during holiday booking rushes with zero downtime and sub-20ms API response times.',
        'Partner integration error rates dropped from 6.8% to under 0.01%, completely eliminating customer double-booking escalations.',
      ],
    },
    testimonial: {
      quote:
        'The new backend engine handles peak traffic surges effortlessly. The architectural precision and Go microservices delivered by the team exceeded all our performance expectations.',
      name: 'Marcus Vance',
      title: 'Chief Technology Officer',
      company: 'AeroLink Global Solutions',
    },
  },
  {
    slug: 'nexis-cloud-infrastructure',
    title: 'Nexis: Automated Multi-Region Cloud & GitOps CI/CD',
    summary:
      'Manual deployment processes caused frequent release outages, slow 4-day release cycles, and costly cloud resource overprovisioning. We automated immutable infrastructure provisioning using Terraform, Kubernetes clusters with auto-scaling, and ArgoCD GitOps pipelines for zero-downtime canary deployments.',
    location: 'Austin, USA',
    industry: 'Cloud Infrastructure / DevOps',
    category: 'custom',
    categoryLabel: 'Cloud & DevOps',
    image: '/images/services_erp_analytics.jpg',
    metric: '< 15min',
    metricLabel: 'DEPLOY TIME',
    services: ['Cloud & DevOps', 'Software Modernization', 'QA & Testing', 'Backend & APIs'],
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Prometheus', 'AWS'],
    tags: ['DevOps Automation', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
    duration: '3 Months',
    team_size: '3 Dedicated Engineers',
    featuredMetric: {
      label: 'Deploy Time',
      value: '< 15min',
      iconName: 'cloud',
    },
    key_results: [
      { metric: '< 15min', label: 'Production Deploy Time' },
      { metric: '0', label: 'Release Outages' },
      { metric: '42%', label: 'Cloud Cost Reduction' },
      { metric: '18/Day', label: 'Deploy Frequency' },
    ],
    outcomeMetrics: [
      {
        label: 'DEPLOY TIME',
        value: '< 15min',
        subtext: 'Automated CI/CD build, security scan, and canary rollout to Kubernetes',
        isHighlighted: true,
      },
      {
        label: 'DEPLOY FREQUENCY',
        value: '18 / Day',
        subtext: 'Teams ship production updates multiple times daily instead of bi-weekly releases',
      },
      {
        label: 'CLOUD SAVINGS',
        value: '42%',
        subtext: 'Horizontal pod autoscaling and spot instance optimization reducing monthly bills',
      },
      {
        label: 'ZERO DOWNTIME',
        value: '100%',
        subtext: 'Automated canary verification rolling back on error rate spikes (>0.1%)',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Nexis was suffering from brittle, manual deployment runbooks where engineers had to manually SSH into cloud servers during late-night maintenance windows.',
        'Human configuration errors regularly caused production downtime, while static server allocation resulted in monthly cloud hosting bills that were 40% higher than necessary.',
      ],
      vulnerabilityAlert: {
        title: 'Manual Deployment Risk',
        text: 'Lack of automated infrastructure parity between staging and production created untracked environment drift and high release anxiety.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We codified the entire infrastructure using Terraform and built Kubernetes clusters on AWS with declarative Helm charts and ArgoCD GitOps controllers.',
        'We introduced automated GitHub Actions pipelines with Trivy container vulnerability scanning and progressive canary rollouts that monitor error rates in real time.',
      ],
      subFeatures: [
        {
          title: 'Infrastructure as Code',
          description: 'Fully automated, version-controlled cloud environments created and destroyed in minutes.',
          icon: 'code',
        },
        {
          title: 'ArgoCD GitOps Pipeline',
          description: 'Automated canary deployments with immediate rollback on anomalous error spikes.',
          icon: 'git',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'Release frequency jumped from once every two weeks to over 18 automated deployments daily with zero customer-facing downtime.',
        'Dynamic auto-scaling reduced idle cloud compute overhead by 42%, saving over $180,000 annually in AWS hosting expenses.',
      ],
    },
    testimonial: {
      quote:
        'Deployments went from being stressful late-night events to effortless, automated background routines. Our engineering velocity and system reliability have never been higher.',
      name: 'Sarah Jenkins',
      title: 'Head of Infrastructure',
      company: 'Nexis Technologies',
    },
  },
  {
    slug: 'globallogix-erp-modernization',
    title: 'GlobalLogix: Legacy Supply Chain & Warehouse ERP Modernization',
    summary:
      'A 12-year-old on-premise monolithic database locked up during daily dispatch cycles, stalling warehouse fulfillment operations across 8 distribution centers. We modernized the core system into containerized microservices with PostgreSQL table partitioning, real-time barcode inventory syncing, and automated billing workflows.',
    location: 'Atlanta, USA',
    industry: 'Supply Chain / ERP',
    category: 'erp',
    categoryLabel: 'Enterprise Software',
    image: '/images/outcome_patient_portal.jpg',
    metric: '99.99%',
    metricLabel: 'WAREHOUSE UPTIME',
    services: ['Enterprise Software', 'Software Modernization', 'Backend & APIs', 'Web Development'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes'],
    tags: ['ERP Modernization', 'Supply Chain', 'PostgreSQL', 'Enterprise Systems'],
    duration: '8 Months',
    team_size: '7 Dedicated Engineers',
    featuredMetric: {
      label: 'Uptime',
      value: '99.99%',
      iconName: 'workflow',
    },
    key_results: [
      { metric: '99.99%', label: 'Warehouse Uptime' },
      { metric: '< 15ms', label: 'Barcode Lookup Speed' },
      { metric: '100%', label: 'Inventory Accuracy' },
      { metric: '8 Centers', label: 'Simultaneous Operations' },
    ],
    outcomeMetrics: [
      {
        label: 'UPTIME',
        value: '99.99%',
        subtext: 'Continuous fulfillment operations across 8 global logistics centers without database lockups',
        isHighlighted: true,
      },
      {
        label: 'SCAN SPEED',
        value: '< 15ms',
        subtext: 'Sub-millisecond barcode lookups on handheld mobile scanners across distribution floors',
      },
      {
        label: 'INVENTORY ACCURACY',
        value: '100%',
        subtext: 'Event-driven Kafka streaming reconciling pallet counts in real time',
      },
      {
        label: 'ZERO DOWNTIME',
        value: '100%',
        subtext: 'Migrated 12 years of transactional records without stopping active warehouse operations',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'GlobalLogix relied on an aging on-premise monolithic database that suffered severe locking bottlenecks during peak morning shipment dispatches.',
        'Warehouse workers experienced 10-second lookup lags on barcode scanners, leading to shipping delays, misrouted inventory, and lost fulfillment contracts.',
      ],
      vulnerabilityAlert: {
        title: 'Monolithic Database Lockup',
        text: 'Unpartitioned database tables containing over 80 million legacy records caused table-level locks that halted warehouse scanning stations.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We executed a staged zero-downtime modernization, migrating the monolithic ERP into high-performance microservices backed by a partitioned PostgreSQL database.',
        'We implemented real-time Apache Kafka event streaming to synchronize barcode scanning terminals, warehouse inventory ledgers, and automated invoicing portals.',
      ],
      subFeatures: [
        {
          title: 'Partitioned PostgreSQL Engine',
          description: 'Optimized schema design reducing complex inventory lookups from 10 seconds to 15 milliseconds.',
          icon: 'database',
        },
        {
          title: 'Real-Time Kafka Pipeline',
          description: 'Event-driven event pipeline reconciling warehouse pallets and stock levels across 8 centers instantly.',
          icon: 'workflow',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'Warehouse scanning latency dropped from 10 seconds to under 15 milliseconds, boosting daily order dispatch throughput by 35%.',
        'GlobalLogix achieved 99.99% operational uptime across all 8 distribution centers with zero database lockups throughout peak holiday shipping seasons.',
      ],
    },
    testimonial: {
      quote:
        'Modernizing our legacy ERP without stopping 24/7 warehouse operations was a massive engineering feat. The system is blazingly fast and completely dependable.',
      name: 'Robert Hastings',
      title: 'Director of Logistics Operations',
      company: 'GlobalLogix Corp',
    },
  },
  {
    slug: 'cortex-ai-document-automation',
    title: 'CortexAI: Automated Document Processing & Intelligence Pipeline',
    summary:
      'Operations staff spent over 300 hours weekly manually extracting data and verifying line items from thousands of unstructured invoices and shipping manifests. We developed an automated AI processing pipeline combining OCR, structured data extraction, and intelligent assistant workflows with a 99.4% extraction accuracy rate.',
    location: 'Boston, USA',
    industry: 'Enterprise AI / Automation',
    category: 'custom',
    categoryLabel: 'AI & Automation',
    image: '/images/services_erp_analytics.jpg',
    metric: '99.4%',
    metricLabel: 'EXTRACTION ACCURACY',
    services: ['AI & Automation', 'Backend & APIs', 'Web Development', 'Cloud & DevOps'],
    technologies: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Docker'],
    tags: ['AI & Automation', 'Document Processing', 'LLM Integration', 'Python'],
    duration: '3 Months',
    team_size: '4 Dedicated Engineers',
    featuredMetric: {
      label: 'Accuracy',
      value: '99.4%',
      iconName: 'sparkles',
    },
    key_results: [
      { metric: '99.4%', label: 'Data Extraction Accuracy' },
      { metric: '300+ hrs', label: 'Weekly Manual Labor Saved' },
      { metric: '< 3s', label: 'Per-Document Processing' },
      { metric: '50k/mo', label: 'Documents Processed' },
    ],
    outcomeMetrics: [
      {
        label: 'ACCURACY',
        value: '99.4%',
        subtext: 'High-precision structured data extraction from multi-format PDFs and scanned invoices',
        isHighlighted: true,
      },
      {
        label: 'LABOR SAVED',
        value: '300+ hrs',
        subtext: 'Weekly operational labor redirected from manual data entry to high-value client tasks',
      },
      {
        label: 'SPEED',
        value: '< 3s',
        subtext: 'End-to-end document upload, OCR parsing, validation, and ERP ledger sync',
      },
      {
        label: 'VOLUME',
        value: '50k / mo',
        subtext: 'Automated document processing pipeline scaling smoothly with enterprise growth',
      },
    ],
    situation: {
      heading: 'The Problem',
      paragraphs: [
        'Accounts payable and logistics teams were manually reading, verifying, and re-typing information from over 50,000 monthly invoices received in varied PDF and image formats.',
        'Manual transcription resulted in human data errors, delayed vendor payment cycles, and over $30,000 monthly in avoidable overtime payroll expenses.',
      ],
      vulnerabilityAlert: {
        title: 'Unstructured Document Variability',
        text: 'Invoices varied wildly across hundreds of vendor formats, requiring an intelligent extraction model that does not break on layout changes.',
      },
    },
    solution: {
      heading: 'What We Built',
      paragraphs: [
        'We engineered an intelligent automated document ingestion pipeline combining optical character recognition (OCR), LangChain agent orchestration, and LLM-powered structured schema validation.',
        'The pipeline validates tax IDs, line item arithmetic, and purchase order matches in under 3 seconds, automatically flagging anomalies for human review while syncing approved records directly into the financial ledger.',
      ],
      subFeatures: [
        {
          title: 'Automated OCR & LLM Extraction',
          description: 'High-accuracy parsing pipeline converting unstructured PDF invoices into validated JSON schemas in seconds.',
          icon: 'sparkles',
        },
        {
          title: 'Anomaly & Fraud Verification',
          description: 'Automated arithmetic and PO matching rules identifying duplicate billings and pricing discrepancies.',
          icon: 'shield',
        },
      ],
    },
    result: {
      heading: 'The Result',
      paragraphs: [
        'CortexAI automated 92% of all incoming document processing with zero manual touch, reducing invoice turnaround time from 4 days to under 3 minutes.',
        'The operations team eliminated over 300 hours of weekly manual data entry, saving more than $360,000 in annual operational overhead.',
      ],
    },
    testimonial: {
      quote:
        'The AI automation pipeline delivered by the team solved a real operational headache for us. It is fast, remarkably accurate, and integrated seamlessly with our existing systems.',
      name: 'Elena Rodriguez',
      title: 'Chief Operating Officer',
      company: 'Cortex Global Logistics',
    },
  },
]
