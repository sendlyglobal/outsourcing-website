export type ColorTheme = 'teal' | 'electric' | 'emerald' | 'sunset' | 'monochrome';
export type InteractionMode = 'connect' | 'repel' | 'attract' | 'orbit';
export type GlobeTheme = 'cyan' | 'gold' | 'emerald' | 'violet' | 'monochrome';
export type TechDomain = 'web' | 'mobile' | 'erp';

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
  domain: 'web' | 'mobile' | 'erp';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tooling' | 'mobile-ui' | 'native' | 'core-erp' | 'integration' | 'security';
  orbitRadius: number; // in pixels relative to base scale
  speed: number; // angular speed factor (radians/sec)
  initialAngle: number; // initial angle in radians
  size: number; // planet diameter
  color: string; // hex / tailwind color
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
  domain: 'web' | 'mobile' | 'erp';
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


