import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { TimelineMax, gsap } from 'gsap'
import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import { useRef } from 'react'
import DikePop from './Popovers/DikePop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import DouglasFir from '../PlaceableSVGs/Trees/DouglasFir'
import FarmhousePop from './Popovers/FarmhousePop'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import FoodSecurityGround from './BaseLayers/FoodSecurityGround'
import FoodSecurityRainOverflow from './BaseLayers/FoodSecurityRainOverflow'
import FoodSecuritySaltwaterWedge from './BaseLayers/FoodSecuritySaltwaterWedge'
import FoodSecuritySeaLevel from './BaseLayers/FoodSecuritySeaLevel'
import FoodSecuritySeaLevelRise from './BaseLayers/FoodSecuritySeaLevelRise'
import FoodSecurityStormSurge from './BaseLayers/FoodSecurityStormSurge'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import IntertidalPop from './Popovers/IntertidalPop'
import IrrigationPop from './Popovers/IrrigationPop'
import LogisticsPop from './Popovers/LogisticsPop'
import PumpStationPop from './Popovers/PumpStationPop'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import UnirrigatedPop from './Popovers/UnirrigatedPop'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'
import ALink from '../../Layout/ALink'
import { FoodSecurityPopupKey as PKey } from './FoodSecurityPopupDictionary'

export const DEFAULT_CONTENT = (
  <>
    Currently, dikes protect many low-lying agriculture lands from sea level
    rise and coastal flooding. However, many dikes in BC generally do not meet
    current provincial standards. Upgrading the dikes to meet the updated
    standards is costly, particularly where major land acquisitions would be
    required. For more information on the assessment of the dikes in the Lower
    Mainland,{' '}
    <ALink
      external
      isPDF
      href="https://www.fraserbasin.bc.ca/_Library/Water_Flood_Strategy/Lower_Mainland_Dike_Assessment.pdf"
    >
      please follow this link
    </ALink>
    .
  </>
)

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

interface Props {
  popoverClick?: (e: Event, contentKey: string) => void
}

const FoodSecurityTableau = ({ popoverClick }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  // useEffect(() => {
  //   if (narrativeStage === 1) {
  //     setShowRain(true)
  //   } else {
  //     setShowRain(false)
  //   }
  // }, [narrativeStage])

  const prevNarrativeStage = useRef(narrativeStage)

  const timeline = useRef<TimelineMax>()

  useEffect(() => {
    // timeline.current = new TimelineMax({ paused: true })
    timeline.current = new TimelineMax()
    // timeline.current.add(spinSeaLevel())
  }, [])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    // console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage
    if (narrativeStage == 2) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="FoodSecurityTableau">
      <SVGFrame id="FoodSecurityTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />

        <FoodSecurityStormSurge />
        <FoodSecuritySeaLevelRise />
        <FoodSecuritySeaLevel />
        <FoodSecurityRainOverflow />
        <FoodSecurityGround stage={narrativeStage} yOffset={0.783} />

        <Fish xOffset={0.05} yOffset={0.79} />
        <Birds xOffset={0.2} yOffset={0.3} />
        <DouglasFir xOffset={0.79} yOffset={0.515} scale={0.1} />
        <Tree xOffset={0.38} yOffset={0.67} scale={0.06} />
        <Tree xOffset={0.41} yOffset={0.64} scale={0.08} />
        <Tree xOffset={0.63} yOffset={0.655} scale={0.07} />

        <FoodSecuritySaltwaterWedge stage={narrativeStage} />

        <IntertidalPop onClick={(e) => popoverClick(e, PKey.Intertidal)} />
        <DikePop onClick={(e) => popoverClick(e, PKey.Dike)} />
        <PumpStationPop onClick={(e) => popoverClick(e, PKey.PumpStation)} />
        <IrrigationPop onClick={(e) => popoverClick(e, PKey.Irrigation)} />
        <FarmhousePop onClick={(e) => popoverClick(e, PKey.Farmhouse)} />
        <LogisticsPop onClick={(e) => popoverClick(e, PKey.Logistics)} />
        <UnirrigatedPop onClick={(e) => popoverClick(e, PKey.Unirrigated)} />
      </SVGFrame>
    </div>
  )
}

export default FoodSecurityTableau
