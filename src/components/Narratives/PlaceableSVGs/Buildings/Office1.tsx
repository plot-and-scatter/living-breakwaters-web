import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Office1.scss'

const Office1 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Office1'}
      viewBoxObj={viewBox(0, 0, 86.55, 129.5)}
      defaultScale={0.065}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.25"
          y1="64.75"
          x2="86.3"
          y2="64.75"
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
        <g id="EXISTING_OBJECTS">
          <g id="buildings">
            <path
              className="cls-1"
              d="M86.25.25h-74v114H.25v15h86Zm-20,10h12v10h-12Zm0,22h12v10h-12Zm-22-22h13v10h-13Zm0,22h13v10h-13Zm-21-22h13v10h-13Zm13,75h-13v-10h13Zm-13-21v-10h13v10Zm13-22h-13v-10h13Zm8.19,13.39a1.85,1.85,0,0,1,1.31-1.26c3.78-.11,7.56-.06,11.5-.06v9.93H44.38C44.38,61.14,44.31,58.39,44.44,55.64ZM57.25,85.25h-13v-10h13Zm21,0H65.57c0-3.14,0-6.11.06-9.08,0-.4.85-1.09,1.32-1.1,3.68-.09,7.37,0,11.3,0Zm0-21h-12v-10h12Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Office1
