export type ColorTheme = 'teal' | 'electric' | 'emerald' | 'sunset' | 'monochrome';
export type InteractionMode = 'connect' | 'repel' | 'attract' | 'orbit';
export type GlobeTheme = 'cyan' | 'gold' | 'emerald' | 'violet' | 'monochrome';
export type TechDomain = 'web' | 'mobile' | 'erp' | 'custom';

export interface CityNode {
  name: string;
  lat: number;
  lng: number;
  country: string;
  activeLatency: string;
}

export type ActiveAnimationPage = 'orbit' | 'timeline' | 'cursor' | 'globe' | 'matrix';

export interface WebTechPlanet {
  id: string;
  name: string;
  domain: 'web' | 'mobile' | 'erp' | 'custom';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tooling' | 'mobile-ui' | 'native' | 'core-erp' | 'integration' | 'security' | 'systems' | 'low-level' | 'distributed' | 'ai-data';
  orbitRadius: number;
  speed: number;
  initialAngle: number;
  size: number;
  color: string;
  glowColor: string;
  iconName: string;
  role: string;
  description: string;
  keyFeatures: string[];
  techStackTier: string;
  popularity: string;
  benchmarks?: string;
}

export interface TimelineStep {
  id: string;
  stepNumber: string;
  domain: 'web' | 'mobile' | 'erp' | 'custom';
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  output: string;
  keyActivities: string[];
  artifacts: string[];
  iconName: string;
  tag: string;
}

export interface ThemeProps {
  isDark?: boolean;
  setIsDark?: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export type FaceOrientation = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';

export interface OutsourcingBlock {
  id: number;
  face: FaceOrientation;
  code: string;
  title: string;
  subtitle: string;
  tag: string;
  bullets: string[];
  iconName: 'Users' | 'Layers' | 'Cpu' | 'ShieldCheck' | 'Zap' | 'Box' | 'Activity' | 'Terminal' | 'Lock';
  metric?: string;
  metricLabel?: string;
  techStack?: string[];
  extendedDetails?: {
    overview: string;
    capabilities: string[];
    slaMetrics: { label: string; value: string }[];
    deploymentModel: string;
    securityStandard: string;
  };
}

export interface CubeAngles {
  rotX: number;
  rotY: number;
}


export type MethodologyCategory = 'all' | 'web' | 'mobile' | 'devops';

export interface MethodologyStep {
  id: string;
  stepNumber: number;
  code: string;
  title: string;
  category: 'web' | 'mobile' | 'devops' | 'architecture';
  categoryLabel: string;
  subtitle: string;
  summary: string;
  keyPractices: string[];
  deliverables: string[];
  techStack: string[];
  kpis: { label: string; value: string; trend?: string }[];
  icon: string;
  phaseDuration: string;
  bestPractices: string[];
}