import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = (
  <p>
    Beaches not only provide important habitat for birds, shellfish and turtles,
    they are important cultural sites for recreation, leisure, and ceremonies.
    As a result of sea level rise, wave action and flooding, beaches will be
    eroding unless nourished or protected with other measures.{' '}
    <ALink
      external
      href="https://climate.nasa.gov/blog/2974/cant-see-sea-level-rise-youre-looking-in-the-wrong-place/"
    >
      {' '}
      This article from NASA
    </ALink>{' '}
    discusses how every inch of sea level rise results in the loss of about 2.5
    meters of beach.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    Without adaptation, many of the beaches will be inundated or eroded with
    ongoing sea level rise and storm surges.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const BeachPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      {/* <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} /> */}
      <Textbox xOffset={0.18} yOffset={0.93} textboxWidth={70}>
        Beach
      </Textbox>
    </svg>
  )
}

export default BeachPop
