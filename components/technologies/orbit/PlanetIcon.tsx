import React from 'react'
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Server,
  Box,
  FileCode2,
  Shield,
  Smartphone,
  Radio,
  GitBranch,
} from 'lucide-react'

interface PlanetIconProps {
  name: string
  className?: string
}

export const PlanetIcon: React.FC<PlanetIconProps> = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'Smartphone':
      return <Smartphone className={className} />
    case 'Atom':
    case 'Code2':
      return <Code2 className={className} />
    case 'FileCode2':
      return <FileCode2 className={className} />
    case 'Sparkles':
      return <Sparkles className={className} />
    case 'Layers':
      return <Layers className={className} />
    case 'Server':
      return <Server className={className} />
    case 'Database':
      return <Database className={className} />
    case 'Box':
      return <Box className={className} />
    case 'Shield':
      return <Shield className={className} />
    case 'Cpu':
      return <Cpu className={className} />
    case 'Radio':
      return <Radio className={className} />
    case 'Globe':
      return <Globe className={className} />
    case 'GitBranch':
      return <GitBranch className={className} />
    case 'Zap':
    default:
      return <Zap className={className} />
  }
}
