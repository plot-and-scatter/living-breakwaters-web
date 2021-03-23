import React from 'react'

import WasteElectricityGround from './WasteElectricityGround'
import WasteElectricitySeaLevel from './WasteElectricitySeaLevel'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(-9, 76, 2035, 520)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <WasteElectricitySeaSurge stage={stage} /> */}
        <WasteElectricitySeaLevel stage={stage} />
        <WasteElectricityGround />
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
