import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

import './Popover.scss'

const BasementPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <House1 scale={0.06} xOffset={0.725} yOffset={0.685} />
      <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} />
      <Textbox xOffset={0.78} yOffset={0.93} textboxWidth={90}>
        Basement
      </Textbox>
    </svg>
  )
}

export default BasementPop
