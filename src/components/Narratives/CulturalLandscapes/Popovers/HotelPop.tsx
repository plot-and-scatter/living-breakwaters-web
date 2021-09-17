import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Hotel from '../../PlaceableSVGs/Buildings/Hotel'

const STAGE_3_CONTENT = (
  <p>
    The implications of flooding on coastal tourism will be enormous. For
    examples, the 2014 IPCC report states that more than 60% of Europeans opt
    for beach holidays and beach tourism provides more than 80% of US tourism
    receipts. More than 100 countries benefit from the recreational value
    provided by their coastal ecosystems (i.e., coral reefs), which contributed
    us$11.5 billion to global tourism. Island Nations rely most heavily or
    coastal tourism and will be most impacted.
  </p>
)

export const contentMap = {
  3: STAGE_3_CONTENT
}

const HotelPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Hotel xOffset={0.613} yOffset={0.531} />
      <Textbox xOffset={0.66} yOffset={0.93} textboxWidth={70}>
        Hotel
      </Textbox>
    </svg>
  )
}

export default HotelPop
