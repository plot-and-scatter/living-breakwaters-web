import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

export const contentMap = {}

const BasementPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} />
      <Textbox xOffset={0.78} yOffset={0.93} textboxWidth={90}>
        Basement
      </Textbox>
    </svg>
  )
}

export default BasementPop
