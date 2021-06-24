import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'

import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import BikewayPop from './Popovers/BikewayPop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import DouglasFir from '../PlaceableSVGs/Trees/DouglasFir'
import FarmhousePop from './Popovers/FarmhousePop'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import IntertidalPop from './Popovers/IntertidalPop'
import IrrigationPop from './Popovers/IrrigationPop'
import LogisticsPop from './Popovers/LogisticsPop'
import PumpStationPop from './Popovers/PumpStationPop'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import UnirrigatedPop from './Popovers/UnirrigatedPop'
import Well from '../PlaceableSVGs/Buildings/Well'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'
import FoodSecurityRainOverflow from './BaseLayers/FoodSecurityRainOverflow'
import FoodSecuritySeaLevel from './BaseLayers/FoodSecuritySeaLevel'
import FoodSecuritySeaLevelRise from './BaseLayers/FoodSecuritySeaLevelRise'
import FoodSecurityGround from './BaseLayers/FoodSecurityGround'
import { useRef } from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const FoodSecurityTableau = ({ setFrameContent }: Props): JSX.Element => {
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
    // GSDevTools.create(timeline)
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

        <IntertidalPop onClick={setFrameContent} />
        <BikewayPop onClick={setFrameContent} />
        <PumpStationPop onClick={setFrameContent} />
        <IrrigationPop onClick={setFrameContent} />
        <FarmhousePop onClick={setFrameContent} />
        <LogisticsPop onClick={setFrameContent} />
        <UnirrigatedPop onClick={setFrameContent} />
      </SVGFrame>
    </div>
  )
}

export default FoodSecurityTableau
