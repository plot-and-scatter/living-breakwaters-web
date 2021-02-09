import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const LargeStormDrain = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG viewBox={viewBox(0, 0, 65, 14)} defaultScale={0.5} {...props}>
      <g clipPath="url(#clip-path)">
        <g clipPath="url(#clip-path-2)">
          <path
            className="cls-4"
            d="M952.57 435.06c-.09-1.63.56-2.35 2.19-2.43s2.35.56 2.43 2.19-.56 2.35-2.19 2.43-2.35-.56-2.43-2.19z"
            transform="translate(-907.85 -423.95)"
          />
          <path
            className="cls-4"
            d="M952.06 435.09c-.11-2 .68-2.87 2.67-3s2.87.68 3 2.68-.68 2.86-2.68 3-2.89-.69-2.99-2.68z"
            transform="translate(-907.85 -423.95)"
          />
          <path className="cls-4" d="M64.75.23v7.45L49.8 10.47" />
          <path
            className="cls-4"
            d="M64.24.23v7.03L49.66 9.98M.13.13v7.45l44.09 3.06"
          />
          <path className="cls-4" d="M.64.13v7.03l43.69 2.98" />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default LargeStormDrain
