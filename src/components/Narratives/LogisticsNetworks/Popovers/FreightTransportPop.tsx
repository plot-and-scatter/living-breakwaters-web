import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Tree from '../../PlaceableSVGs/Trees/Tree'
import Train from '../../PlaceableSVGs/Vehicles/Train'
import Truck3 from '../../PlaceableSVGs/Vehicles/Truck3'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = (
  <p>
    <ALink
      external
      href="https://www.cbc.ca/news/canada/british-columbia/vancouver-port-strike-stops-90-of-container-truck-traffic-1.2567458"
    >
      The 2014 Vancouver Truckers Strike
    </ALink>{' '}
    provided a glimpse into the future of what the impacts of supply chain
    disruptions could mean socially and economically.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT
}

const FreightTransportPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Tree xOffset={0.44} yOffset={0.75} />
      <Train xOffset={0.488} yOffset={0.785} />
      <Tree xOffset={0.52} yOffset={0.75} />
      <Truck3 xOffset={0.57} yOffset={0.793} />
      <Textbox xOffset={0.53} yOffset={0.9} textboxWidth={150}>
        Freight Transport
      </Textbox>
    </svg>
  )
}

export default FreightTransportPop
