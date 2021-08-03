import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import FarmTruck from '../../PlaceableSVGs/Vehicles/FarmTruck'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

const STAGE_1_CONTENT = (
  <p>
    Crops may be affected due to salt water intrusion, which may force farmers
    to change crops.
  </p>
)

const STAGE_2_3_CONTENT = (
  <p>
    Flooding may impact availability of agricultural products and food security.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_3_CONTENT,
  3: STAGE_2_3_CONTENT
}

const LogisticsPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <FarmTruck xOffset={0.84} yOffset={0.73} />
      <Textbox xOffset={0.865} yOffset={0.85} textboxWidth={90}>
        Logistics
      </Textbox>
    </svg>
  )
}

export default LogisticsPop
