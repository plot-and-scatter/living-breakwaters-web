import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import IntertidalPlant from '../../PlaceableSVGs/Plants/IntertidalPlant'
import ALink from '../../../Layout/ALink'

const STAGE_1_CONTENT = (
  <p>
    As sea level rises, coastal ecosystems are not able to migrate landwards due
    to the presence of dikes, causing what is called “coastal habitat squeeze.”
    These coastal ecosystems provide critical habitat for fish and migratory
    birds, as well as coastal livelihoods.{' '}
    <ALink
      external
      href="https://thenarwhal.ca/bc-climate-salt-marsh-sea-level-rise-fraser-delta/"
    >
      For more information, please visit a link to this recent news article.
    </ALink>
  </p>
)

const STAGE_2_3_CONTENT = (
  <p>
    As sea level rises, coastal ecosystems will disappear as they won’t be able
    migrate landwards due to the presence of dikes, causing expected cascading
    effects through the food web.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_3_CONTENT,
  3: STAGE_2_3_CONTENT
}

const IntertidalPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 1 ? 'Red' : ''

  return (
    <>
      <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
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
