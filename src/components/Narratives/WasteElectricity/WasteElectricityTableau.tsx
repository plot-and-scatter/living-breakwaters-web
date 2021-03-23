import React from 'react'

import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import SVGFrame from '../Frames/SVGFrame'

import '../PlaceableSVGs/Elements.scss'
import './WasteElectricityTableau.scss'

const WasteElectricityTableau = (): JSX.Element => {
  return (
    <div className="WasteElectricityTableau">
      <SVGFrame id="WasteElectricityTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
      </SVGFrame>
    </div>
  )
}

export default WasteElectricityTableau
