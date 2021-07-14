import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Bush1 from '../../PlaceableSVGs/Plants/Bush1'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = <p>Flooding may damage crops and food security.</p>

const STAGE_3_CONTENT = (
  <p>
    Flooding may damage crops and food security.{' '}
    <ALink
      external
      href="https://mavensnotebook.com/2016/08/25/farms-as-floodplains-a-summary-after-five-years-of-experimental-flooding-of-agricultural-land/"
    >
      Here is a link to an article
    </ALink>{' '}
    describing a pilot project in the California Delta of experiential farming
    on agricultural lands.
  </p>
)

const UnirrigatedPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage === 1) onClick(STAGE_2_CONTENT)
    else if (narrativeStage === 2 || narrativeStage === 3)
      onClick(STAGE_3_CONTENT)
    else onClick(undefined)
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 2 ? 'Red' : ''

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
