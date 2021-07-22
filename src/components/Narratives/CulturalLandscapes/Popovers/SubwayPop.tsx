import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Subway from '../../PlaceableSVGs/Objects/Subway'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

export const contentMap = {}

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
