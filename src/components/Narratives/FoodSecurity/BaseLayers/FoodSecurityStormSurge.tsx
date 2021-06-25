import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { useNarrative } from '../../NarrativeContext'

import './FoodSecurityStormSurge.scss'
import FixTypeLater from '../../../../@types/FixTypeLater'
import { random } from 'gsap/src/all'

const WIDTH = 280

export const toggleSeaLevelRise = (narrativeStage: number): void => {
  if (narrativeStage === 3) {
    const from = '#StormSurgeNormal'
    const to = '#StormSurgeRisen'

    const tl = new TimelineLite()
    tl.to(from, { y: -18, duration: 3, ease: Power2.easeIn })
    tl.to(
      from,
      {
        morphSVG: {
          shape: to,
          shapeIndex: 0
        } as FixTypeLater,
        // ease: Power2.easeIn,
        // ease: 'linear',
        // delay: 1, // TODO: Could delay further
        duration: 6
      },
      '>-1'
    )

    gsap.to(from, {
      x: 10,
      scaleY: 1.02,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: Power2.easeInOut
    })
  } else {
    const from = '#StormSurgeNormal'
    const to = '#StormSurgeNormal'
    const tl = new TimelineLite()
    tl.to(from, {
      morphSVG: {
        shape: to,
        shapeIndex: 0
      } as FixTypeLater,
      ease: 'none',
      // delay: 3, // TODO: Could delay further
      duration: 1
    })
    tl.to(from, { y: 0, duration: 2 }, '>-0.5')
  }

  // tl.to(from, { rotate: -1 })
}

const FoodSecurityStormSurge = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleSeaLevelRise(narrativeStage)
  }, [narrativeStage])

  return (
    <g className="FoodSecurityStormSurge">
      <path
        d={`M-20 250 h${300} c 20 0, 8 8, 80 8 h600 v20 h-${
          290 + 60 + 600 + 20
        }`}
        id="StormSurgeRisen"
        className="NoDisplay"
      />
      <path
        d={`M-20 250 h${295} a 20 10, 0, 0, 1, 10 10 v40 h-${WIDTH + 30 + 20}`}
        id="StormSurgeNormal"
      />
    </g>
  )
}

export default FoodSecurityStormSurge
