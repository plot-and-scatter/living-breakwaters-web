import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './NewPumpStation.scss'

const NewPumpStation = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'NewPumpStation'}
      viewBoxObj={viewBox(0, 0, 139.65, 23.19)}
      defaultScale={0.1}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS_FRONT" data-name="EXISTING OBJECTS FRONT">
          <g id="pump_station" data-name="pump station">
            <polygon
              className="cls-1"
              points="98.77 18.47 98.77 0.25 79 0.25 79 18.47 0.69 18.47 0.69 21.55 139.4 21.55 139.4 18.47 139.38 11.14 127.72 10.85 127.69 18.47 98.77 18.47"
            />
            <polygon
              className="cls-1"
              points="118.19 18.03 119.53 17.44 119.53 22.78 118.16 22.05 118.19 18.03"
            />
            <polygon
              className="cls-1"
              points="76.19 18.03 77.53 17.44 77.53 22.78 76.16 22.05 76.19 18.03"
            />
            <polygon
              className="cls-1"
              points="56.19 18.03 57.53 17.44 57.53 22.78 56.16 22.05 56.19 18.03"
            />
            <polygon
              className="cls-1"
              points="35.19 18.03 36.53 17.44 36.53 22.78 35.16 22.05 35.19 18.03"
            />
            <polygon
              className="cls-1"
              points="15.19 18.03 16.53 17.44 16.53 22.78 15.16 22.05 15.19 18.03"
            />
            <rect
              className="cls-1"
              x="0.25"
              y="17.74"
              width="1.34"
              height="4.48"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default NewPumpStation
