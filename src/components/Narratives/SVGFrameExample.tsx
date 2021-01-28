import React from 'react'
import BirdOnGround from './PlaceableSVGs/Fauna/BirdOnGround'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <BirdOnGround xOffset={0.5} yOffset={0.5} />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
