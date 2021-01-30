import React from 'react'
import House1 from './PlaceableSVGs/Buildings/House1'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <House1 />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
