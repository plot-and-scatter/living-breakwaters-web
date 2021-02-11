import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const House2 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 117.2, 52.2)}
      defaultScale={0.5}
      {...props}
    >
      <g id="objects">
        <path
          strokeWidth=".3"
          stroke="#010101"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fff"
          d="M5 50h104v2H5z"
        />
        <path
          d="M117 12h-8v38H83V37h-8v13H5V33H0a9 9 0 011-1l7-6a5 5 0 012 0h39V12h-9a9 9 0 011-2l13-9a5 5 0 013-1h40c4 0 7 1 10 3l9 7 1 1z"
          stroke="#231f20"
          strokeMiterlimit="10"
          strokeWidth=".3"
          fill="#fff"
        />
        <path
          className="cls-3"
          d="M62 15h3v3h-3zM61 39h4v3h-4zM92 39h4v3h-4zM79 30h4v3h-4zM75 30h3v3h-3zM97 39h3v3h-3zM75 18h3v3h-3zM61 19h4v2h-4zM96 18h4v3h-4zM92 19h4v2h-4zM79 26h4v3h-4zM97 43h3v3h-3zM92 43h4v3h-4zM62 43h3v3h-3zM57 39h3v3h-3zM57 15h4v3h-4zM80 18h3v3h-3zM75 26h3v3h-3zM57 18h4v3h-4zM57 43h4v3h-4zM49 26v24M8 33h37v15H8zM75 15h3v3h-3zM96 15h4v3h-4zM92 15h4v3h-4zM80 15h3v3h-3zM62 26h3v3h-3zM61 30h4v3h-4zM57 26h4v3h-4zM57 30h4v3h-4zM96 26h4v3h-4zM96 30h4v3h-4zM92 26h3v3h-3zM92 30h3v3h-3z"
        />
      </g>
    </PlaceableSVG>
  )
}

export default House2
