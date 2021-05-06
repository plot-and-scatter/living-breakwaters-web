import React from 'react'

import UtilitySystemsGround from './UtilitySystemsGround'
import UtilitySystemsSeaLevel from './UtilitySystemsSeaLevel'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 2368, 613)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <UtilitySystemsSeaSurge stage={stage} /> */}
        <UtilitySystemsSeaLevel stage={stage} />
        <UtilitySystemsGround />
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
