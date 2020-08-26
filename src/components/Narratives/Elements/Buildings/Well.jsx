import React from "react"

const Well = ({ xOffset, yOffset }) => {
  const baseXTransform = 0
  const baseYTransform = 0

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  return (
    <g transform={`translate(${xTransform}, ${yTransform})`} id="Well">
      <path className="Well" d="M1283.3 271.9h17.1v15.5h-17.1z" />
      <path className="Tap" d="M1290.6 287h2.6v210h-2.6z" />
    </g>
  )
}

export default Well
