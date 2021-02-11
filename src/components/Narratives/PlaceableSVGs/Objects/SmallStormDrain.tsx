import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const SmallStormDrain = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 35, 11)}
      defaultScale={0.5}
      {...props}
    >
      <g className="cls-2">
        <g className="cls-2">
          <g className="cls-6">
            <g className="cls-6">
              <path
                className="cls-3"
                d="M1909.83 318.77v5.92l-13.11 2.21a4 4 0 00-.08-.4l12.74-2.15v-5.58z"
                transform="translate(-1875.12 -318.57)"
              />
              <path
                className="cls-3"
                d="M1891.81 326.63c.17-1 .89-1.49 2.32-1.56s2.25.36 2.51 1.43a4 4 0 01.08.4v.29c.09 1.59-.6 2.28-2.36 2.37s-2.51-.55-2.6-2.13a2.67 2.67 0 010-.4 2.6 2.6 0 010-.4m2.55 2.51c1.44-.06 2-.63 1.93-1.92s-.7-1.81-2.13-1.74-2 .62-1.93 1.93.7 1.8 2.13 1.73"
                transform="translate(-1875.12 -318.57)"
              />
              <path
                className="cls-3"
                d="M1896.29 327.22c.07 1.29-.49 1.86-1.93 1.92s-2.06-.44-2.13-1.73.5-1.86 1.93-1.93 2.06.44 2.13 1.74M1875.68 324.27l16.13 2.37a2.38 2.38 0 000 .39l-16.54-2.42v-5.92h.44z"
                transform="translate(-1875.12 -318.57)"
              />
            </g>
          </g>
          <path
            className="cls-7"
            d="M1892.24 327.41c-.08-1.3.49-1.86 1.92-1.93s2.06.44 2.13 1.74-.49 1.86-1.93 1.92-2.06-.44-2.12-1.73z"
            transform="translate(-1875.12 -318.57)"
          />
          <path
            className="cls-7"
            d="M1896.72 326.9v.29c.09 1.59-.6 2.28-2.36 2.37s-2.51-.55-2.6-2.13a2.67 2.67 0 010-.4 2.38 2.38 0 010-.39c.17-1 .89-1.5 2.32-1.57s2.25.36 2.51 1.43a4 4 0 01.13.4z"
            transform="translate(-1875.12 -318.57)"
          />
          <path
            className="cls-7"
            d="M21.47 7.94l.05-.01 12.75-2.15V.2h.44v5.92L21.6 8.34h-.02M16.68 8.46h-.01L.13 6.04V.13h.44v5.58L16.7 8.07l.08.01"
          />
          <g clipPath="url(#clip-path-5)" opacity=".2">
            <path
              d="M1892.28 327.83h4a1.8 1.8 0 01-1.94 1.32 2.05 2.05 0 01-2.08-1.32"
              transform="translate(-1875.12 -318.57)"
              fill="#5f9c98"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default SmallStormDrain
