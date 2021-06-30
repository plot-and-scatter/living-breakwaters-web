import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import ArchaeologyPop from './Popovers/ArchaeologyPop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import Car3 from '../PlaceableSVGs/Vehicles/Car3'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import BeachPop from './Popovers/BeachPop'
import House1 from '../PlaceableSVGs/Buildings/House1'
import BikePathPop from './Popovers/BikePathPop'
import FishingPop from './Popovers/FishingPop'
import HotelPop from './Popovers/HotelPop'
import IntertidalPop from './Popovers/IntertidalPop'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import ParkPop from './Popovers/ParkPop'
import Tree from '../PlaceableSVGs/Trees/Tree'
import SubwayPop from './Popovers/SubwayPop'
import TransitPop from './Popovers/TransitPop'
import CulturalLandscapesGround from './BaseLayers/CulturalLandscapesGround'
import CulturalLandscapesSeaLevel from './BaseLayers/CulturalLandscapesSeaLevel'
import CulturalLandscapesSeaLevelRise from './BaseLayers/CulturalLandscapesSeaLevelRise'
import CulturalLandscapesStormSurge from './BaseLayers/CulturalLandscapesStormSurge'

import '../PlaceableSVGs/Elements.scss'
import './CulturalLandscapesTableau.scss'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const CulturalLandscapesTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    if (narrativeStage >= 1) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="CulturalLandscapesTableau">
      <SVGFrame id="CulturalLandscapesTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />

        <CulturalLandscapesStormSurge />
        <CulturalLandscapesSeaLevelRise />
        <CulturalLandscapesSeaLevel />
        <CulturalLandscapesGround stage={narrativeStage} yOffset={0.8} />

        <Fish xOffset={0.04} yOffset={0.8} />
        <Birds xOffset={0.2} yOffset={0.3} />

        <BikePathPop onClick={setFrameContent} />
        <ParkPop onClick={setFrameContent} />
        <FishingPop onClick={setFrameContent} />

        <HotelPop onClick={setFrameContent} />
        <ArchaeologyPop onClick={setFrameContent} />
        <BeachPop onClick={setFrameContent} />
        <SubwayPop onClick={setFrameContent} />

        <Tree xOffset={0.425} yOffset={0.7} scale={0.04} />
        <Tree xOffset={0.425 + 0.03} yOffset={0.7} scale={0.04} />
        <Tree xOffset={0.58} yOffset={0.685} scale={0.04} />
        <Tree xOffset={0.58 + 0.03} yOffset={0.685} scale={0.04} />
        <TrafficLight scale={0.03} xOffset={0.65} yOffset={0.67} />
        <Car3 xOffset={0.66} yOffset={0.725} scale={0.02} />
        <Tree xOffset={0.69} yOffset={0.685} scale={0.04} />
        <Tree xOffset={0.78} yOffset={0.68} scale={0.04} />
        <House1 scale={0.06} xOffset={0.725} yOffset={0.685} />
        <House1 scale={0.06} xOffset={0.82} yOffset={0.67} />

        <path className="FillGround" d="M655 233 l 50 -4.5 v 5 h -50" />

        <House1 scale={0.06} xOffset={0.905} yOffset={0.647} />
        <Tree xOffset={0.86} yOffset={0.66} scale={0.04} />
        <Tree xOffset={0.86 + 0.03} yOffset={0.65} scale={0.04} />

        <IntertidalPop onClick={setFrameContent} />
        <TransitPop onClick={setFrameContent} />
      </SVGFrame>
    </div>
  )
}

export default CulturalLandscapesTableau
