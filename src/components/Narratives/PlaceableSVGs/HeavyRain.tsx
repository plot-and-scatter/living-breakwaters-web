import { TimelineLite } from 'gsap'
import React, { useEffect } from 'react'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import { useNarrative } from '../NarrativeContext'
import PlaceableSVG from './PlaceableSVG'
import { viewBox } from './PlaceableSVGHelper'

import './HeavyRain.scss'
import { useRef } from 'react'
import gsap from 'gsap/all'
import { random } from 'gsap/src/all'

let heavyRainTimeline

// TODO: More efficient rainfall code
export const toggleRainStorm = (id: string, toggleVar: boolean): void => {
  const el = document.getElementById(id)
  if (el) {
    if (heavyRainTimeline) heavyRainTimeline.clear()
    if (toggleVar) {
      heavyRainTimeline = new TimelineLite()
        .to('.LogisticsNetworksTableau svg', {
          backgroundImage: 'linear-gradient(#666, #fff)',
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
        .to('.LogisticsNetworksTableau svg', {
          backgroundImage: 'linear-gradient(#fff, #fff)',
          duration: 1
        })
    }
  }
}

const RAIN_WIDTH = -150

const rain = (xOffset) => (
  <path
    key={xOffset}
    className={`RainLine`}
    d={`M${xOffset} 1000 l${RAIN_WIDTH} -1100`}
  />
)

const HeavyRain = (props: PlaceableSVGProps): JSX.Element => {
  const { showRain } = useNarrative()

  const rainfall = useRef<TweenMax>()

  const totalWidth = 2200
  const rainLineSpacing = 20

  useEffect(() => {
    rainfall.current = gsap
      .to('.RainLine', {
        // rotation: 360,
        duration: 1,
        ease: 'none',
        repeat: -1,
        paused: true,
        strokeDashoffset: 40
        // x: random(0, 10)
        // repeatRefresh: true
        // transformOrigin: 'center center'
      })
      .timeScale(0)
  }, [])

  useEffect(() => {
    console.log(`showRain ${showRain}`, rainfall.current)
    if (showRain) {
      rainfall.current?.play()
      const tl = new TimelineLite()
      tl.to('.Rainfall', { autoAlpha: 1, duration: 3 })
      tl.to(rainfall.current!, { timeScale: 1, duration: 3 }, 0)
    } else {
      // Pause
      console.log('HERE')

      const tl = new TimelineLite()
      tl.to(rainfall.current!, {
        timeScale: 0,
        duration: 3,
        onComplete: function () {
          this.pause()
        }
      })
      tl.to('.Rainfall', { autoAlpha: 0, duration: 3 }, 0)
    }
  }, [showRain])

  const rainLines = []

  for (let i = RAIN_WIDTH; i < totalWidth - RAIN_WIDTH; i += rainLineSpacing) {
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
