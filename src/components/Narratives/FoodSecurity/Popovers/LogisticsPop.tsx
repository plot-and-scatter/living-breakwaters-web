import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import FarmTruck from '../../PlaceableSVGs/Vehicles/FarmTruck'

const LogisticsPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage >= 1 && onClick) {
      onClick('Lorem ipsum logistics')
    } else {
      onClick(undefined)
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
