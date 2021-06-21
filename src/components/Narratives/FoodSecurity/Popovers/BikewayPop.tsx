import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import './Popover.scss'
import Bicyclist from '../../PlaceableSVGs/People/Bicyclist'

const BikewayPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage > 2 && onClick) {
      onClick('Lorem ipsum bikeway')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Bicyclist xOffset={0.31} yOffset={0.71} />
      <Textbox xOffset={0.325} yOffset={0.83} textboxWidth={90}>
        Bikeway
      </Textbox>
    </svg>
  )
}

export default BikewayPop
