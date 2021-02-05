import React from 'react'
import House3 from '../PlaceableSVGs/Buildings/House3'

import SVGFrame from './SVGFrame'
import SVGInnerFrame from './SVGInnerFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <House3 xOffset={0.1} yOffset={0.5} />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
