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
              points="689.6 0 689.6 11.87 408.98 21.66 0.03 28"
            />
            <line className="cls-1" x1="539.5" y1="7" x2="539.5" y2="17.94" />
            <line className="cls-1" x1="367.27" y1="16" x2="367.27" y2="22.2" />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default SewerLarge
