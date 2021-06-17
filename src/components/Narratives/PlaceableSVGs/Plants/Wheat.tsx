import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Wheat.scss'

const Wheat = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Wheat'}
      viewBoxObj={viewBox(0, 0, 45.99, 14.03)}
      defaultScale={0.03}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_BACK" data-name="EXISTING OBJECTS BACK">
          <g id="crops">
            <path
              className="cls-1"
              d="M42.85,3.9c1.77,1.75,1.6,8.6,1.6,8.6V.4"
            />
            <line className="cls-1" x1="44.45" y1="12.5" x2="45.74" y2="4.78" />
            <path
              className="cls-1"
              d="M36.63,3.9c1.76,1.75,1.6,8.6,1.6,8.6V.4"
            />
            <line className="cls-1" x1="38.23" y1="12.5" x2="39.51" y2="4.78" />
            <path
              className="cls-1"
              d="M30.76,3.9c1.76,1.75,1.6,8.6,1.6,8.6V.4"
            />
            <line className="cls-1" x1="32.36" y1="12.5" x2="33.64" y2="4.78" />
            <path
              className="cls-1"
              d="M24.53,3.9c1.76,1.75,1.6,8.6,1.6,8.6V.4"
            />
            <line className="cls-1" x1="26.13" y1="12.5" x2="27.41" y2="4.78" />
            <path
              className="cls-1"
              d="M18.57,3.75c1.76,1.75,1.6,8.59,1.6,8.59V.25"
            />
            <line
              className="cls-1"
              x1="20.17"
              y1="12.34"
              x2="21.46"
              y2="4.63"
            />
            <path
              className="cls-1"
              d="M12.35,4.13c1.76,1.75,1.6,8.59,1.6,8.59V.63"
            />
            <line className="cls-1" x1="13.95" y1="12.72" x2="15.23" y2="5" />
            <path
              className="cls-1"
              d="M6.47,5.19c1.77,1.75,1.61,8.59,1.61,8.59V1.69"
            />
            <line className="cls-1" x1="8.08" y1="13.78" x2="9.36" y2="6.06" />
            <path
              className="cls-1"
              d="M.25,5.19c1.76,1.75,1.6,8.59,1.6,8.59V1.69"
            />
            <line className="cls-1" x1="1.85" y1="13.78" x2="3.13" y2="6.06" />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Wheat
