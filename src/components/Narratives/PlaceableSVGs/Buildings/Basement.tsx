import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Basement.scss'

const Basement = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      className={'Basement'}
      viewBoxObj={viewBox(0, 0, 58.56, 22.01)}
      defaultScale={0.1}
      {...props}
    >
      <defs>
        <linearGradient
          id="GRADIENT_BLUE"
          y1="11"
          x2="58.56"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.11" stopColor="#fafbfb" />
          <stop offset="0.25" stopColor="#ebf0f0" />
          <stop offset="0.39" stopColor="#d3dede" />
          <stop offset="0.54" stopColor="#b1c5c4" />
          <stop offset="0.7" stopColor="#86a5a4" />
          <stop offset="0.87" stopColor="#517e7c" />
          <stop offset="1" stopColor="#215a58" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_SECTION">
          <rect id="basement" className="cls-1" width="58.56" height="22.01" />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Basement
