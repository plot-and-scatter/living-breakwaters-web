import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Retail from '../../PlaceableSVGs/Buildings/Retail'
import Textbox from '../../PlaceableSVGs/Textbox'

const RetailPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <Retail xOffset={0.88} yOffset={0.495} narrativeStage={narrativeStage} />
      <Textbox xOffset={0.93} yOffset={0.9} textboxWidth={70}>
        Retail
      </Textbox>
    </svg>
  )
}

export default RetailPop
