import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './TrafficLight.scss'

const TrafficLight = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 36.26, 74.82)}
      defaultScale={0.5}
      extraClasses={'TrafficLight'}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="power_line" data-name="power line">
            <path
              className="cls-1"
              d="M.9,74.82v-.89l.8-.07c0-.16-.08-2.75-.1-41.5,0-8.4,2-14.76,6-18.9a18.12,18.12,0,0,1,13.26-5.2l15.35.25,0-1.77L21,6.49a19.28,19.28,0,0,0-14.4,5.66C2.2,16.64,0,23.44,0,32.36,0,53.83,0,64,.06,68.74c0,2.6,0,3.9,0,4.55S.11,74.82.9,74.82Z"
            />
            <path
              className="cls-1"
              d="M29.81,0V15.45h-7V0Zm-3.5,14.4a2.06,2.06,0,1,0-2.16-2.06A2.12,2.12,0,0,0,26.31,14.4Zm0-4.62a2.11,2.11,0,0,0,2.16-2.06,2.16,2.16,0,0,0-4.32,0A2.11,2.11,0,0,0,26.31,9.78Zm0-4.61a2.11,2.11,0,0,0,2.16-2.06,2.16,2.16,0,0,0-4.32,0A2.11,2.11,0,0,0,26.31,5.17Z"
            />
            <path
              className="cls-2"
              d="M26.31,9.78a2.11,2.11,0,0,0,2.16-2.06,2.16,2.16,0,0,0-4.32,0A2.11,2.11,0,0,0,26.31,9.78Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default TrafficLight
