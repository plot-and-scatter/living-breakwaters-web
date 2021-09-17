import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'

import Rowboat from '../../PlaceableSVGs/People/Rowboat'
import { CulturalLandscapesPopupKey } from '../CulturalLandscapesPopupDictionary'
import ALink from '../../../Layout/ALink'

const STAGE_1_CONTENT = (
  <p>
    In urban and developed areas, stormwater often runs over pavement and
    parking lots, picking up oil and other pollutants before flowing into nearby
    water bodies. This pollutes our waters with pathogens, excess nutrients,
    heavy metals, and other toxins—negatively impacting aquatic life and
    creating algal blooms that can suffocate fisheries.
  </p>
)

const STAGE_2_CONTENT = (
  <p>
    Along with rising sea levels, ocean temperatures and acidity levels of the
    ocean will change. Increasing ocean temperatures cause coral bleaching and
    the loss of breeding grounds for marine fishes and mammals. For further
    information on this topic,{' '}
    <ALink
      external
      href="https://www.ipcc.ch/srocc/about/faq/final-faq-chapter-5/"
    >
      please follow this link
    </ALink>{' '}
    to the website of the International Panel on Climate Change.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    In many coastal areas, fishing is both a primary source of income and a main
    source of protein.{' '}
    <ALink
      external
      href="https://insideclimatenews.org/news/29092019/ocean-fish-diet-climate-change-impact-food-ipcc-report-cryosphere/"
    >
      This article discusses how
    </ALink>
    , due to climate change, by the end of the century nearly a quarter of fish
    could disappear in certain regions.
  </p>
)

export const contentMap = {
  1: STAGE_1_CONTENT,
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

const FishingPop = (props: PlaceableSVGProps): JSX.Element => {
  const { onClick } = props
  const { narrativeStage } = useNarrative()

  // const onClickText = useCallback(
  //   (event) => {
  //     event.persist()
  //     onClick({ event, key: CulturalLandscapesPopupKey.Fishing })

  //     // if (narrativeStage > 0 && onClick) {
  //     //   onClick('Lorem ipsum fishing')
  //     // } else {
  //     //   onClick(undefined)
  //     // }
  //   },
  //   [narrativeStage, onClick]
  // )

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  const offset = narrativeStage === 2 ? -0.02 : narrativeStage === 3 ? -0.02 : 0

  return (
    <svg
      className={`Popover ${extraClasses}`}
      onClick={(c) => {
        console.log('Clocky')
        onClick(c)
      }}
    >
      <Rowboat scale={0.0524} xOffset={0.03} yOffset={0.768 + offset} />
      <Textbox xOffset={0.075} yOffset={0.93} textboxWidth={90}>
        Fishing
      </Textbox>
    </svg>
  )
}

export default FishingPop
