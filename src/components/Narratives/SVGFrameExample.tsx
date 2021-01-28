import React from 'react'
import RedShip from './PlaceableSVGs/Maritime/RedShip'

import SVGFrame from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <RedShip />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
