import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Subway from '../../PlaceableSVGs/Objects/Subway'
import Basement from '../../PlaceableSVGs/Buildings/Basement'
import ALink from '../../../Layout/ALink'

const STAGE_3_CONTENT = (
  <p>
    Coastal flooding has, and will increasingly cause causing dangerous and
    disruptive flooding to underground rail systems around the world. We have
    already seen flooded tunnels and stations, disrupted services and stranded
    passengers in New York, Boston, London, San Francisco, Barcelona, Taipei,
    Bangkok and a host of other cities in recent years.{' '}
    <ALink
      external
      href="https://www.bloomberg.com/news/articles/2021-06-21/how-climate-proofing-public-transit-can-make-cities-more-equal"
    >
      Please follow this link to a recent Bloomberg article on climate-proofing
      mass transit systems
    </ALink>
    .{' '}
  </p>
)

export const contentMap = {
  3: STAGE_3_CONTENT
}

const SubwayPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 3 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Subway xOffset={0.699} yOffset={0.7815} scale={0.1695} />
      <Textbox xOffset={0.829} yOffset={0.93} textboxWidth={90}>
        Subway
      </Textbox>
    </svg>
  )
}

export default SubwayPop
