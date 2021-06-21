import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './SewerLarge.scss'

const SewerLarge = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 692.1, 29.15)}
      defaultScale={0.5}
      extraClasses="SewerLarge"
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_FRONT" data-name="EXISTING OBJECTS FRONT">
          <g id="sewer_outflow" data-name="sewer outflow">
            <polyline
              className="cls-1"
              points="689.6 0 689.6 11.87 408.98 21.66 0.03 26.65"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default SewerLarge
