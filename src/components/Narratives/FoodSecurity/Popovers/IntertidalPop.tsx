import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import IntertidalPlant from '../../PlaceableSVGs/Plants/IntertidalPlant'

const IntertidalPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum intertidal')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <IntertidalPlant xOffset={0.1 + 0.0} yOffset={0.8 - 0.0} />
      <IntertidalPlant xOffset={0.1 + 0.04} yOffset={0.8 - 0.01} />
      <IntertidalPlant xOffset={0.1 + 0.08} yOffset={0.8 - 0.02} />
      <IntertidalPlant xOffset={0.1 + 0.12} yOffset={0.8 - 0.03} />
      <Textbox xOffset={0.15} yOffset={0.85} textboxWidth={90}>
        Intertidal
      </Textbox>
    </svg>
  )
}

export default IntertidalPop