import { TimelineLite } from 'gsap'
import React, { useEffect } from 'react'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import { useNarrative } from '../NarrativeContext'
import PlaceableSVG from './PlaceableSVG'
import { viewBox } from './PlaceableSVGHelper'

import './HeavyRain.scss'

let heavyRainTimeline

export const toggleRainStorm = (id: string, toggleVar: boolean): void => {
  const el = document.getElementById(id)
  if (el) {
    if (heavyRainTimeline) heavyRainTimeline.clear()
    if (toggleVar) {
      heavyRainTimeline = new TimelineLite()
        .to('.FoodSecurityTableau svg', {
          backgroundImage: 'linear-gradient(#ccc, #fff)',
          duration: 1
        })
        .to('.Rainfall', { visibility: 'visible', opacity: 1, duration: 3 })
      // .to('.SaturatedGround', { opacity: 1, duration: 1 })
      // .to('#RainOverflow', { opacity: 1, duration: 1 })
    } else {
      heavyRainTimeline = new TimelineLite()
        // .to('#RainOverflow', { opacity: 0, duration: 0.5 })
        .to('.SaturatedGround', { opacity: 0, duration: 0.5 })
        .to('.Rainfall', { visibility: 'hidden', opacity: 0, duration: 0.5 })
        .to('.FoodSecurityTableau svg', {
          backgroundImage: 'linear-gradient(#bbddff, #fff)',
          duration: 0.5
        })
    }
  }
}

const RAIN_WIDTH = 150

const rain = (xOffset) => (
  <path
    key={xOffset}
    className={`RainLine`}
    d={`M${xOffset} 500 l${RAIN_WIDTH} -500`}
  />
)

const HeavyRain = (props: PlaceableSVGProps): JSX.Element => {
  const { showRain } = useNarrative()

  const totalWidth = 1963
  const rainLineSpacing = 20

  useEffect(() => {
    toggleRainStorm('HeavyRain', showRain)
  }, [showRain])

  const rainLines = []

  for (let i = -RAIN_WIDTH; i < totalWidth; i += rainLineSpacing) {
    rainLines.push(rain(i))
  }

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, -80, totalWidth, 580)}
      defaultScale={1}
      {...props}
    >
      <g id="HeavyRain" className="HeavyRain">
        <g className="Rainfall" visibility="hidden" opacity={0}>
          {rainLines}
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default HeavyRain
