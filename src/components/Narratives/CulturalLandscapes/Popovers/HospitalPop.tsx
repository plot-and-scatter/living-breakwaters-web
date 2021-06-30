import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Office2 from '../../PlaceableSVGs/Buildings/Office2'

const HospitalPop = (props: PlaceableSVGProps): JSX.Element => {
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
