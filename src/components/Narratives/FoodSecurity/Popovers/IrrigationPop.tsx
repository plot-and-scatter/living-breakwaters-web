import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Irrigation from '../../PlaceableSVGs/Objects/Irrigation'
import Wheat from '../../PlaceableSVGs/Plants/Wheat'

const IrrigationPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum irrigation')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Irrigation xOffset={0.48} yOffset={0.735} />
      <Wheat xOffset={0.49} yOffset={0.745} />
      <Wheat xOffset={0.54} yOffset={0.745} />
      <Wheat xOffset={0.59} yOffset={0.745} />
      <Textbox xOffset={0.555} yOffset={0.85} textboxWidth={100}>
        Irrigation
      </Textbox>
    </svg>
  )
}

export default IrrigationPop
