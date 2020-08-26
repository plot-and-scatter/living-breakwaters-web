import React from "react"

const FlyingGull3 = ({ xOffset, yOffset, scaleX, scaleY }) => {
  const baseXTransform = 10
  const baseYTransform = 10

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  const translate = `translate(${xTransform}, ${yTransform}) scale(${scaleX}, ${scaleY})`

  return (
    <g transform={translate} id="FlyingGull3">
      <path
        className="cls-13"
        d="
        M0 0h.9c-.2.7-.4 1-1 1a.6.6 0 01-.5-.3 2.3 2.3 0 00-2.3-1 1.3 1.3 0 01-.4 0h-.1a1.7 1.7 0 011.3-.2 1.8 1.8 0 001.1.1c.2 0 .4-.2.5-.4a3.9 3.9 0 011.4-2l.6-.7a.7.7 0 010 1 6 6 0 00-1.5 2.5z
        "
        transform="translate(0 -24.2)"
      />
    </g>
  )
}

export default FlyingGull3
