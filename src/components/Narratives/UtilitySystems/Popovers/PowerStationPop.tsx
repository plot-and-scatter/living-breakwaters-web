import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import PowerPlant from '../../PlaceableSVGs/Objects/PowerPlant'

const PowerStationPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <PowerPlant scale={0.1} xOffset={0.5} yOffset={0.617} />
      <Textbox xOffset={0.55} yOffset={0.93} textboxWidth={120}>
        Power Station
      </Textbox>
    </svg>
  )
}

export default PowerStationPop
