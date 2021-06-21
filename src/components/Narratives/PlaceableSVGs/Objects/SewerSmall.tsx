import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './SewerSmall.scss'

const SewerSmall = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 211.53, 8.8)}
      defaultScale={0.5}
      extraClasses="SewerSmall"
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_FRONT" data-name="EXISTING OBJECTS FRONT">
          <g id="sewer_outflow" data-name="sewer outflow">
            <polyline className="cls-1" points="209.03 0 209.03 6.3 0 6.3" />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default SewerSmall
