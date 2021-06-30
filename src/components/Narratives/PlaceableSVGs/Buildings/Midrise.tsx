import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Midrise.scss'

const Midrise = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Midrise'}
      viewBoxObj={viewBox(0, 0, 68.19, 82.4)}
      defaultScale={0.057}
      {...props}
    >
      <defs>
        <linearGradient
          id="midrise-linear-gradient"
          x1="0.96"
          y1="41.22"
          x2="67.31"
          y2="41.22"
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
          <g id="section">
            <g id="buildings">
              <path
                className="cls-1"
                d="M64.11,17.42,34.26.29,4.51,17.42,1,19.4H4.51V82.15h59.6V19.4h3.2ZM37.52,20.36H51V30.61H37.52Zm-19.09,0h13.5V30.61H18.43Zm5.13,43.46H13.31V53.56H23.56Zm0-16.32H13.31V37.24H23.56ZM38.63,63.82H28.38V53.56H38.63Zm0-16.32H28.38V37.24H38.63ZM53.74,63.82H43.49V53.56H53.74Zm0-16.32H43.49V37.24H53.74Z"
              />
            </g>
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Midrise
