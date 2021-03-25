import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './LongPowerCable.scss'

const LongPowerCable = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 2, 19)}
      defaultScale={0.3}
      extraClasses="LongPowerCable"
      {...props}
    >
      <path
        // stroke="#c3cc8d"
        // strokeLinecap="round"
        // strokeLinejoin="round"
        // strokeWidth="2"
        // fill="none"
        d="M1 1v16.82"
      />
    </PlaceableSVG>
  )
}

export default LongPowerCable
