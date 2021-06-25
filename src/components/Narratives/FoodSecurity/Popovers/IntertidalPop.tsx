import React, { useCallback } from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import IntertidalPlant from '../../PlaceableSVGs/Plants/IntertidalPlant'
import FoodSecuritySaltwaterWedge from '../BaseLayers/FoodSecuritySaltwaterWedge'

const IntertidalPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  const onClickText = useCallback(() => {
    if (narrativeStage >= 1 && onClick) {
      onClick('Lorem ipsum intertidal')
    } else {
      onClick(undefined)
    }
  }, [narrativeStage, onClick])

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={onClickText}>
        <svg>
          <clipPath id="myClip">
            <path
              // className="Red"
              fill={'blue'}
              fillOpacity={0.5}
              d="M84 256 v -15 h 135 v 6.2 l -90 4.1 l -45 4.8 v 15"
            />
          </clipPath>

          <g id="IntertidalPlants" clipPath="url(#myClip)">
            <IntertidalPlant xOffset={0.1 + 0.006} yOffset={0.8 - 0.01} />
            <IntertidalPlant xOffset={0.1 + 0.04} yOffset={0.8 - 0.02} />
            <IntertidalPlant xOffset={0.1 + 0.075} yOffset={0.8 - 0.025} />
            <IntertidalPlant xOffset={0.1 + 0.115} yOffset={0.8 - 0.03} />
          </g>
        </svg>
        <Textbox xOffset={0.15} yOffset={0.85} textboxWidth={90}>
          Intertidal
        </Textbox>
      </svg>
    </>
  )
}

export default IntertidalPop
