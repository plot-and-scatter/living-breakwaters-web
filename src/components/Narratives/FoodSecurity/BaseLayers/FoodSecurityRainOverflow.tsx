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

const FoodSecurityRainOverflow = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    if (narrativeStage === 2) {
      const tl = new TimelineLite()
      tl.to('#RainOverflowNormal', { y: -13, duration: 5, delay: 2 })
      tl.to('#RainOverflowNormal', { x: -60, duration: 5 }, '>-0.5')
    } else {
      gsap.to('#RainOverflowNormal', { y: 0, x: 0, duration: 3, delay: 1 })
    }
  }, [narrativeStage])

  return (
    <g className="FoodSecurityRainOverflow">
      <path
        d={`M350 250 a30,11 0 0 0 -30,11 h710 v-11`}
        id="RainOverflowNormal"
      />
    </g>
  )
}

export default FoodSecurityRainOverflow
