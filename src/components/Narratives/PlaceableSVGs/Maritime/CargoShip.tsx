import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './CargoShip.scss'
import Textbox from '../Textbox'

const CargoShip = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      className={'CargoShip'}
      viewBoxObj={viewBox(0, 0, 77.49, 83.06)}
      defaultScale={0.08}
      {...props}
    >
      <defs>
        <linearGradient
          id="cargoship_linear-gradient"
          x1="4.64"
          y1="47.84"
          x2="25.53"
          y2="47.84"
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
          id="cargoship_linear-gradient-2"
          x1="4.64"
          y1="31.2"
          x2="25.53"
          y2="31.2"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-3"
          x1="27.93"
          y1="47.84"
          x2="48.82"
          y2="47.84"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-4"
          x1="27.93"
          y1="31.2"
          x2="48.82"
          y2="31.2"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-5"
          x1="51.52"
          y1="47.84"
          x2="72.41"
          y2="47.84"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-6"
          x1="51.52"
          y1="31.2"
          x2="72.41"
          y2="31.2"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-7"
          x1="0.27"
          y1="62.18"
          x2="77.24"
          y2="62.18"
          xlinkHref="#cargoship_linear-gradient"
        />
        <linearGradient
          id="cargoship_linear-gradient-8"
          x1="16.36"
          y1="10.89"
          x2="63.32"
          y2="10.89"
          xlinkHref="#cargoship_linear-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="ship">
            <rect
              className="cls-1"
              x="4.64"
              y="40.87"
              width="20.89"
              height="13.92"
            />
            <rect
              className="cls-2"
              x="4.64"
              y="24.24"
              width="20.89"
              height="13.92"
            />
            <rect
              className="cls-3"
              x="27.93"
              y="40.87"
              width="20.89"
              height="13.92"
            />
            <rect
              className="cls-4"
              x="27.93"
              y="24.24"
              width="20.89"
              height="13.92"
            />
            <rect
              className="cls-5"
              x="51.52"
              y="40.87"
              width="20.89"
              height="13.92"
            />
            <rect
              className="cls-6"
              x="51.52"
              y="24.24"
              width="20.89"
              height="13.92"
            />
            <path
              className="cls-7"
              d="M.27,57.28,34.7,42.58a10.93,10.93,0,0,1,9.28,0c5,2.32,33.26,14.7,33.26,14.7s0,12.76-3.86,18.18S68,82.81,68,82.81H12.26s-8.89-7-10-13.54S.27,57.28.27,57.28Z"
            />
            <polygon
              className="cls-8"
              points="16.36 21.53 63.32 21.53 63.32 15.35 50.94 15.35 50.94 10.63 40.84 10.63 40.84 3.06 51.5 3.06 51.5 0.25 27.93 0.25 27.93 3.19 37.76 3.19 37.76 10.89 27.93 10.89 27.93 15.12 16.36 15.12 16.36 21.53"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default CargoShip
