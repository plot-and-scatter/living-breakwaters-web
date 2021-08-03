import React from 'react'

import LogisticsNetworksGround from './LogisticsNetworksGround'
import LogisticsNetworksSeaLevel from './LogisticsNetworksSeaLevel'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const LogisticsNetworksBaseLayers = (props: Props): JSX.Element => {
  const { stage } = props

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, -81, 1203.37, 126.69)}
      defaultScale={1}
      {...props}
    >
      <g id={`groundwater-${stage}`}>
        {/* <LogisticsNetworksSeaSurge stage={stage} /> */}
        <LogisticsNetworksSeaLevel stage={stage} />
        <LogisticsNetworksGround />
      </g>
    </PlaceableSVG>
  )
}

export default LogisticsNetworksBaseLayers
