import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Well.scss'

const Well = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 14.31, 105.85)}
      defaultScale={0.012}
      extraClasses={'Well'}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          y1="6.55"
          x2="13.81"
          y2="6.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.11" stopColor="#fafbfb" />
          <stop offset="0.24" stopColor="#ebf0f0" />
          <stop offset="0.39" stopColor="#d3dede" />
          <stop offset="0.54" stopColor="#b1c5c5" />
          <stop offset="0.7" stopColor="#86a5a4" />
          <stop offset="0.86" stopColor="#517e7d" />
          <stop offset="1" stopColor="#1f5957" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_FRONT" data-name="EXISTING OBJECTS FRONT">
          <g id="well">
            <rect
              className="cls-1"
              x="6.16"
              y="13.01"
              width="1.88"
              height="92.59"
            />
            <rect
              className="cls-2"
              x="0.5"
              y="0.5"
              width="13.31"
              height="12.1"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Well
