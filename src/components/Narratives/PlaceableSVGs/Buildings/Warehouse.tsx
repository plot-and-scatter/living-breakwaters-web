import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Warehouse.scss'

const Warehouse = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Warehouse'}
      viewBoxObj={viewBox(0, 0, 133.5, 56.03)}
      defaultScale={0.1}
      {...props}
    >
      <defs>
        <linearGradient
          id="GRADIENT_BLUE"
          x1="0.25"
          y1="28.02"
          x2="133.25"
          y2="28.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset="0.11" stopColor="#fafbfb" />
          <stop offset="0.25" stopColor="#ebf0f0" />
          <stop offset="0.39" stopColor="#d3dede" />
          <stop offset="0.54" stopColor="#b1c5c4" />
          <stop offset="0.7" stopColor="#86a5a4" />
          <stop offset="0.87" stopColor="#517e7c" />
          <stop offset={1} stopColor="#215a58" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="buildings">
            <polygon
              className="cls-1"
              points="133.25 15.22 66.63 0.26 0.25 15.22 0.25 55.78 133.25 55.78 133.25 15.22"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Warehouse
