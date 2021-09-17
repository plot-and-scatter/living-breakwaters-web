import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import IntertidalPlant from '../../PlaceableSVGs/Plants/IntertidalPlant'
import ALink from '../../../Layout/ALink'

const STAGE_1_CONTENT = (
  <p>
    Urban stormwater runoff impacts the quantity and quality of water, both of
    which adversely impact the ecological integrity of coastal wetlands,
    mudflats and other coastal ecosystems.{' '}
    <ALink
      external
      href="https://royalsocietypublishing.org/doi/10.1098/rstb.2019.0460"
    >
      This article
    </ALink>{' '}
    discusses the potential policy solutions for effective stormwater
    management.
  </p>
)

const STAGE_2_CONTENT = (
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

const STAGE_3_CONTENT = (
  <p>
    As sea level rises, coastal ecosystems will disappear as they won’t be able
    migrate landwards due to the presence of flood control structures and urban
    developments. This will result in a wide range of cascading effects in the
    food web.{' '}
    <ALink
      external
      href="https://www.theglobeandmail.com/canada/article-for-the-fraser-river-delta-a-crucial-choice-looms-for-species-and-a/"
    >
      This Globe and Mail article
    </ALink>{' '}
    discusses the importance of the Fraser River Estuary ecosystems and the
    different ways of life that are tied to it.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

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
