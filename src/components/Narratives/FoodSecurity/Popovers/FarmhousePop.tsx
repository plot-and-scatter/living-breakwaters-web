import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import Farmhouse from '../../PlaceableSVGs/Buildings/Farmhouse'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

const STAGE_2_3_CONTENT = (
  <p>Flooding may cause property damage to farming operations.</p>
)

export const contentMap = {
  2: STAGE_2_3_CONTENT,
  3: STAGE_2_3_CONTENT
}

const FarmhousePop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (onClick) {
      if (narrativeStage === 2 || narrativeStage === 3)
        onClick(STAGE_2_3_CONTENT)
      else onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage > 1 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
        <Farmhouse xOffset={0.7} yOffset={0.58} scale={0.12} />
        <Textbox xOffset={0.76} yOffset={0.85} textboxWidth={105}>
          Farmhouse
        </Textbox>
      </svg>
      <rect className="FillGround" x={550} y={242.5} width={110} height={5} />
    </>
  )
}

export default FarmhousePop
