import React from "react"
import PropTypes from "prop-types"

import { TimelineLite } from "gsap"

import "./HeavyRain.scss"

let heavyRainTimeline

export const toggleRainStorm = (id, toggleVar) => {
  const el = document.getElementById(id)
  if (el) {
    if (heavyRainTimeline) heavyRainTimeline.clear()
    if (toggleVar) {
      heavyRainTimeline = new TimelineLite()
        .to(".FoodSecurityTableau svg", {
          backgroundImage: "linear-gradient(#ccc, #fff)",
          duration: 1,
        })
        .to(".Rainfall", { visibility: "visible", opacity: 1, duration: 3 })
        .to(".SaturatedGround", { opacity: 1, duration: 3 })
    } else {
      heavyRainTimeline = new TimelineLite()
        .to(".Rainfall", { visibility: "hidden", opacity: 0, duration: 0.5 })
        .to(".SaturatedGround", { opacity: 0, duration: 0.5 })
        .to(".FoodSecurityTableau svg", {
          backgroundImage: "linear-gradient(#bbddff, #fff)",
          duration: 0.5,
        })
    }
  }
}

const RAIN_WIDTH = 150

const rain = xOffset => (
  <path
    key={xOffset}
    className={`RainLine`}
    d={`M${xOffset} 320 l${RAIN_WIDTH} -400`}
  />
)

const HeavyRain = ({ stage }) => {
  const totalWidth = 1963
  const rainLineSpacing = 20

  const rainLines = []

  for (let i = -RAIN_WIDTH; i < totalWidth; i += rainLineSpacing) {
    rainLines.push(rain(i))
  }

  return (
    <g id="HeavyRain" className="HeavyRain">
      <g className="Rainfall" visibility="hidden" opacity={0}>
        {rainLines}
      </g>
    </g>
  )
}

export default HeavyRain

HeavyRain.propTypes = {
  stage: PropTypes.number,
}
