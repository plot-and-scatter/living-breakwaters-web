import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Bush1 from '../../PlaceableSVGs/Plants/Bush1'

const UnirrigatedPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 1 && onClick) {
      onClick('Lorem ipsum unirrigated')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Bush1 xOffset={0.9} yOffset={0.741} />
      <Bush1 xOffset={0.92} yOffset={0.741} />
      <Bush1 xOffset={0.94} yOffset={0.741} />
      <Bush1 xOffset={0.96} yOffset={0.741} />
      <Bush1 xOffset={0.98} yOffset={0.741} />
      <Textbox xOffset={0.95} yOffset={0.85} textboxWidth={110}>
        Unirrigated
      </Textbox>
    </svg>
  )
}

export default UnirrigatedPop
