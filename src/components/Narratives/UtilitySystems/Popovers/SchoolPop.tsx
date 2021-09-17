import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Office1 from '../../PlaceableSVGs/Buildings/Office1'

const STAGE_3_CONTENT = (
  <p>
    Power outages may impact operations of essential services that are located
    within or outside of the floodplain, including hospitals and schools.
  </p>
)

export const contentMap = {
  3: STAGE_3_CONTENT
}

const SchoolPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
        <rect
          className="Lights"
          fill="yellow"
          x={628}
          y={152}
          width={44}
          height={70}
        />
        <Office1 xOffset={0.765} yOffset={0.62} scale={0.08} />
        <Textbox xOffset={0.78} yOffset={0.86} textboxWidth={70}>
          School
        </Textbox>
      </svg>
      <path className="FillGround" d="M610 237 l 70 -6.5 v 20 h -70" />
    </>
  )
}

export default SchoolPop
