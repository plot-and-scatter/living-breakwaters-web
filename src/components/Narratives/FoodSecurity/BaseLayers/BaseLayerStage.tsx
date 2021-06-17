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
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../Frames/SVGFrame'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const BaseLayerStage = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      extraClasses="BaseLayerStage"
      viewBoxObj={viewBox(0, 0, SVG_FRAME_X, SVG_FRAME_Y)}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <SeaSurge stage={stage} yOffset={0.54} /> */}
        <MeanSeaLevel stage={stage} yOffset={0.68} />
        <AgricultureGround stage={stage} yOffset={0.846} />
        {/* <SaltwaterWedge stage={stage} yOffset={0.7} /> */}
        {/* <FreshWater stage={stage} yOffset={0.54} /> */}
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
