import React from 'react'
import FixTypeLater from './FixTypeLater'

type PlaceableSVGProps = {
  extraClasses?: string
  narrativeStage?: number
  xOffset?: number
  yOffset?: number
  scale?: number
  useGsap?: boolean
  rotate?: number
  onNarrativeStageChange?: (narrativeStage: number) => void
  onClick?: (clickEvent: FixTypeLater) => void
  children?: React.ReactNode
  enableBoundingBox?: boolean
}

export default PlaceableSVGProps
