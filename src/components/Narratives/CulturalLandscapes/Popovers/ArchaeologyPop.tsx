import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import Midden from '../../PlaceableSVGs/Objects/Midden'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = (
  <p>
    Rising seas and related rising ground water tables pose a serious threat to
    important archeological sites along the Canadian Coast. Shell middens, for
    example, contain the food waste of past peoples. They have both spiritual
    significance and provide us information about population size, diet,
    environment, environmental conditions, changes through time, and many other
    things. Often located near tidal areas, sheltered coves and bays, middens
    are very vulnerable to erosion due to sea level rise and rising ground water
    tables.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    Rising groundwaters, coastal erosion, and increased flooding will cause
    archeological sites to literally fall into the ocean. These sites are
    immensely important culturally and spiritually for Indigenous communities,
    as much knowledge has been lost due to the impacts of historic and ongoing
    colonization.{' '}
    <ALink
      external
      href="https://www.universityaffairs.ca/news/news-article/climate-change-is-having-a-calamitous-effect-on-indigenous-archeological-sites-in-canadas-north/"
    >
      Please follow this link
    </ALink>{' '}
    to learn more about how climate change is impacting Indigenous archeological
    sites in Canada’s North.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const ArchaeologyPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage >= 2 ? 'Red' : ''

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
      <Midden scale={0.1} xOffset={0.33} yOffset={0.77} />
      <Midden scale={0.11} xOffset={0.34} yOffset={0.79} />
      <Textbox xOffset={0.39} yOffset={0.93} textboxWidth={110}>
        Archaeology
      </Textbox>
    </svg>
  )
}

export default ArchaeologyPop
