import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Basement from '../../PlaceableSVGs/Buildings/Basement'
import Car3 from '../../PlaceableSVGs/Vehicles/Car3'

const STAGE_1_CONTENT = <p></p>

const STAGE_2_CONTENT = <p></p>

const STAGE_3_CONTENT = <p></p>

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const UndergroundParkingPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Basement xOffset={0.89} yOffset={0.766} scale={0.11} />
      <Car3 scale={0.02} xOffset={0.905} yOffset={0.8} />
      <Car3 scale={0.02} xOffset={0.935} yOffset={0.8} />
      <Car3 scale={0.02} xOffset={0.965} yOffset={0.8} />
      <Textbox xOffset={0.93} yOffset={0.93} textboxWidth={170}>
        Underground Parking
      </Textbox>
    </svg>
  )
}

export default UndergroundParkingPop
