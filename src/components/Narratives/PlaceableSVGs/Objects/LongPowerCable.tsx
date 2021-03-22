import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

// import './LongPowerCable.scss'

const LongPowerCable = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 2, 19)}
      defaultScale={0.3}
      extraClasses="LongPowerCable"
      {...props}
    >
      <g clip-path="url(#clip-path)"><g clip-path="url(#clip-path-2)"><g clip-path="url(#clip-path-3)" opacity=".84"><path stroke="#c3cc8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" d="M1 1v16.82"/></g></g></g>
    </PlaceableSVG>
  )
}

export default LongPowerCable
