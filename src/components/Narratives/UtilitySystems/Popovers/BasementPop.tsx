import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import House1 from '../../PlaceableSVGs/Buildings/House1'
import Basement from '../../PlaceableSVGs/Buildings/Basement'

const STAGE_2_CONTENT = (
  <p>
    During heavy rains, combined sewer systems can become overwhelmed with
    water. This can cause sewer water to back up in the system and sometimes
    into homes. Sea level rise will exacerbate this issue as treatment plants
    may not be able to discharge water during high tides.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    Without any adaptation of the combined sewage system, sewage backup in
    basements during rain events will become the norm.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const BasementPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Basement scale={0.0524} xOffset={0.729} yOffset={0.768} />
      <Textbox xOffset={0.78} yOffset={0.93} textboxWidth={90}>
        Basement
      </Textbox>
    </svg>
  )
}

export default BasementPop
