import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Hotel from '../../PlaceableSVGs/Buildings/Hotel'

export const contentMap = {}

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
