import React, { useEffect, useState } from 'react'
import { NarrativeType } from '../../../@types/NarrativeType'

import { CulturalLandscapesPopupDictionary } from '../CulturalLandscapes/CulturalLandscapesPopupDictionary'
import { DEFAULT_CONTENT as CULTURAL_LANDSCAPES } from '../CulturalLandscapes/CulturalLandscapesTableau'
import { DEFAULT_CONTENT as FOOD_SECURITY } from '../FoodSecurity/FoodSecurityTableau'
import { DEFAULT_CONTENT as LOGISTICS_NETWORKS } from '../LogisticsNetworks/LogisticsNetworksTableau'
import { DEFAULT_CONTENT as UTILITY_SYSTEMS } from '../UtilitySystems/UtilitySystemsTableau'
import { FoodSecurityPopupDictionary } from '../FoodSecurity/FoodSecurityPopupDictionary'
import { LogisticsNetworksPopupDictionary } from '../LogisticsNetworks/LogisticsNetworksPopupDictionary'
import { useCallback } from 'react'
import { useNarrative } from '../NarrativeContext'
import { UtilitySystemsPopupDictionary } from '../UtilitySystems/UtilitySystemsPopupDictionary'
import FixTypeLater from '../../../@types/FixTypeLater'
import NarrativePopup from './NarrativePopup'
import NarrativeSelect from '../NarrativeSelect'
import Tableau from '../Tableau'

import './NarrativeFrame.scss'

interface Props {
  activeNarrative: NarrativeType
}

const NarrativeFrame = ({ activeNarrative }: Props): JSX.Element => {
  const [contentKey, setContentKey] = useState<string>()
  const [left, setLeft] = useState<number>()
  const [content, setContent] = useState<React.ReactNode>()

  const { narrativeStage, setNarrativeStage, setShowRain } = useNarrative()

  // useEffect(() => {
  //   console.log('contentKey', contentKey)
  //   if (contentKey && contentKey.event) {
  //     const e = contentKey.event
  //     const target = e.target
  //     const popoverParent = e.target.closest('.Popover')
  //     const textbox = popoverParent.querySelector('.Textbox text')
  //     console.log('e', target, textbox.getBoundingClientRect())
  //   }
  // }, [contentKey])

  const popoverClick = useCallback((event: Event, contentKey: string) => {
    console.log('event', event)
    console.log('contentKey', contentKey)
    if (contentKey && event) {
      const e: FixTypeLater = event
      e.persist()
      const popoverParent = e.target.closest('.Popover')
      const textbox = popoverParent.querySelector('.Textbox text')
      const bbox = textbox.getBoundingClientRect()
      // console.log('e', target, textbox.getBoundingClientRect())
      setLeft(bbox.x + bbox.width / 2)
      setContentKey(contentKey)
    }
  }, [])

  useEffect(() => {
    setContent(undefined)
    setContentKey(undefined)
    setNarrativeStage(0)
    setLeft(undefined)
    setShowRain(false)
  }, [activeNarrative])

  // useEffect(() => {
  //   setContent(undefined)
  // }, [narrativeStage])

  useEffect(() => {
    console.log('====> contentKey', contentKey)
    let content
    if (!contentKey) {
      // switch (activeNarrative) {
      //   case NarrativeType.CulturalLandscapes:
      //     content = CULTURAL_LANDSCAPES
      //     break
      //   case NarrativeType.UtilitySystems:
      //     content = UTILITY_SYSTEMS
      //     break
      //   case NarrativeType.FoodSecurity:
      //     content = FOOD_SECURITY
      //     break
      //   case NarrativeType.LogisticsNetworks:
      //     content = LOGISTICS_NETWORKS
      //     break
      // }
    } else {
      switch (activeNarrative) {
        case NarrativeType.CulturalLandscapes:
          content =
            CulturalLandscapesPopupDictionary[contentKey][narrativeStage]

          break
        case NarrativeType.UtilitySystems:
          content = UtilitySystemsPopupDictionary[contentKey][narrativeStage]
          break
        case NarrativeType.FoodSecurity:
          content = FoodSecurityPopupDictionary[contentKey][narrativeStage]
          break
        case NarrativeType.LogisticsNetworks:
          content = LogisticsNetworksPopupDictionary[contentKey][narrativeStage]

          break
      }
    }
    console.log(
      'activeNarrative',
      activeNarrative,
      'narrativeStage',
      narrativeStage,
      '==> content',
      content,
      CulturalLandscapesPopupDictionary,
      CulturalLandscapesPopupDictionary[contentKey]
    )
    setContent(content)
  }, [activeNarrative, contentKey, narrativeStage])

  console.log('--> content', content)

  return (
    <div className="NarrativeFrame row">
      <div className="col-12">
        <Tableau
          activeNarrative={activeNarrative}
          popoverClick={popoverClick}
        />
      </div>
      <div className="col-6 offset-3 mt-3">
        <NarrativeSelect activeNarrative={activeNarrative} />
      </div>
      <NarrativePopup
        left={left}
        content={content}
        contentKey={contentKey}
        setContentKey={setContentKey}
      />
    </div>
  )
}

export default NarrativeFrame
