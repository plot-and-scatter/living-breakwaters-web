import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Office2 from '../../PlaceableSVGs/Buildings/Office2'

export const contentMap = {}

const HospitalPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <rect
        className="Lights"
        fill="yellow"
        x={750}
        y={125}
        width={44}
        height={70}
      />
      <Office2 xOffset={0.935} yOffset={0.28} />
      <Textbox xOffset={0.935} yOffset={0.86} textboxWidth={70}>
        Hospital
      </Textbox>
    </svg>
  )
}

export default HospitalPop
