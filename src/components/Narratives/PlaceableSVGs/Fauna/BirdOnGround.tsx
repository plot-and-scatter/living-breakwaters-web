import React from 'react'

import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const BirdOnGround = ({
  xOffset,
  yOffset,
  xScale,
  yScale
}: PlaceableSVGProps): JSX.Element => {
  const baseXTransform = 10
  const baseYTransform = 10

  const xTransform = baseXTransform + (xOffset || 0)
  const yTransform = baseYTransform + (yOffset || 0)

  const translate = `translate(${xTransform}, ${yTransform}) scale(${xScale}, ${yScale})`

  return (
    <g transform={translate} id="BirdOnGround">
      <path
        className="cls-13"
        d="M0 0l-.4.3a3.2 3.2 0 01-.3-.1.4.4 0 00-.3 0 2.2 2.2 0 01-.7.1v.5a.2.2 0 000 .1h-.8.3l.2-.1v-.4-.2l-.4-.2a.9.9 0 01-.2-1c.1-.2 0-.2-.2-.2h-.2a.3.3 0 01.1-.1.7.7 0 00.3-.2.3.3 0 01.4 0c.1.1 0 .3 0 .4 0 .3 0 .3.3.3a2.4 2.4 0 011.1.6 1 1 0 00.7.2z"
      />
    </g>
  )
}

export default BirdOnGround
