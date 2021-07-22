import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Subway from '../../PlaceableSVGs/Objects/Subway'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

export const contentMap = {}

const SubwayPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage >= 3 && onClick) {
      onClick('Lorem ipsum subway')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage >= 3 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Subway xOffset={0.699} yOffset={0.7815} scale={0.1695} />
      <Textbox xOffset={0.829} yOffset={0.93} textboxWidth={90}>
        Subway
      </Textbox>
    </svg>
  )
}

export default SubwayPop
