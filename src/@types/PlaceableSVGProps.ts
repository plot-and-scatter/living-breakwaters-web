type PlaceableSVGProps = {
  extraClasses?: string
  narrativeStage?: number
  xOffset?: number
  yOffset?: number
  scale?: number
  useGsap?: boolean
  rotate?: number
  onNarrativeStageChange?: (narrativeStage: number) => void
}

export default PlaceableSVGProps
