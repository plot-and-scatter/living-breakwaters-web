import React from 'react'

import CriticalInfrastructureGround from './CriticalInfrastructureGround'
import CriticalInfrastructureSeaLevel from './CriticalInfrastructureSeaLevel'
import CriticalInfrastructureSeaSurge from './CriticalInfrastructureSeaSurge'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBox={viewBox(-9, 76, 2035, 520)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <CriticalInfrastructureSeaSurge stage={stage} /> */}
        <CriticalInfrastructureSeaLevel stage={stage} />
        <CriticalInfrastructureGround />
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
