import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Pier.scss'

const Pier = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Pier'}
      viewBoxObj={viewBox(0, 0, 80.93, 36.61)}
      defaultScale={0.065}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_SECTION">
          <g id="pier">
            <polyline
              className="cls-1"
              points="28.47 4.26 28.47 10.94 30.58 10.94 30.58 36.6 33.24 36.6 33.24 11.22 35.21 11.22 35.21 4.26 47.69 4.26 54.84 4.26 54.84 10.94 56.94 10.94 56.94 36.6 59.61 36.6 59.61 11.22 61.57 11.22 61.57 4.26 80.93 4.26 80.93 0 0 0 0 2.94 0 4.26 0 10.94 2.1 10.94 2.1 36.6 4.77 36.6 4.77 11.22 6.73 11.22 6.73 4.26 28.47 4.26"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Pier
