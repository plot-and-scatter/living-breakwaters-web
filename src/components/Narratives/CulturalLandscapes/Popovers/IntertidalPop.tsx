import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import IntertidalPlant from '../../PlaceableSVGs/Plants/IntertidalPlant'

export const contentMap = {}

const IntertidalPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
        <svg>
          <clipPath id="clIntertidalClip">
            <path
              // className="Red"
              style={{ fill: 'blue', stroke: 'none' }}
              fillOpacity={0.5}
              d="M84 256.5 v -17 h 110 v 8 l -23 3.3 l -87 5 v 13"
            />
          </clipPath>

          <g id="IntertidalPlants" clipPath="url(#clIntertidalClip)">
            <IntertidalPlant xOffset={0.1 + 0.0} yOffset={0.8 - 0.01} />
            <IntertidalPlant xOffset={0.1 + 0.03} yOffset={0.8 - 0.02} />
            <IntertidalPlant xOffset={0.1 + 0.06} yOffset={0.8 - 0.025} />
            <IntertidalPlant xOffset={0.1 + 0.09} yOffset={0.8 - 0.03} />
          </g>
        </svg>
        <Textbox xOffset={0.18} yOffset={0.86} textboxWidth={90}>
          Intertidal
        </Textbox>
      </svg>
    </>
  )
}

export default IntertidalPop
