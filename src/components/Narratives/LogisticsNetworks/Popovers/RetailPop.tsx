import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Retail from '../../PlaceableSVGs/Buildings/Retail'
import Textbox from '../../PlaceableSVGs/Textbox'

const STAGE_1_CONTENT = (
  <p>
    Interruptions to shipping and cargo operations may affect the availability
    as well as the price of items in stores.
  </p>
)

// TODO: Should this be identical?

const STAGE_2_CONTENT = (
  <p>
    Interruptions to shipping and cargo operations will affect the availability
    as well as the price of retail items in stores.
  </p>
)

const RetailPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage === 1 && onClick) {
      onClick(STAGE_1_CONTENT)
    } else if (narrativeStage === 2 && onClick) {
      onClick(STAGE_2_CONTENT)
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
        <Retail
          xOffset={0.88}
          yOffset={0.495}
          narrativeStage={narrativeStage}
        />
        <Textbox xOffset={0.93} yOffset={0.9} textboxWidth={70}>
          Retail
        </Textbox>
      </svg>
      <path className="FillGround" d="M700 244.5 l 85 -8.5 v 10 h -85" />
    </>
  )
}

export default RetailPop
