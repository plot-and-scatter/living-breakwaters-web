import React from 'react'
import BirdOnGround from './PlaceableSVGs/Fauna/BirdOnGround'

import SampleFauna from './PlaceableSVGs/Fauna/SampleFauna'
import SVGFrame, { SVG_FRAME_X, SVG_FRAME_Y } from './SVGFrame'

const SVGFrameExample = (): JSX.Element => {
  const circleCenterX = 0.5 // 50%
  const circleCenterY = 0.5 // 50%

  const cx = circleCenterX * SVG_FRAME_X
  const cy = circleCenterY * SVG_FRAME_Y

  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <SampleFauna />
        <circle r="20" cx={cx} cy={cy}></circle>
        <BirdOnGround />
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
