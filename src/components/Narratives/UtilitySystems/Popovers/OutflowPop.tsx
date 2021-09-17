import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import SewerSmall from '../../PlaceableSVGs/Objects/SewerSmall'

const STAGE_1_CONTENT = (
  <p>
    Many coastal communities have implemented so-called combined sewer systems—
    designed to collect rainwater, domestic sewage and industrial wastewater in
    the same pipe. short description. During periods of heavy rainfall, however,
    the wastewater volume in a combined sewer system can exceed the capacity of
    the sewer system or treatment plant. In these situations, systems are
    designed to overflow and discharge excess wastewater directly to water
    bodies. These overflows, called combined sewer overflows (CSOs), contain not
    only stormwater but also untreated human and industrial waste, toxic
    materials, and debris.
  </p>
)

const STAGE_2_3_CONTENT = (
  <p>
    If sewer systems are not separated, sea level rise and increased heavy rain
    events will result in more frequent CSO events.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_3_CONTENT,
  3: STAGE_2_3_CONTENT
}

const OutflowPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <SewerSmall scale={0.2} xOffset={0.15} yOffset={0.77} />
      <Textbox xOffset={0.2} yOffset={0.93} textboxWidth={70}>
        Outflow
      </Textbox>
    </svg>
  )
}

export default OutflowPop
