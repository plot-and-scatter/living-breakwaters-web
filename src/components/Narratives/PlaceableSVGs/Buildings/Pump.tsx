import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Pump = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={viewBox(638, 250, 194, 54)}
      defaultScale={0.5}
      {...props}
    >
      <path className="cls-26" d="M754 273.9v-23.6h77.4v51.9L754 273.9z" />
      <path className="cls-26" d="M638.2 295.8h193.2v7.5H638.2z" />
    </PlaceableSVG>
  )
}

export default Pump
