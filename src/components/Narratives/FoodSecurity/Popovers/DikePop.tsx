import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Bicyclist from '../../PlaceableSVGs/People/Bicyclist'

const STAGE_3_CONTENT = (
  <p>
    Without adaptation, a combination of sea level rise and storm surge events
    will lead to dike overtopping and subsequent flooding of low-lying
    agricultural areas in coastal floodplains.
  </p>
)

const DikePop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage === 3 && onClick) {
      onClick(STAGE_3_CONTENT)
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
      <Bicyclist xOffset={0.31} yOffset={0.71} />
      <Textbox xOffset={0.325} yOffset={0.83} textboxWidth={60}>
        Dike
      </Textbox>
    </svg>
  )
}

export default DikePop
