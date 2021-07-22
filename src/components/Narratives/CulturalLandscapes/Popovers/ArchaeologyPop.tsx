import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Midden from '../../PlaceableSVGs/Objects/Midden'

export const contentMap = {}

const ArchaeologyPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage >= 2 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  // TODO: Put the Midden underground
  const extraClasses = narrativeStage >= 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Midden scale={0.1} xOffset={0.33} yOffset={0.77} />
      <Midden scale={0.11} xOffset={0.34} yOffset={0.79} />
      <Textbox xOffset={0.39} yOffset={0.93} textboxWidth={110}>
        Archaeology
      </Textbox>
    </svg>
  )
}

export default ArchaeologyPop
