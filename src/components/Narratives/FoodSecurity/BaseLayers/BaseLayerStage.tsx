import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import AgricultureGround from './AgricultureGround'
import FreshWater from './FreshWater'
import MeanSeaLevel from './MeanSeaLevel'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import SaltwaterWedge from './SaltwaterWedge'
import SeaSurge from './SeaSurge'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBox={viewBox(0, 83, 1962, 520)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        <SeaSurge stage={stage} />
        <MeanSeaLevel stage={stage} />
        <AgricultureGround stage={stage} />
        <SaltwaterWedge stage={stage} />
        <FreshWater stage={stage} />
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
