import React from 'react'
import Deadwood from './PlaceableSVGs/Trees/Deadwood'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <Deadwood />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
