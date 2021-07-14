import React, { useCallback } from 'react'

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

const LogisticsPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (onClick) {
      if (narrativeStage === 1) onClick(STAGE_1_CONTENT)
      else if (narrativeStage === 2 || narrativeStage === 3)
        onClick(STAGE_2_3_CONTENT)
      else onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <FarmTruck xOffset={0.84} yOffset={0.73} />
      <Textbox xOffset={0.865} yOffset={0.85} textboxWidth={90}>
        Logistics
      </Textbox>
    </svg>
  )
}

export default LogisticsPop
