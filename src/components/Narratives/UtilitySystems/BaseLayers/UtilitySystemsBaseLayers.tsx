import React from 'react'

import UtilitySystemsGround from './UtilitySystemsGround'
import UtilitySystemsSeaLevel from './UtilitySystemsSeaLevel'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const UtilitySystemsBaseLayers = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, -300, 2368, 500)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <UtilitySystemsSeaSurge stage={stage} /> */}
        <UtilitySystemsSeaLevel stage={stage} />
        <UtilitySystemsGround stage={stage} yOffset={0.01} />
      </g>
    </PlaceableSVG>
  )
}

export default UtilitySystemsBaseLayers
