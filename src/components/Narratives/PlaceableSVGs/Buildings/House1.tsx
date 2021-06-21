import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './House1.scss'

const House1 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 68.19, 54.05)}
      defaultScale={0.5}
      extraClasses="House1"
      {...props}
    >
      <defs>
        <linearGradient
          id="GRADIENT_BLUE"
          x1="0.96"
          y1="27.05"
          x2="67.31"
          y2="27.05"
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
        <linearGradient
          id="GRADIENT_BLUE-2"
          x1="11.68"
          y1="45.62"
          x2="25.18"
          y2="45.62"
          xlinkHref="#GRADIENT_BLUE"
        />
        <linearGradient
          id="GRADIENT_BLUE-4"
          x1="4.51"
          y1="10.84"
          x2="64.11"
          y2="10.84"
          xlinkHref="#GRADIENT_BLUE"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="power_line" data-name="power line">
            <polygon
              className="cls-1"
              points="64.11 17.42 34.26 0.29 4.51 17.42 0.96 19.41 4.51 19.4 4.51 53.8 64.11 53.8 64.11 19.4 67.31 19.4 64.11 17.42"
            />
            <rect
              className="cls-2"
              x="11.68"
              y="37.57"
              width="13.5"
              height="16.09"
            />
            <line
              className="cls-3"
              x1="11.68"
              y1="37.57"
              x2="25.18"
              y2="53.67"
            />
            <line
              className="cls-3"
              x1="11.68"
              y1="53.67"
              x2="25.18"
              y2="37.57"
            />
            <rect
              className="cls-2"
              x="49.3"
              y="37.24"
              width="10.25"
              height="10.25"
            />
            <polyline
              className="cls-4"
              points="64.11 19.4 34.26 2.27 4.51 19.4"
            />
            <rect
              className="cls-2"
              x="32.4"
              y="37.24"
              width="10.25"
              height="10.25"
            />
            <rect
              className="cls-2"
              x="18.43"
              y="20.36"
              width="13.5"
              height="10.25"
            />
            <rect
              className="cls-2"
              x="37.52"
              y="20.36"
              width="13.5"
              height="10.25"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default House1
