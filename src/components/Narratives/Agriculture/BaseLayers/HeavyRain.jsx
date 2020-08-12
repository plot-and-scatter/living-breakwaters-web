import React from "react"
import PropTypes from "prop-types"

import "./HeavyRain.scss"

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

  return <g className="HeavyRain">{rainLines}</g>
}

export default HeavyRain

HeavyRain.propTypes = {
  stage: PropTypes.number,
}
