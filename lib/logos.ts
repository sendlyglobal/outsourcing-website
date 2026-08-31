import { StaticImageData } from 'next/image'
import KubernetesLogo from '@/public/logos/Kubernetes.png'
import NextJsLogo from '@/public/logos/Next Js.png'
import SqlLogo from '@/public/logos/SQL File.png'
import DockerLogo from '@/public/logos/docker.png'
import FlutterLogo from '@/public/logos/flutter-logo.png'
import NodeJsLogo from '@/public/logos/nodejs.png'
import ReactLogo from '@/public/logos/react.png'
import TailwindLogo from '@/public/logos/tailwind-css.png'
import TypeScriptLogo from '@/public/logos/typescript.png'

export {
  KubernetesLogo,
  NextJsLogo,
  SqlLogo,
  DockerLogo,
  FlutterLogo,
  NodeJsLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
}

export const TECH_LOGOS: Record<string, StaticImageData> = {
  'Kubernetes': KubernetesLogo,
  'k8s': KubernetesLogo,
  'Next.js': NextJsLogo,
  'Next Js': NextJsLogo,
  'Next': NextJsLogo,
  'PostgreSQL': SqlLogo,
  'SQL': SqlLogo,
  'Postgres': SqlLogo,
  'Docker': DockerLogo,
  'Flutter': FlutterLogo,
  'Node.js': NodeJsLogo,
  'Node': NodeJsLogo,
  'Nodejs': NodeJsLogo,
  'React': ReactLogo,
  'React Native': ReactLogo,
  'Tailwind CSS': TailwindLogo,
  'Tailwind': TailwindLogo,
  'TypeScript': TypeScriptLogo,
  'TS': TypeScriptLogo,
}

export function getTechLogo(name: string): StaticImageData | null {
  const normalized = name.trim()
  if (TECH_LOGOS[normalized]) return TECH_LOGOS[normalized]
  for (const [key, logo] of Object.entries(TECH_LOGOS)) {
    if (normalized.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(normalized.toLowerCase())) {
      return logo
    }
  }
  return null
}
