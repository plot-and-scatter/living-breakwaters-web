import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Farmhouse.scss'

const Farmhouse = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Farmhouse'}
      viewBoxObj={viewBox(0, 0, 118.93, 152.92)}
      defaultScale={0.05}
      {...props}
    >
      <defs>
        <linearGradient
          id="FARMHOUSE_GRADIENT_BLUE"
          x1="83.23"
          y1="76.46"
          x2="118.68"
          y2="76.46"
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
        <linearGradient
          id="FARMHOUSE_GRADIENT_BLUE-2"
          x1="0.96"
          y1="106.55"
          x2="103.51"
          y2="106.55"
          xlinkHref="#FARMHOUSE_GRADIENT_BLUE"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_BACK" data-name="EXISTING OBJECTS BACK">
          <g id="farmhouse">
            <path
              className="cls-1"
              d="M118.68,152.67H83.23V17.72C83.82,7.24,92.93-.51,102.51.31c8.55.73,15.72,8.13,16.17,17.41Z"
            />
            <polygon
              className="cls-2"
              points="98.57 91.67 52.42 65.19 6.44 91.67 0.96 94.74 6.44 94.73 6.44 147.91 98.57 147.91 98.57 94.73 103.51 94.73 98.57 91.67"
            />
            <rect
              className="cls-3"
              x="31.82"
              y="122.82"
              width="41.46"
              height="24.88"
            />
            <rect
              className="cls-3"
              x="31.82"
              y="122.82"
              width="20.87"
              height="24.88"
            />
            <polyline
              className="cls-3"
              points="31.82 122.82 52.69 147.7 73.28 122.82"
            />
            <polyline
              className="cls-3"
              points="31.82 147.7 52.69 122.82 73.28 147.7"
            />
            <rect
              className="cls-3"
              x="44.49"
              y="97.08"
              width="15.84"
              height="9.45"
            />
            <line
              className="cls-3"
              x1="83.23"
              y1="17.72"
              x2="118.68"
              y2="17.72"
            />
            <line
              className="cls-3"
              x1="83.23"
              y1="19.35"
              x2="118.68"
              y2="19.35"
            />
            <polyline
              className="cls-3"
              points="98.57 94.73 52.42 68.26 6.44 94.73"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Farmhouse
