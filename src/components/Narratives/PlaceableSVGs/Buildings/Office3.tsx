import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Office3.scss'

const Office3 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Office3'}
      viewBoxObj={viewBox(0, 0, 83.8, 153.22)}
      defaultScale={0.07}
      {...props}
    >
      <defs>
        <linearGradient
          id="office3-linear-gradient"
          x1="0.25"
          y1="76.61"
          x2="83.55"
          y2="76.61"
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
                d="M67,22.45V.25c-7.86,0-41.19.12-49.28.12V22.78H1.16c0,29.63-.91,100.14-.91,129.55,27.46,0,55.84.64,83.3.64V22.45Zm-7.7,14.3h13.4V47.17H59.34Zm0,22.92H72.65v10.5H59.32ZM72.7,82.76V93.13H59.4V82.76Zm-59-45A1.88,1.88,0,0,1,15,36.57c3.92-.1,7.84-.06,12-.06V47.08H13.62C13.62,44,13.56,40.86,13.68,37.78ZM27,59.55V70.21H13.85V59.55ZM13.85,82.67H27V93.09H13.85Zm0,22.79H27v10.7H13.85Zm22.66-69H49.77V47.15H36.51ZM49.83,59.57V70.19H36.7V59.57ZM36.62,82.72H49.85V93.06H36.62ZM50,116.14H36.64V105.39c4.08,0,8-.07,11.91.08.51,0,1.37,1.1,1.4,1.73C50.1,110.12,50,113,50,116.14Zm22.89,0H59.3V105.39c4.2,0,8.31,0,12.41.07.41,0,1.13.92,1.15,1.44C73,109.9,72.91,112.92,72.91,116.12Z"
              />
            </g>
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Office3
