import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Office2.scss'

const Office2 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Office2'}
      viewBoxObj={viewBox(0, 0, 80.93, 36.61)}
      defaultScale={0.065}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.25"
          y1="114.85"
          x2="77.25"
          y2="114.85"
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
              d="M62.25,70.42v-21h-21V45.75c-.6-14.28-.59-28.57-.62-42.85A13.62,13.62,0,0,0,40.12.28c-.37.06-.87.18-.87.18v49h-23v21H.25v159h77v-159Zm-7,13h13v10h-13Zm0,21h13v10h-13Zm13,22v10h-13v-10ZM12.69,84.68A1.75,1.75,0,0,1,14,83.54c3.68-.1,7.37-.06,11.28-.06v9.94H12.63C12.63,90.48,12.58,87.58,12.69,84.68Zm11.56,19.74v10h-12v-10Zm-12,22h12v10h-12Zm0,22h12v10h-12Zm12,31h-12v-10h12Zm10-96h12v10h-12Zm12,21v10h-12v-10Zm-12,22h12v10h-12Zm12,53h-12v-10h12Zm.59-21H34.25v-10.1c3.84,0,7.52-.07,11.2.07.48,0,1.29,1,1.32,1.63C46.91,152.76,46.84,155.52,46.84,158.42ZM68,178.19a1.76,1.76,0,0,1-1.27,1.15c-3.78.1-7.56.06-11.45.06v-10H68C68,172.38,68.08,175.28,68,178.19Zm.08-19.77H55.25V148.33c4,0,7.81,0,11.67.06.39,0,1.06.87,1.08,1.36C68.1,152.58,68.05,155.41,68.05,158.42Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Office2
