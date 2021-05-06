import React from 'react'

import CulturalLandscapesGround from './CulturalLandscapesGround'
import CulturalLandscapesSeaLevel from './CulturalLandscapesSeaLevel'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(1, 76, 2031, 520)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <CulturalLandscapesSeaSurge stage={stage} /> */}
        <CulturalLandscapesSeaLevel stage={stage} />
        <CulturalLandscapesGround />
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
