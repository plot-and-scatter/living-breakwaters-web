import React from 'react'
import House4 from '../PlaceableSVGs/Buildings/House4'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'
import Biker from '../PlaceableSVGs/People/Biker'

import SVGFrame from './SVGFrame'
import SVGInnerFrame from './SVGInnerFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <TrafficLight2 xOffset={0.1} yOffset={0.5} />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
