import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import SewerSmall from '../../PlaceableSVGs/Objects/SewerSmall'

export const contentMap = {}

const OutflowPop = (props: PlaceableSVGProps): JSX.Element => {
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
      <SewerSmall scale={0.2} xOffset={0.15} yOffset={0.77} />
      <Textbox xOffset={0.2} yOffset={0.93} textboxWidth={70}>
        Outflow
      </Textbox>
    </svg>
  )
}

export default OutflowPop
