import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Bus from '../../PlaceableSVGs/Vehicles/Bus'

const STAGE_1_CONTENT = <p></p>

const STAGE_2_CONTENT = <p></p>

const STAGE_3_CONTENT = <p></p>

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const TransitPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Textbox xOffset={0.555} yOffset={0.93} textboxWidth={80}>
        Transit
      </Textbox>
    </svg>
  )
}

export default TransitPop
