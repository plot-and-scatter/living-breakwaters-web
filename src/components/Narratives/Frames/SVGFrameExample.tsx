import React from 'react'
import Roots from '../PlaceableSVGs/Trees/Roots'

import SVGFrame from './SVGFrame'
import SVGInnerFrame from './SVGInnerFrame'

const SVGFrameExample = (): JSX.Element => {
  return (
    <div className="SVGFrameExample">
      <SVGFrame id="Example">
        <Roots xOffset={0.4} yOffset={0.01} scale={0.1} />
        <SVGInnerFrame
          id="Foo"
          width={5}
          height={1}
          xOffset={0.0}
          yOffset={0.11}
          scale={0.5}
        >
          <Roots scale={0.3} />
        </SVGInnerFrame>
      </SVGFrame>
    </div>
  )
}

export default SVGFrameExample
