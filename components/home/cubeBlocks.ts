import { OutsourcingBlock, FaceOrientation } from '@/types/animation';

export const CUBE_BLOCKS: OutsourcingBlock[] = [
  {
    id: 1,
    face: 'front',
    code: '01',
    title: 'WEB DEVELOPMENT',
    subtitle: 'SCALABLE, FULL-STACK PLATFORMS',
    tag: 'WEB & CLOUD',
    bullets: [
      'Next.js & React engineering',
      'Cloud-native, edge-optimized',
      'Built to scale from day one',
    ],
    iconName: 'Layers',
  },
  {
    id: 2,
    face: 'right',
    code: '02',
    title: 'MOBILE APP DEVELOPMENT',
    subtitle: 'NATIVE iOS & ANDROID',
    tag: 'MOBILE APPS',
    bullets: [
      'React Native & Flutter builds',
      'Offline-first architecture',
      'Smooth, native-grade UX',
    ],
    iconName: 'Zap',
  },
  {
    id: 3,
    face: 'back',
    code: '03',
    title: 'ERP & ENTERPRISE SYSTEMS',
    subtitle: 'MISSION-CRITICAL PLATFORMS',
    tag: 'ENTERPRISE',
    bullets: [
      'Custom ERP & finance modules',
      'High-throughput data pipelines',
      'Built-in audit & compliance',
    ],
    iconName: 'Cpu',
  },
  {
    id: 4,
    face: 'left',
    code: '04',
    title: 'CLOUD & DEVOPS',
    subtitle: 'RESILIENT INFRASTRUCTURE',
    tag: 'DEVOPS & SCALE',
    bullets: [
      'Kubernetes, Terraform, AWS/GCP',
      'Multi-region active failover',
      'Automated CI/CD delivery',
    ],
    iconName: 'Box',
  },
  {
    id: 5,
    face: 'top',
    code: '05',
    title: 'DEDICATED DEV TEAMS',
    subtitle: 'SENIOR ENGINEERS, ON DEMAND',
    tag: 'DEDICATED TEAMS',
    bullets: [
      'Pre-vetted senior engineers',
      'Full timezone overlap',
      'Onboarded within 48 hours',
    ],
    iconName: 'Users',
  },
  {
    id: 6,
    face: 'bottom',
    code: '06',
    title: 'SECURITY & COMPLIANCE',
    subtitle: 'ENTERPRISE-GRADE PROTECTION',
    tag: 'SECURITY FIRST',
    bullets: [
      'SOC 2 & ISO 27001 aligned',
      'Automated SAST/DAST scanning',
      'Full IP ownership, guaranteed',
    ],
    iconName: 'ShieldCheck',
  },
];

export const FACE_ORIENTATIONS: Record<
  FaceOrientation,
  { label: string; rotX: number; rotY: number; code: string; name: string }
> = {
  front: { label: 'FRONT', rotX: 0, rotY: 0, code: '01', name: 'WEB' },
  right: { label: 'RIGHT', rotX: 0, rotY: -90, code: '02', name: 'MOBILE' },
  back: { label: 'BACK', rotX: 0, rotY: 180, code: '03', name: 'ERP' },
  left: { label: 'LEFT', rotX: 0, rotY: 90, code: '04', name: 'CLOUD' },
  top: { label: 'TOP', rotX: -90, rotY: 0, code: '05', name: 'SQUADS' },
  bottom: { label: 'BOTTOM', rotX: 90, rotY: 0, code: '06', name: 'SECURITY' },
};
