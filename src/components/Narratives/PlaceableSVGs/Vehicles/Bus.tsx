import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Bus.scss'

const Bus = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Bus'}
      viewBoxObj={viewBox(0, 0, 24.27, 24.54)}
      defaultScale={0.02}
      {...props}
    >
      <defs>
        <linearGradient
          id="bus-linear-gradient"
          x1="0.25"
          y1="12.27"
          x2="24.02"
          y2="12.27"
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
            <g id="power_line" data-name="power line">
              <g id="bftxkL">
                <path
                  className="cls-1"
                  d="M18,22.93H6.27c0,.07-.07.1-.07.14-.17,1.2-.17,1.2-1.37,1.2a4,4,0,0,0-.6,0c-.6.07-.87-.18-.81-.8A.69.69,0,0,0,3,22.74a1.46,1.46,0,0,1-.48-1c0-4.38,0-8.76,0-13.14v-.8C2,7.64,2,7.9,2,8.25v2.27c0,.84-.08.92-.84.92s-.87-.06-.87-.88v-2c0-1.31.54-1.85,1.85-1.88l.44,0V2.81A1.89,1.89,0,0,1,4.47.67C5.33.58,6.19.49,7.06.43A71.65,71.65,0,0,1,19.91.68a1.85,1.85,0,0,1,1.82,2V6.61a1.29,1.29,0,0,0,.28.06c1.6.08,2,.51,2,2.13,0,.67,0,1.33,0,2s-.31.65-.77.64-.94.05-.94-.63V8.28c0-.34,0-.64-.58-.53V21.67c0,.53-.07.95-.64,1.19-.14.06-.25.4-.23.6.05.66-.25.89-.87.81h-.33C18.26,24.27,18.26,24.27,18,22.93ZM12.17,5H4.64c-1,0-1.26.26-1.26,1.27v8.26c0,.87.26,1.18,1.11,1.27a67.4,67.4,0,0,0,15.29,0c.84-.09,1.11-.4,1.11-1.26V6.25c0-.93-.28-1.2-1.19-1.21Zm0-3.48H7.2c-1.59,0-1.61-.15-1.59,1.59,0,.94.1,1,1,1H16.9c1.87,0,1.76.12,1.76-1.78,0-.61-.22-.88-.86-.87C15.91,1.57,14,1.56,12.14,1.56Zm0,19.37c-.73,0-1.46,0-2.19,0-.45,0-.48.23-.49.58s.11.52.49.52c1.47,0,2.93,0,4.39,0,.38,0,.5-.16.49-.52s0-.6-.5-.58C13.59,21,12.86,20.93,12.13,20.93ZM4.26,20a.92.92,0,0,0,.9-.88.89.89,0,0,0-1.77,0A.92.92,0,0,0,4.26,20ZM20,20a.89.89,0,1,0-.89-.9A.94.94,0,0,0,20,20Zm-13.33.2a.89.89,0,0,0,.92-.86.9.9,0,0,0-.89-.89.84.84,0,0,0-.87.83A.85.85,0,0,0,6.66,20.17Zm11.79-.87a.88.88,0,0,0-.88-.89.9.9,0,0,0-.87.91.88.88,0,0,0,1.75,0Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Bus
