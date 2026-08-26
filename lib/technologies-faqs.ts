import { TechDomain } from '@/types/animation'

export interface FAQItem {
  question: string
  answer: string
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'How do you choose the right stack for my project?',
    answer:
      'We evaluate your projected transaction volume, concurrency requirements, latency thresholds, regulatory compliance frameworks (such as SOC2, HIPAA, or FCA), and existing internal engineering talent before prescribing an optimal tech stack. We prioritize maintainable, battle-tested production runtimes over transient trends.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer:
      'Yes. Our team frequently embeds into existing enterprise teams or takes over legacy systems. We begin with a comprehensive architecture & security audit, identify performance bottlenecks, and establish zero-downtime refactoring pipelines or microservices decomposition strategies.',
  },
  {
    question: 'How senior is the team assigned to my stack?',
    answer:
      'We only assign senior engineers and principal architects who possess  years of rigorous production engineering experience. Every team lead has architected and operated high-availability distributed systems at scale.',
  },
  {
    question: 'Do you handle migrations from legacy systems?',
    answer:
      'Yes. We specialize in de-risking monolithic transitions. We design event-driven synchronization pipelines, automated data reconciliation engines, and parallel-run environments that guarantee zero transaction loss during cutover.',
  },
]

export const DOMAIN_FAQS: Record<TechDomain, FAQItem[]> = {
  web: [
    {
      question: 'How do you determine between Server-Side Rendering (SSR), Static Generation (SSG), and Client Rendering?',
      answer:
        'We tailor the rendering strategy at the route and component level. Marketing and documentation routes leverage Incremental Static Regeneration (ISR) for sub-50ms TTFB and SEO excellence, while authenticated dashboards and real-time workspaces utilize React Server Components with streaming SSR to eliminate client bundle bloat.',
    },
    {
      question: 'How do you ensure sub-second Core Web Vitals and performance scores?',
      answer:
        'We enforce strict performance budgets in CI/CD pipelines, optimizing Largest Contentful Paint (LCP) via edge CDN caching, image format transcoding (AVIF/WebP), font subsetting, and route-based code-splitting to guarantee 95+ Google Lighthouse scores across devices.',
    },
    {
      question: 'What is your architectural standard for state management and API data synchronization?',
      answer:
        'We decouple server state from local UI state using TanStack Query or GraphQL Apollo Client for aggressive cache invalidation, optimistic UI mutations, and request deduplication, combined with lightweight Zustand stores for global client state.',
    },
    {
      question: 'How do you approach automated testing and end-to-end quality assurance for web apps?',
      answer:
        'We implement a rigorous testing pyramid: unit and integration tests using Vitest and React Testing Library, contract tests for API schemas, and automated cross-browser end-to-end regression suites running on Playwright within our CI pipelines.',
    },
    {
      question: 'How do you handle global multi-region deployments and zero-downtime releases?',
      answer:
        'We deploy frontend layers to distributed edge nodes (Cloudflare Workers / Vercel Edge) with automated atomic rollbacks and canary deployments. Static assets are geographically distributed across global CDN PoPs with immutable cache headers.',
    },
    {
      question: 'What security practices are enforced across frontend applications?',
      answer:
        'We enforce strict Content Security Policies (CSP), HTTP-only secure SameSite cookies for session management, automated SAST vulnerability scanning against npm dependencies, and automated sanitization against Cross-Site Scripting (XSS) and CSRF attacks.',
    },
  ],

  mobile: [
    {
      question: 'How do you advise clients between React Native, Flutter, and 100% Pure Native (Swift / Kotlin)?',
      answer:
        'We select React Native or Flutter when cross-platform code sharing (90%+) and rapid time-to-market across iOS and Android are paramount without sacrificing 60-120 FPS UI performance. For hardware-intensive apps requiring low-level Bluetooth LE, ARKit, or custom Metal/Vulkan GPU shaders, we engineer dedicated native modules in Swift and Kotlin.',
    },
    {
      question: 'How do you achieve resilient offline-first data sync in mobile applications?',
      answer:
        'We implement local embedded stores (WatermelonDB, Realm, or SQLite with SQLCipher encryption) paired with operational transformation or CRDT-based background sync engines. Transactions queue deterministically when offline and reconcile automatically upon reconnect.',
    },
    {
      question: 'What is your automated mobile CI/CD and App Store deployment workflow?',
      answer:
        'We use Fastlane and cloud CI/CD pipelines to automate cryptographic code signing, provisioning profiles, dynamic version increments, screenshot generation, and direct automated delivery to Apple TestFlight and Google Play Internal Testing tracks.',
    },
    {
      question: 'Can you deploy urgent hotfixes and patches without waiting for App Store review?',
      answer:
        'Yes. For React Native and Flutter architectures, we integrate Over-The-Air (OTA) update pipelines (such as Expo EAS Update) to deploy critical JavaScript/Dart bug fixes directly to active users within minutes, strictly adhering to Apple and Google store guidelines.',
    },
    {
      question: 'How do you manage device fragmentation, battery consumption, and memory leaks on Android and iOS?',
      answer:
        'We profile apps continuously using Instruments (iOS) and Android Profiler, monitoring heap allocations, frame render drops, and background thread wakeups. We test across an automated device farm representing various screen sizes, OS versions, and hardware specifications.',
    },
    {
      question: 'How are sensitive credentials, biometric auth, and push notifications handled securely?',
      answer:
        'We store authentication tokens in iOS Keychain and Android Keystore backed by hardware Secure Enclave. Push notifications utilize unified APNs and FCM pipelines with payload encryption to prevent sensitive data exposure in notifications.',
    },
  ],

  erp: [
    {
      question: 'How do you integrate modern custom software with legacy ERP systems like SAP, Oracle, or Microsoft Dynamics?',
      answer:
        'We build high-throughput integration gateways using MuleSoft, Kafka, or custom microservices that interface with SAP BAPIs, OData endpoints, or RFC protocols. We translate legacy SOAP/EDI payloads into clean REST and GraphQL contracts with zero disruption to core ledgers.',
    },
    {
      question: 'How do you guarantee strict transactional consistency across distributed enterprise systems?',
      answer:
        'We implement the Saga Pattern orchestrated via Temporal or Camunda with compensating transactions to ensure distributed atomicity across multi-service workflows, eliminating partial state corruption during network splits or service failures.',
    },
    {
      question: 'How do you execute database schema migrations on multi-terabyte production databases with zero downtime?',
      answer:
        'We utilize expand-and-contract (dual-write) migration patterns and tools like pgroll or gh-ost. Schema changes are deployed in backward-compatible phases, running parallel writes until verification before dropping deprecated columns.',
    },
    {
      question: 'What compliance frameworks, audit trails, and security controls are built into your ERP solutions?',
      answer:
        'Every transaction writes to an immutable append-only audit log with cryptographic hash verification. We implement granular Role-Based and Attribute-Based Access Control (RBAC/ABAC), SAML 2.0 / OpenID Connect SSO, and enforce SOC2, HIPAA, and GDPR compliance standards.',
    },
    {
      question: 'How do you handle real-time enterprise reporting without degrading transactional database performance?',
      answer:
        'We deploy Change Data Capture (CDC via Debezium) off primary PostgreSQL/SQL Server databases into Kafka, continuously streaming transformed updates to columnar OLAP warehouses (ClickHouse or Snowflake) for instantaneous aggregation across billions of records.',
    },
    {
      question: 'What is your disaster recovery (DR) strategy and RPO / RTO targets for enterprise systems?',
      answer:
        'We design multi-region active-passive or active-active cloud architectures with continuous database replication, automated failover DNS routing, and hourly immutable snapshot backups, achieving Recovery Point Objectives (RPO) < 1 minute and Recovery Time Objectives (RTO) < 15 minutes.',
    },
  ],

  custom: [
    {
      question: 'When do you choose Go vs Rust vs Python for custom backend architectures?',
      answer:
        'We choose Go for high-concurrency microservices, network proxies, and cloud infrastructure where fast compile times and goroutine concurrency are ideal. We choose Rust when zero-cost memory safety, deterministic latency without garbage collection pauses, and maximum CPU utilization are mandatory. We choose Python for AI pipelines, mathematical modeling, and automated data processing.',
    },
    {
      question: 'How do you achieve microsecond latency in inter-service RPC communication?',
      answer:
        'We engineer inter-service communication over gRPC with Protocol Buffers on HTTP/2 or QUIC transports. Binary serialization avoids the parsing overhead of JSON/XML, reducing network payloads by up to 80% and serializing 10x faster than REST.',
    },
    {
      question: 'What distributed message streaming technologies do you deploy for heavy data ingestion?',
      answer:
        'We deploy Apache Kafka or NATS JetStream depending on throughput and storage requirements. For ultra-lightweight sub-millisecond pub/sub and distributed work queues, NATS provides exceptional density, while Kafka handles multi-terabyte event sourcing and replayable streams.',
    },
    {
      question: 'How do you architect high-volume time-series and IoT sensor data pipelines?',
      answer:
        'We utilize specialized time-series storage engines (TimescaleDB or ClickHouse) with automatic table partitioning (hypertables), aggressive columnar data compression (90%+ reduction), and real-time materialized continuous aggregates for instantaneous metric querying.',
    },
    {
      question: 'How do you implement low-overhead observability and security profiling at the kernel level?',
      answer:
        'We utilize eBPF (Extended Berkeley Packet Filter) to attach sandboxed probes directly into the Linux kernel. This allows deep tracing of network latency, TCP connections, system calls, and security anomalies with negligible CPU and memory overhead.',
    },
    {
      question: 'How do you ensure consensus and fault tolerance in multi-node distributed clusters?',
      answer:
        'We leverage established consensus algorithms such as Raft (via HashiCorp Serf/Consul or etcd) for leader election, configuration propagation, and distributed locking, ensuring split-brain resistance and cluster self-healing during network partitions.',
    },
  ],
}
