import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import NewPumpStation from '../../PlaceableSVGs/Buildings/NewPumpStation'

const PumpStationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum pump station')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <NewPumpStation xOffset={0.268} yOffset={0.7525} />
      <Textbox xOffset={0.325} yOffset={0.9} textboxWidth={130}>
        Pump Station
      </Textbox>
    </svg>
  )
}

export default PumpStationPop
