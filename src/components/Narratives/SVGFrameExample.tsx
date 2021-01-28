import React from 'react'

import SampleFauna from './PlaceableSVGs/Fauna/SampleFauna'
import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <SampleFauna />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
