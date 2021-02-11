import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Person2 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 4.2, 13.3)}
      defaultScale={0.5}
      {...props}
    >
      <g className="cls-2">
        <g clipPath="url(#clip-path-3)" opacity=".3">
          <path
            d="M647.13 421.67l-.71-.05a2.62 2.62 0 01.17-1.51 1 1 0 00.09-.74 2.47 2.47 0 010-1.45c.06-.53 0-.54.65-1.3 0-.64-.1-1.34.55-1.74a1.46 1.46 0 011.43 0c0 .31.09.61.14.91s-.3.67-.65.94l1.09.64c.17.66.32 1.23.46 1.79l-.7.33c0 .21.07.38.1.56a1.41 1.41 0 010 .45 13.57 13.57 0 01-.71 3.32 1.68 1.68 0 00-.07 1.36 10.3 10.3 0 01.25 1.13 7.93 7.93 0 00.43.91l-1.24.14c-.11-.51-.22-1.06-.34-1.68l-.87 1.29.24.6-.54.21-.55-.74a1.21 1.21 0 01.24-1l1.08-1.71a1.37 1.37 0 000-1.53c-.21-.36-.4-.72-.62-1.11"
            transform="translate(-646.3 -414.62)"
            fill="#fff"
          />
          <path
            d="M.83 7.05L.12 7a2.62 2.62 0 01.17-1.51 1 1 0 00.09-.74 2.47 2.47 0 010-1.45c.06-.53 0-.54.65-1.3 0-.64-.1-1.34.55-1.74a1.46 1.46 0 011.43 0c0 .31.09.61.14.91s-.3.67-.65.94l1.09.64c.17.66.32 1.23.46 1.79l-.7.33c0 .21.07.38.1.56a1.41 1.41 0 010 .45 13.57 13.57 0 01-.71 3.32 1.68 1.68 0 00-.07 1.36 10.3 10.3 0 01.25 1.13 7.93 7.93 0 00.43.91l-1.24.14c-.11-.51-.22-1.06-.34-1.68L.9 12.35l.24.6-.54.21-.55-.74a1.21 1.21 0 01.24-1l1.08-1.71a1.37 1.37 0 000-1.53c-.13-.38-.32-.74-.54-1.13z"
            stroke="#231f20"
            strokeMiterlimit="10"
            strokeWidth=".15"
            fill="none"
          />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Person2
