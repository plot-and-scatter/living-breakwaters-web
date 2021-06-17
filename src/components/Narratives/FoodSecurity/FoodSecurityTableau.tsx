import React, { useState } from 'react'

import { useNarrative } from '../NarrativeContext'

import Bicyclist from '../PlaceableSVGs/People/Bicyclist'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import Bush1 from '../PlaceableSVGs/Plants/Bush1'
import Wheat from '../PlaceableSVGs/Plants/Wheat'
import DouglasFir from '../PlaceableSVGs/Trees/DouglasFir'

import FarmTruck from '../PlaceableSVGs/Vehicles/FarmTruck'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Irrigation from '../PlaceableSVGs/Objects/Irrigation'
import Land from './SVGGroups/Land'

import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import Well from '../PlaceableSVGs/Buildings/Well'

import BikewayPop from './Popovers/BikewayPop'
import FarmhousePop from './Popovers/FarmhousePop'
import IntertidalPop from './Popovers/IntertidalPop'
import IrrigationPop from './Popovers/IrrigationPop'
import LogisticsPop from './Popovers/LogisticsPop'
import PumpStationPop from './Popovers/PumpStationPop'
import UnirrigatedPop from './Popovers/UnirrigatedPop'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const FoodSecurityTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage: stage, setNarrativeStage } = useNarrative()

  return (
    <div className="FoodSecurityTableau">
      <SVGFrame id="FoodSecurityTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land scale={1} xOffset={0} />
        <Fish xOffset={0.05} yOffset={0.79} />
        <Birds xOffset={0.2} yOffset={0.3} />
        <DouglasFir xOffset={0.79} yOffset={0.515} scale={0.1} />

        <Tree xOffset={0.38} yOffset={0.67} scale={0.06} />
        <Tree xOffset={0.41} yOffset={0.64} scale={0.08} />
        <Tree xOffset={0.63} yOffset={0.655} scale={0.07} />

        <Well xOffset={0.64} yOffset={0.842} />

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
