import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Farmhouse from '../../PlaceableSVGs/Buildings/Farmhouse'

const FarmhousePop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum farmhouse')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Farmhouse xOffset={0.7} yOffset={0.58} scale={0.12} />
      <Textbox xOffset={0.76} yOffset={0.85} textboxWidth={105}>
        Farmhouse
      </Textbox>
    </svg>
  )
}

export default FarmhousePop
