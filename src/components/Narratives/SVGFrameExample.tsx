import React from 'react'
import Seaweed from './PlaceableSVGs/Plants/Seaweed'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <Seaweed />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
