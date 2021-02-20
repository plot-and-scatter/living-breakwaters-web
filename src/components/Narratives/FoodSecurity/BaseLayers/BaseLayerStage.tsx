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
import Text from '../../PlaceableSVGs/Text'
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
        {/* <SeaSurge stage={stage} /> */}
        <MeanSeaLevel stage={stage} />
        <AgricultureGround stage={stage} />
        {/* <SaltwaterWedge stage={stage} /> */}
        {/* <FreshWater stage={stage} /> */}
      </g>
    </PlaceableSVG>
  )
}

export default BaseLayerStage
