import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Rowboat from '../../PlaceableSVGs/People/Rowboat'

const FishingPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 0 && onClick) {
      onClick('Lorem ipsum fishing')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  const offset = narrativeStage === 2 ? -0.02 : narrativeStage === 3 ? -0.02 : 0

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Rowboat scale={0.0524} xOffset={0.03} yOffset={0.768 + offset} />
      <Textbox xOffset={0.075} yOffset={0.93} textboxWidth={90}>
        Fishing
      </Textbox>
    </svg>
  )
}

export default FishingPop
