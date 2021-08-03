import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, gsap } from 'gsap'
import { useEffect } from 'react'
import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import FixTypeLater from '../../../../@types/FixTypeLater'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const WIDTH = 280

export const toggleSeaLevelRise = (narrativeStage: number): void => {
  if (narrativeStage === 3) {
    const from = '#StormSurgeNormal'
    const to = '#StormSurgeRisen'

    const tl = new TimelineLite()
    tl.to(from, { y: -11, duration: 3, ease: Power2.easeIn })
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

const UtilitySystemsStormSurge = (): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleSeaLevelRise(narrativeStage)
  }, [narrativeStage])

  return (
    <g className="UtilitySystemsStormSurge">
      <path
        // d={`M-20 250 h${300} c 20 0, 8 8, 80 8 h600 v20 h-${
        //   290 + 60 + 600 + 20
        // }`}
        d={`M-20 250 h${800} v20 h-${800}`}
        id="StormSurgeRisen"
        className="NoDisplay"
      />
      <path
        d={`M-20 250 h${295} a 20 10, 0, 0, 1, 10 10 v40 h-${WIDTH + 30 + 20}`}
        className="FillRed"
        id="StormSurgeNormal"
      />
    </g>
  )
}

export default UtilitySystemsStormSurge
