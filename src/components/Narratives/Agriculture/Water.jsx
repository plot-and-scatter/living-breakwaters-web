import React from "react"

import "./Water.scss"

const TOTAL_HEIGHT = 400

const Water = ({ narrativeStage }) => {
  const waterHeight = 10 + Math.pow(narrativeStage, 1.5) * 20
  const yAdjustment = TOTAL_HEIGHT - waterHeight

  return (
    <svg
      className="Water"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%" }}
      height="400"
    >
      <rect width="100%" height="100%" y={yAdjustment} />
    </svg>
  )
}

export default Water
