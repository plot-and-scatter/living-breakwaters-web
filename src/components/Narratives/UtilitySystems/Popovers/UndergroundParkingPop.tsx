import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Basement from '../../PlaceableSVGs/Buildings/Basement'
import Car3 from '../../PlaceableSVGs/Vehicles/Car3'

import './Popover.scss'

const UndergroundParkingPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <Basement xOffset={0.89} yOffset={0.763} scale={0.11} />
      <Car3 xOffset={0.895} yOffset={0.787} />
      <Car3 xOffset={0.93} yOffset={0.787} />
      <Car3 xOffset={0.965} yOffset={0.787} />
      <Textbox xOffset={0.93} yOffset={0.93} textboxWidth={170}>
        Underground Parking
      </Textbox>
    </svg>
  )
}

export default UndergroundParkingPop
