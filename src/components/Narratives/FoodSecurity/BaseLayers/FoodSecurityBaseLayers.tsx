import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import FoodSecurityGround from './FoodSecurityGround'
import FreshWater from './FreshWater'
import FoodSecuritySeaLevel from './FoodSecuritySeaLevel'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import SaltwaterWedge from './SaltwaterWedge'
import SeaSurge from './SeaSurge'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const FoodSecurityBaseLayers = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG viewBoxObj={viewBox(0, -81, 1203.37, 126.69)} {...props}>
      <g id={`groundwater-${stage}`}>
        {/* <SeaSurge stage={stage} yOffset={0.54} /> */}
        <FoodSecuritySeaLevel stage={stage} />
        <FoodSecurityGround stage={stage} yOffset={0.64} />
        {/* <SaltwaterWedge stage={stage} yOffset={0.7} /> */}
        {/* <FreshWater stage={stage} yOffset={0.54} /> */}
      </g>
    </PlaceableSVG>
  )
}

export default FoodSecurityBaseLayers
