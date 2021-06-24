import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { useNarrative } from '../../NarrativeContext'

import './FoodSecurityRainOverflow.scss'
import FixTypeLater from '../../../../@types/FixTypeLater'

const WIDTH = 300

let seaLevelRiseTimeline

export const toggleSeaLevelRise = (narrativeStage: number): void => {
  if (seaLevelRiseTimeline) seaLevelRiseTimeline.clear()
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
}

const FoodSecurityRainOverflow = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleSeaLevelRise(narrativeStage)
  }, [narrativeStage])

  const d =
    narrativeStage < 2 ? `M290 250 v22 h710 v-22` : `M290 240 v22 h900 v-22`

  return (
    <g className="FoodSecurityRainOverflow">
      <path d={`M290 250 v22 h710 v-22`} id="RainOverflowNormal" />
    </g>
  )
}

export default FoodSecurityRainOverflow
