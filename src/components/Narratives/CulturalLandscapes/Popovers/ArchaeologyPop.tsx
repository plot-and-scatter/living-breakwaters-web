import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import Midden from '../../PlaceableSVGs/Objects/Midden'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

export const contentMap = {}

const ArchaeologyPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Midden scale={0.1} xOffset={0.33} yOffset={0.77} />
      <Midden scale={0.11} xOffset={0.34} yOffset={0.79} />
      <Textbox xOffset={0.39} yOffset={0.93} textboxWidth={110}>
        Archaeology
      </Textbox>
    </svg>
  )
}

export default ArchaeologyPop
