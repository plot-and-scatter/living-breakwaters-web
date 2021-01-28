import React from 'react'

import AgricultureGround from './AgricultureGround'
import FreshWater from './FreshWater'
import MeanSeaLevel from './MeanSeaLevel'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import SaltwaterWedge from './SaltwaterWedge'
import SeaSurge from './SeaSurge'

const BaseLayerStage = ({ stage }: NarrativeStageProps): JSX.Element => {
  return (
    <g id={`groundwater-${stage}`}>
      <SeaSurge stage={stage} />
      <MeanSeaLevel stage={stage} />
      <AgricultureGround stage={stage} />
      <SaltwaterWedge stage={stage} />
      <FreshWater stage={stage} />
    </g>
  )
}

export default BaseLayerStage
