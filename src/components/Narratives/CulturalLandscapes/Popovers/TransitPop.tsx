import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Bus from '../../PlaceableSVGs/Vehicles/Bus'

export const contentMap = {}

const BasementPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Bus xOffset={0.545} yOffset={0.721} scale={0.02} />
      <Textbox xOffset={0.555} yOffset={0.93} textboxWidth={80}>
        Transit
      </Textbox>
    </svg>
  )
}

export default BasementPop
