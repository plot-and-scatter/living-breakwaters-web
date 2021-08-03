import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

export const contentMap = {}

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
