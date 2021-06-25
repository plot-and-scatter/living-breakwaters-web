import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Factory from '../../PlaceableSVGs/Buildings/Factory'

const TreatmentPlantPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Factory xOffset={0.3} yOffset={0.6565} scale={0.15} />
      <Textbox xOffset={0.37} yOffset={0.93} textboxWidth={130}>
        Treatment Plant
      </Textbox>
    </svg>
  )
}

export default TreatmentPlantPop
