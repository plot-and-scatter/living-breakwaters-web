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

import image1 from '../../../../content/assets/images/utility-systems.png'
import image2 from '../../../../content/assets/images/logistics-networks.png'
import image3 from '../../../../content/assets/images/cultural-landscapes.png'
import image4 from '../../../../content/assets/images/food-security.png'

import './NarrativeFrame.scss'

interface Props {
  activeNarrative: NarrativeType
  setActiveNarrative: FixTypeLater
}

const NarrativeFrame = ({
  activeNarrative,
  setActiveNarrative
}: Props): JSX.Element => {
  const [contentKey, setContentKey] = useState<string>()
  const [left, setLeft] = useState<number>()
  const [content, setContent] = useState<React.ReactNode>()
  const [topContent, setTopContent] = useState<React.ReactNode>()

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

  useEffect(() => {
    let newTopContent
    switch (activeNarrative) {
      case NarrativeType.CulturalLandscapes:
        newTopContent = CULTURAL_LANDSCAPES
        break
      case NarrativeType.UtilitySystems:
        newTopContent = UTILITY_SYSTEMS
        break
      case NarrativeType.FoodSecurity:
        newTopContent = FOOD_SECURITY
        break
      case NarrativeType.LogisticsNetworks:
        newTopContent = LOGISTICS_NETWORKS
        break
    }
    setTopContent(newTopContent)
  }, [activeNarrative])

  return (
    <div className="NarrativeFrame row">
      <div className="col-12">
        <div className="row mt-5">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <p className="lead">
              {!activeNarrative && (
                <>
                  Narrative introduction text. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </>
              )}
              {activeNarrative && topContent}
            </p>
          </div>
        </div>
      </div>
      {activeNarrative && (
        <>
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
        </>
      )}
      {!activeNarrative && (
        <>
          <div className="col-6 mt-5 offset-3">
            <div className="row">
              <div
                className="col-12"
                onClick={() => setActiveNarrative(NarrativeType.UtilitySystems)}
                style={{ cursor: 'pointer' }}
              >
                <h4 className="mt-2">Utility Systems</h4>
                <p>{UTILITY_SYSTEMS}</p>
                <img src={image1} style={{ maxWidth: '100%' }} />
              </div>
              <div
                className="col-12"
                onClick={() =>
                  setActiveNarrative(NarrativeType.LogisticsNetworks)
                }
                style={{ cursor: 'pointer' }}
              >
                <h4 className="mt-2">Logistics Networks</h4>
                <img src={image2} style={{ maxWidth: '100%' }} />
              </div>
              <div
                className="col-12"
                onClick={() =>
                  setActiveNarrative(NarrativeType.CulturalLandscapes)
                }
                style={{ cursor: 'pointer' }}
              >
                <h4 className="mt-2">Cultural Landscapes</h4>
                <img src={image3} style={{ maxWidth: '100%' }} />
              </div>
              <div
                className="col-12"
                onClick={() => setActiveNarrative(NarrativeType.FoodSecurity)}
                style={{ cursor: 'pointer' }}
              >
                <h4 className="mt-2">Food Security</h4>
                <img src={image4} style={{ maxWidth: '100%' }} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NarrativeFrame
