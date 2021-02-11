import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Person1 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 5, 14.5)}
      defaultScale={0.5}
      {...props}
    >
      <g className="cls-2">
        <g clipPath="url(#clip-path-3)" opacity=".3">
          <path
            d="M477.53 429.14a5 5 0 000 3.27 1.32 1.32 0 01-.23 1 .4.4 0 01-.66 0A4 4 0 01476 432c-.13-1.1-.13-2.21-.18-3.32v-1.45a.51.51 0 00-.09-.27c-1.12-1.3-.77-2.77-.45-4.21.06-.25.41-.48.67-.63.43-.24.8-.43.58-1a1.46 1.46 0 010-.68.71.71 0 01.79-.69c.62 0 1 .29.83.87-.28.86-.09 1.36.77 1.64a.71.71 0 01.37.44 4.73 4.73 0 01.34 2.66 8.52 8.52 0 00-.27 1.44c0 .27-.08.46-.39.22-.05.08-.15.16-.15.24 0 .61.06 1.23.13 1.84s.2 1.35.27 2v1.36a5.42 5.42 0 000 .57c0 .18.13.48.08.51a3.49 3.49 0 01-.89.37c-.06 0-.21-.13-.25-.22a2.88 2.88 0 01-.23-.74c-.15-1.25-.28-2.49-.41-3.74"
            transform="translate(-474.84 -419.58)"
            fill="#fff"
          />
          <path
            d="M2.69 9.56a5 5 0 000 3.27 1.32 1.32 0 01-.23 1 .4.4 0 01-.66 0 4 4 0 01-.64-1.41c-.13-1.1-.13-2.21-.18-3.32V7.65a.51.51 0 00-.09-.27C-.23 6.08.12 4.61.44 3.17c.06-.25.41-.48.67-.63.43-.24.8-.43.58-1a1.46 1.46 0 010-.68.71.71 0 01.79-.69c.62 0 1 .29.83.87-.28.86-.09 1.36.77 1.64a.71.71 0 01.37.44 4.73 4.73 0 01.34 2.66 8.52 8.52 0 00-.27 1.44c0 .27-.08.46-.39.22-.05.08-.15.16-.15.24 0 .61.06 1.23.13 1.84s.2 1.35.27 2v1.36a5.42 5.42 0 000 .57c0 .18.13.48.08.51a3.49 3.49 0 01-.89.37c-.06 0-.21-.13-.25-.22a2.88 2.88 0 01-.23-.74c-.14-1.32-.27-2.56-.4-3.81z"
            stroke="#231f20"
            strokeMiterlimit="10"
            strokeWidth=".15"
            fill="none"
          />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Person1
