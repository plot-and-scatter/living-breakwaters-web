import React from "react"

const Pump = ({ xOffset, yOffset }) => {
  const baseXTransform = 0
  const baseYTransform = 0

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g transform={`translate(${xTransform}, ${yTransform})`} id="Pump">
      <path className="cls-26" d="M754 273.9v-23.6h77.4v51.9L754 273.9z" />
      <path className="cls-26" d="M638.2 295.8h193.2v7.5H638.2z" />
    </g>
  )
}

export default Pump
