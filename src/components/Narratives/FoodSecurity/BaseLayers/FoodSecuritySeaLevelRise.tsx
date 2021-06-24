import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { useNarrative } from '../../NarrativeContext'

import './FoodSecuritySeaLevelRise.scss'
import FixTypeLater from '../../../../@types/FixTypeLater'
import { random } from 'gsap/src/all'

const WIDTH = 300

export const toggleSeaLevelRise = (narrativeStage: number): void => {
  const from = '#SeaLevelNormal'
  const to = narrativeStage > 0 ? '#SeaLevelRisen' : '#SeaLevelNormal'
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

const FoodSecuritySeaLevel = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleSeaLevelRise(narrativeStage)
  }, [narrativeStage])

  return (
    <g className="FoodSecuritySeaLevelRise">
      <path
        d={`M0 240 h${WIDTH} v40 h-${WIDTH}`}
        id="SeaLevelRisen"
        className="NoDisplay"
      />
      <path d={`M0 246 h${WIDTH} v40 h-${WIDTH}`} id="SeaLevelNormal" />
    </g>
  )
}

export default FoodSecuritySeaLevel
