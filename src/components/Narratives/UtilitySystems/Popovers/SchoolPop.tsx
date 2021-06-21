import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Office1 from '../../PlaceableSVGs/Buildings/Office1'

import './Popover.scss'

const SchoolPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <Office1 xOffset={0.765} yOffset={0.62} scale={0.08} />
      <Textbox xOffset={0.78} yOffset={0.86} textboxWidth={70}>
        School
      </Textbox>
    </svg>
  )
}

export default SchoolPop
