import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { useEffect } from 'react'
import React from 'react'

import { useNarrative } from '../../NarrativeContext'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const FoodSecurityRainOverflow = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    if (narrativeStage === 2) {
      const tl = new TimelineLite()
      tl.to('#RainOverflowNormal', { y: -13, duration: 5 })
      tl.to('#RainOverflowNormal', { x: -60, duration: 5 }, '>-2')
    } else {
      gsap.to('#RainOverflowNormal', { y: 0, x: 0, duration: 3, delay: 1 })
    }
  }, [narrativeStage])

  return (
    <g className="FoodSecurityRainOverflow">
      <path
        d={`M350 250 a30,11 0 0 0 -30,11 h710 v-11`}
        id="RainOverflowNormal"
        className="FillRed"
      />
    </g>
  )
}

export default FoodSecurityRainOverflow
