import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Car2.scss'

const Car2 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 217, 181)}
      defaultScale={0.5}
      extraClasses="Car2"
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            fill="pink"
            d="M26 64c0 4-6 8-13 8S0 68 0 64s6-9 13-9 13 4 13 9zM191 64c0 4 6 8 13 8s13-4 13-8-6-9-13-9-13 4-13 9z"
          />
          <path
            className="cls-1"
            d="M192 70l-4-51c-2-21-21-19-21-19H50S31-2 30 19l-5 51S8 74 8 93v36l10 18v34h40v-32h101v32h41v-34l9-18V93c0-19-17-23-17-23zM39 18c0-10 7-9 7-9h125s7-1 8 9l2 37H36zM23 122a5 5 0 115-5 5 5 0 01-5 5zm36-15H38a10 10 0 110-21h21a10 10 0 010 21zm26 10a2 2 0 01-5 0V85a2 2 0 115 0zm13 0a2 2 0 01-5 0V85a2 2 0 115 0zm13 0a2 2 0 01-5 0V85a2 2 0 115 0zm13 0a2 2 0 01-5 0V85a2 2 0 115 0zm13 0a2 2 0 01-5 0V85a2 2 0 115 0zm42-10h-20a10 10 0 110-21h20a10 10 0 110 21zm16 15a5 5 0 114-5 5 5 0 01-4 5z"
          />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Car2
