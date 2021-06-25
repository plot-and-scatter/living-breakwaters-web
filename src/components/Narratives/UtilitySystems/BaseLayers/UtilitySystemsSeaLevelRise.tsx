import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, gsap } from 'gsap'
import { useEffect } from 'react'
import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import FixTypeLater from '../../../../@types/FixTypeLater'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const WIDTH = 300

export const toggleSeaLevelRise = (narrativeStage: number): void => {
  const from = '#SeaLevelNormal'
  const to = narrativeStage > 1 ? '#SeaLevelRisen' : '#SeaLevelNormal'
  gsap.to(from, {
    morphSVG: {
      shape: to,
      shapeIndex: 0
    } as FixTypeLater,
    ease: Power2.easeInOut,
    // delay: 3, // TODO: Could delay further
    duration: 1
  })

  // tl.to(from, { rotate: -1 })
}

const UtilitySystemsSeaLevelRise = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleSeaLevelRise(narrativeStage)
  }, [narrativeStage])

  return (
    <g className="UtilitySystemsSeaLevelRise">
      <path
        d={`M0 240 h${WIDTH} v40 h-${WIDTH}`}
        id="SeaLevelRisen"
        className="NoDisplay"
      />
      <path
        d={`M0 246 h${WIDTH} v40 h-${WIDTH}`}
        id="SeaLevelNormal"
        className="FillRed"
      />
    </g>
  )
}

export default UtilitySystemsSeaLevelRise
