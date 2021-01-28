import React from 'react'

import CriticalInfrastructureGround from './CriticalInfrastructureGround'
import CriticalInfrastructureSeaLevel from './CriticalInfrastructureSeaLevel'
import CriticalInfrastructureSeaSurge from './CriticalInfrastructureSeaSurge'

interface Props {
  stage: number
}

const BaseLayerStage = ({ stage }: Props): JSX.Element => {
  return (
    <g id={`groundwater-${stage}`}>
      <CriticalInfrastructureSeaSurge stage={stage} />
      <CriticalInfrastructureSeaLevel stage={stage} />
      <CriticalInfrastructureGround />
    </g>
  )
}

export default BaseLayerStage
