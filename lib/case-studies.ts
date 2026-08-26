import { CaseStudy } from '@/types/case-study'

export const CASE_STUDIES: CaseStudy[] = [
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
    services: ['Mobile Application', 'Web Platforms', 'Cloud Architecture', 'Payment Gateway Integration'],
    technologies: ['React Native', 'Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
    tags: ['Cross-Border Remittance', 'Mobile Development', 'Web Development', 'FinTech Security'],
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
        subtext: 'Average end-to-end remittance settlement from USA to Ethiopia bank/telebirr accounts',
        isHighlighted: true,
      },
      {
        label: 'CROSS-PLATFORM',
        value: '100%',
        subtext: 'Seamless parity across iOS, Android, and Web applications',
      },
      {
        label: 'RELIABILITY',
        value: '99.99%',
        subtext: 'Continuous financial transaction processing with multi-region redundancy',
      },
      {
        label: 'FEE REDUCTION',
        value: '60%',
        subtext: 'Average savings compared to traditional physical wire agents',
      },
    ],
    situation: {
      heading: 'Phase 1: The Situation',
      paragraphs: [
        'Sending money from the United States to Ethiopia has historically been slow, expensive, and fragmented. Existing money transfer operators required senders to visit physical branch locations during business hours, fill out paper forms, and pay steep transfer fees of 8–12%, with recipients waiting days for bank clearing.',
        'There was no intuitive, direct mobile-first solution empowering users in the USA to instantly initiate remittances from their smartphones directly into Ethiopian commercial bank accounts and mobile wallets. Sendly was conceived to eliminate this friction through a modern cross-platform mobile app and web platform.',
      ],
      vulnerabilityAlert: {
        title: 'Cross-Border Compliance & FX Volatility',
        text: 'Cross-border remittances require strict KYC/AML verification, real-time FX rate locks, and resilient integration with disparate banking APIs without exposing user financial credentials.',
      },
    },
    solution: {
      heading: 'Phase 2: The Solution',
      paragraphs: [
        'We engineered Sendly from the ground up as a unified, full-stack cross-platform ecosystem. Using React Native for mobile (iOS & Android) and Next.js for the responsive web portal, senders enjoy an identical, frictionless experience across all devices.',
        'The backend was architected with NestJS and PostgreSQL in a containerized Docker environment on AWS, featuring automated KYC identity verification, bank ACH / debit card funding rails, and direct API adapters connecting to Ethiopian banking networks and mobile money switches.',
      ],
      subFeatures: [
        {
          title: 'Unified Mobile & Web Core',
          description:
            'Shared design system and state synchronization across iOS, Android, and Next.js web application.',
          icon: 'cpu',
        },
        {
          title: 'Instant FX Rate Locking',
          description:
            'Real-time liquidity and foreign exchange rate lock engine preventing slippage during transfer finalization.',
          icon: 'cloud',
        },
      ],
    },
    result: {
      heading: 'Phase 3: The Result',
      paragraphs: [
        'Sendly launched to widespread acclaim within the Ethiopian diaspora in the United States, processing over $4.2M in remittances within the first 90 days with an average transfer completion time under 30 seconds.',
        'By replacing physical remittance agents with a sleek, self-serve mobile and web experience, Sendly reduced transfer costs by over 60% and achieved a 99.99% transaction reliability rate across all participating Ethiopian banks.',
      ],
    },
    testimonial: {
      quote:
        'Sendly transformed how our community supports families back home. The engineering team delivered a rock-solid, ultra-fast mobile and web platform that makes sending money as simple as sending a text message.',
      name: 'Abel Woldemichael',
      title: 'Founder & CEO',
      company: 'Sendly Global',
    },
  },
  {
    slug: 'global-supply-chain-optimization',
    title: 'Global Supply Chain Optimization',
    summary:
      'Engineered a unified, real-time tracking architecture that reduced logistical bottlenecks and improved inventory forecasting accuracy across 40+ regional distribution centers.',
    location: 'Berlin, Germany',
    industry: 'Logistics & Supply Chain',
    category: 'erp',
    categoryLabel: 'ERP Modernization',
    image: '/images/outcome_supply_chain.jpg',
    metric: '40%',
    metricLabel: 'EFFICIENCY GAIN',
    services: ['ERP Development', 'Cloud Architecture', 'Performance Optimization'],
    technologies: ['PostgreSQL', 'Kafka', 'Go'],
    tags: ['ERP Modernization', 'Real-Time Telemetry', 'Distributed Systems'],
    duration: '6 Months',
    team_size: '6 Senior Engineers, 1 Architect',
    featuredMetric: {
      label: 'Latency Reduction',
      value: '42%',
      iconName: 'gauge',
    },
    key_results: [
      { metric: '42%', label: 'Latency Reduction' },
      { metric: '40%', label: 'Operational Efficiency' },
      { metric: '99.99%', label: 'Uptime' },
    ],
    outcomeMetrics: [
      {
        label: 'LATENCY REDUCTION',
        value: '42%',
        subtext: 'Global database query latency dropped from 3.8s to sub-200ms',
        isHighlighted: true,
      },
      {
        label: 'WAREHOUSE NODES',
        value: '40+',
        subtext: 'Synchronized cross-continent hubs in real time',
      },
      {
        label: 'SYSTEM AVAILABILITY',
        value: '99.99%',
        subtext: 'Multi-region failover cluster on AWS',
      },
      {
        label: 'INVENTORY ACCURACY',
        value: '99.8%',
        subtext: 'Eliminated phantom inventory discrepancies',
      },
    ],
    situation: {
      heading: 'Phase 1: The Situation',
      paragraphs: [
        'An international supply chain conglomerate was operating across 40+ logistics hubs using a monolithic, 12-year-old on-premise ERP. Warehouse shifts experienced massive latency spikes during batch synchronization cycles.',
        'Data inconsistency between inventory databases led to critical misallocations, missed delivery SLAs, and over £3.2M in annual inventory write-offs.',
      ],
      vulnerabilityAlert: {
        title: 'Cascading Synchronization Latency',
        text: 'Nightly batch sync jobs routinely overlapped with early morning warehouse picking cycles, crippling database I/O.',
      },
    },
    solution: {
      heading: 'Phase 2: The Solution',
      paragraphs: [
        'RiseUp designed an event-driven telemetry pipeline with Apache Kafka and distributed Go services on AWS. All warehouse IoT checkpoints and ERP transactions now stream continuously in real time.',
      ],
      subFeatures: [
        {
          title: 'Event-Driven Telemetry',
          description:
            'Apache Kafka cluster ingesting over 45,000 inventory state changes per second with zero data loss.',
          icon: 'database',
        },
        {
          title: 'Distributed In-Memory Caching',
          description:
            'Multi-region Redis caching layer providing instant localized read access to active stock inventories.',
          icon: 'cloud',
        },
      ],
    },
    result: {
      heading: 'Phase 3: The Result',
      paragraphs: [
        'End-to-end data latency dropped by 42%, enabling sub-second real-time tracking across all 40+ logistics facilities worldwide.',
        'Inventory accuracy rose to 99.8%, completely eliminating phantom stock discrepancies and speeding dispatch times by 35%.',
      ],
    },
    testimonial: {
      quote:
        'RiseUp transformed our supply chain backbone into a high-performance system that scales seamlessly across all continents.',
      name: 'Klaus Reinhardt',
      title: 'VP of Engineering',
      company: 'TransGlobal Logistics',
    },
  },
  {
    slug: 'secure-neo-banking-platform',
    title: 'Secure Neo-Banking Platform',
    summary:
      'Designed and developed a zero-trust mobile banking architecture with advanced biometric authentication and real-time fraud detection engines for a rapidly scaling FinTech startup.',
    location: 'London, UK',
    industry: 'FinTech',
    category: 'mobile',
    categoryLabel: 'Mobile & Security',
    image: '/images/outcome_neobank_app.jpg',
    metric: '2.5M',
    metricLabel: 'ACTIVE USERS',
    services: ['Mobile Apps', 'Cybersecurity & Compliance', 'Backend Engineering'],
    technologies: ['React Native', 'Node.js', 'AWS KMS'],
    tags: ['Zero-Trust Architecture', 'Biometrics', 'FCA Compliance'],
    duration: '5 Months',
    team_size: '5 Mobile Engineers, 3 Backend Engineers',
    featuredMetric: {
      label: 'Active Users',
      value: '2.5M',
      iconName: 'users',
    },
    key_results: [
      { metric: '2.5M', label: 'Active Users' },
      { metric: '99.99%', label: 'Platform Uptime' },
      { metric: '<150ms', label: 'Transaction Latency' },
    ],
    outcomeMetrics: [
      {
        label: 'ACTIVE USERS',
        value: '2.5M',
        subtext: 'Onboarded within 12 months post-launch',
        isHighlighted: true,
      },
      {
        label: 'TRANSACTION SPEED',
        value: '<150ms',
        subtext: 'Average end-to-end payment processing time',
      },
      {
        label: 'COMPLIANCE AUDIT',
        value: '100%',
        subtext: 'Zero audit findings across FCA and SOC2 checks',
      },
      {
        label: 'APP STORE RATING',
        value: '4.9★',
        subtext: 'Over 65,000 verified user reviews',
      },
    ],
    situation: {
      heading: 'Phase 1: The Situation',
      paragraphs: [
        'A fast-growing UK neo-bank needed to launch a full-featured mobile banking experience while facing aggressive launch deadlines and strict FCA regulatory audits.',
        'Their legacy prototype could not handle peak transaction volumes and lacked enterprise-grade hardware key security.',
      ],
      vulnerabilityAlert: {
        title: 'Authentication & Concurrency Risk',
        text: 'Unencrypted session tokens and single-thread backend processing threatened both regulatory compliance and user trust.',
      },
    },
    solution: {
      heading: 'Phase 2: The Solution',
      paragraphs: [
        'RiseUp engineered a zero-trust mobile architecture using React Native with native cryptographic bridges to iOS Secure Enclave and Android KeyStore, supported by a scalable Node.js microservices cluster.',
      ],
      subFeatures: [
        {
          title: 'Hardware-Backed Biometrics',
          description:
            'Direct integration with Secure Enclave and KeyStore for cryptographic signature verification.',
          icon: 'shield',
        },
        {
          title: 'Real-Time Fraud Engine',
          description:
            'Low-latency risk-scoring pipeline evaluating every transaction against 14 heuristic security rules in under 15ms.',
          icon: 'cpu',
        },
      ],
    },
    result: {
      heading: 'Phase 3: The Result',
      paragraphs: [
        'The mobile platform passed all FCA penetration and compliance audits with zero red flags and scaled to 2.5 million active accounts within its first year of operation.',
        'Uptime has remained at 99.99% with sub-150ms transaction latency even during monthly payroll settlement rushes.',
      ],
    },
    testimonial: {
      quote:
        'The engineering rigor RiseUp brought to our banking core allowed us to pass all security audits on the first pass.',
      name: 'Sophie Laurent',
      title: 'Head of Mobile',
      company: 'Aura Financial',
    },
  },
  {
    slug: 'hipaa-compliant-data-lake',
    title: 'HIPAA-Compliant Patient Data Lake',
    summary:
      'Architected a secure, scalable patient data ingestion pipeline aggregating real-time diagnostics across disparate clinical systems and hospital EHR networks.',
    location: 'Boston, USA',
    industry: 'Healthcare & Life Sciences',
    category: 'web',
    categoryLabel: 'Healthcare',
    image: '/images/outcome_patient_portal.jpg',
    metric: '10x',
    metricLabel: 'FASTER SYNC',
    services: ['Web Platforms', 'Custom Systems', 'API Integration'],
    technologies: ['AWS', 'Python', 'FastAPI'],
    tags: ['HIPAA Compliance', 'FHIR Protocols', 'Cloud Ingestion'],
    duration: '4 Months',
    team_size: '4 Full-Stack Engineers, 1 Compliance Officer',
    featuredMetric: {
      label: 'Sync Acceleration',
      value: '10x',
      iconName: 'rocket',
    },
    key_results: [
      { metric: '10x', label: 'Faster Sync' },
      { metric: '100%', label: 'HIPAA Compliance' },
      { metric: '180K', label: 'Patients Onboarded' },
    ],
    outcomeMetrics: [
      {
        label: 'DATA INGESTION',
        value: '10x',
        subtext: 'Faster diagnostic record synchronization',
        isHighlighted: true,
      },
      {
        label: 'PATIENT RECORDS',
        value: '180K',
        subtext: 'Securely indexed with end-to-end encryption',
      },
      {
        label: 'CLINICAL ADOPTION',
        value: '1,200+',
        subtext: 'Active doctors and care specialists',
      },
      {
        label: 'AUDIT COMPLIANCE',
        value: '100%',
        subtext: 'Full HIPAA and HITECH certification achieved',
      },
    ],
    situation: {
      heading: 'Phase 1: The Situation',
      paragraphs: [
        'A regional healthcare network was burdened by siloed EHR databases, requiring clinicians to manually reconcile laboratory results and patient diagnostics across 3 distinct legacy portals.',
        'Delayed data access was slowing clinical decision-making during acute care consultations.',
      ],
      vulnerabilityAlert: {
        title: 'Unencrypted Internal Interfaces',
        text: 'Legacy internal hospital endpoints lacked TLS 1.3 encryption and granular role-based access logs.',
      },
    },
    solution: {
      heading: 'Phase 2: The Solution',
      paragraphs: [
        'Engineered a unified patient portal leveraging Python FastAPI microservices, AWS Healthcare data pipelines, and FHIR standard APIs with automated end-to-end encryption at rest and in transit.',
      ],
      subFeatures: [
        {
          title: 'FHIR Standard Pipeline',
          description:
            'Unified schemas across disparate hospital databases using HL7 FHIR protocols.',
          icon: 'database',
        },
        {
          title: 'Zero-Trust Role Access',
          description:
            'Granular cryptographic access tokens with strict audit logging for all patient record queries.',
          icon: 'shield',
        },
      ],
    },
    result: {
      heading: 'Phase 3: The Result',
      paragraphs: [
        'Cut lab result delivery times from 4 hours to instantaneous push notifications, securely serving over 180,000 patients and 1,200 active clinicians with zero compliance violations.',
      ],
    },
    testimonial: {
      quote:
        'RiseUp delivered a critical healthcare platform that our clinical staff relies on 24/7 without friction.',
      name: 'Dr. David Sterling',
      title: 'Chief Medical Information Officer',
      company: 'NorthEast Health Alliance',
    },
  },
  {
    slug: 'ledger-synchronization-system',
    title: 'Ledger Synchronization System',
    summary:
      'Building a real-time reconciliation engine processing 2M+ transactions daily with mathematical consistency and distributed auditability.',
    location: 'Zurich, Switzerland',
    industry: 'FinTech',
    category: 'erp',
    categoryLabel: 'FinTech',
    image: '/images/outcome_supply_chain.jpg',
    metric: '2M+',
    metricLabel: 'DAILY TXNS',
    services: ['Custom Systems', 'Distributed Architecture', 'High Throughput'],
    technologies: ['Rust', 'Kafka', 'PostgreSQL'],
    tags: ['Distributed Ledger', 'High Throughput', 'Financial Reconciliation'],
    duration: '5 Months',
    team_size: '4 Systems Engineers',
    featuredMetric: {
      label: 'Daily Transactions',
      value: '2M+',
      iconName: 'chart',
    },
    key_results: [
      { metric: '2M+', label: 'Daily Transactions' },
      { metric: '0', label: 'Reconciliation Discrepancies' },
      { metric: '<5ms', label: 'Engine Latency' },
    ],
    outcomeMetrics: [
      {
        label: 'TRANSACTION VOLUME',
        value: '2M+',
        subtext: 'Daily operations verified in real time',
        isHighlighted: true,
      },
      {
        label: 'ENGINE LATENCY',
        value: '<5ms',
        subtext: 'Sub-5 millisecond reconciliation window',
      },
      {
        label: 'DATA ACCURACY',
        value: '100%',
        subtext: 'Mathematical consistency across double-entry books',
      },
      {
        label: 'AUDIT COMPLIANCE',
        value: 'FINMA',
        subtext: 'Full Swiss financial regulatory compliance',
      },
    ],
    situation: {
      heading: 'Phase 1: The Situation',
      paragraphs: [
        'A Swiss institutional brokerage was experiencing operational friction reconciling cross-border currency trades across four international liquidity providers with differing settlement timeframes.',
      ],
    },
    solution: {
      heading: 'Phase 2: The Solution',
      paragraphs: [
        'Engineered a deterministic Rust-based double-entry ledger that processes incoming financial events via Apache Kafka with zero lock contention and microsecond state synchronization.',
      ],
    },
    result: {
      heading: 'Phase 3: The Result',
      paragraphs: [
        'Reconciles over 2 million transactions daily with zero discrepancies and full cryptographic audit trails.',
      ],
    },
    testimonial: {
      quote:
        'The Rust engine built by RiseUp gives us complete confidence in our real-time reconciliation pipeline.',
      name: 'Marc Steiner',
      title: 'Head of Trading Operations',
      company: 'Helvetia Financial',
    },
  },
]
