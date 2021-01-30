import React from 'react'
import Roots from './PlaceableSVGs/Trees/Roots'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <Roots />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
