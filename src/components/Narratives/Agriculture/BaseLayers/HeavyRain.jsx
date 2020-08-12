import React from "react"
import PropTypes from "prop-types"

import { TimelineLite } from "gsap"

import "./HeavyRain.scss"

export const toggleRainStorm = (id, toggleVar) => {
  const el = document.getElementById(id)
  console.log("el", el)
  if (el) {
    if (toggleVar) {
      new TimelineLite()
        .to(".FoodSecurityTableau svg", {
          backgroundImage: "linear-gradient(#ccc, #fff)",
          duration: 1,
        })
        .to(".Rainfall", { opacity: 1, duration: 3 })
        .to(".SaturatedGround", { opacity: 1, duration: 3 })
    } else {
      new TimelineLite()
        .to(".Rainfall", { opacity: 0, duration: 0.5 })
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
      <g className="Rainfall" opacity={0}>
        {rainLines}
      </g>
    </g>
  )
}

export default HeavyRain

HeavyRain.propTypes = {
  stage: PropTypes.number,
}
