import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

const BeachPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage >= 2 && onClick) {
      onClick('Lorem ipsum retail')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage >= 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      {/* <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} /> */}
      <Textbox xOffset={0.18} yOffset={0.93} textboxWidth={70}>
        Beach
      </Textbox>
    </svg>
  )
}

export default BeachPop
