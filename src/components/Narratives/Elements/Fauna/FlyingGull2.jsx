import React from "react"

const FlyingGull2 = ({ xOffset, yOffset, scaleX, scaleY }) => {
  const baseXTransform = 10
  const baseYTransform = 10

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  const translate = `translate(${xTransform}, ${yTransform}) scale(${scaleX}, ${scaleY})`

  return (
    <g transform={translate} id="FlyingGull2">
      <path
        className="cls-13"
        d="
        M0 0h.3a1 1 0 01-.3 1 .5.5 0 01-.8 0l.2-.4h-.2l-2.2.6h-.5l2.2-1a2.2 2.2 0 001-1l.8-1.8c.2 1-.3 1.7-.5 2.6z
        "
        transform="translate(0 -24.2)"
      />
    </g>
  )
}

export default FlyingGull2
