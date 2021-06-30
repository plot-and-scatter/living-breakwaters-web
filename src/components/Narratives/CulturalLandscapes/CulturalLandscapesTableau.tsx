import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import ArchaeologyPop from './Popovers/ArchaeologyPop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import Bus from '../PlaceableSVGs/Vehicles/Bus'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import BeachPop from './Popovers/BeachPop'
import Basement from '../PlaceableSVGs/Buildings/Basement'
import BikePathPop from './Popovers/BikePathPop'
import FishingPop from './Popovers/FishingPop'
import HotelPop from './Popovers/HotelPop'
import IntertidalPop from './Popovers/IntertidalPop'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'

import Midrise from '../PlaceableSVGs/Buildings/Midrise'
import Office3 from '../PlaceableSVGs/Buildings/Office3'
import ParkPop from './Popovers/ParkPop'
import Retail from '../PlaceableSVGs/Buildings/Retail'
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

  // TODO: Add dashed line for sea level

  // TODO: With rain event, animate the washing away of the intertidal
  // area into the water

  // TODO: Maybe with rain event, particles come from the bus / transit area too

  // TODO: With sea level rise, animate up the dashed line to match the new
  // sea level (or show another sea level); show there are changes to the
  // groundwater table in the park area; this would be different from the
  // contamination hatch. We want to show the saturated zone moving up.

  // TODO: Change the hatching for the various items: contamination vs. saltwater
  // vs. groundwater

  // TODO: Don't completely flood the subway

  return (
    <div className="CulturalLandscapesTableau">
      <SVGFrame id="CulturalLandscapesTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Retail xOffset={0.84} yOffset={0.48} />
        <Basement xOffset={0.7} yOffset={0.83} scale={0.17} />

        <CulturalLandscapesStormSurge />
        <CulturalLandscapesSeaLevelRise />
        <CulturalLandscapesSeaLevel />
        <CulturalLandscapesGround stage={narrativeStage} yOffset={0.8} />
        <Birds xOffset={0.2} yOffset={0.3} />
        <FishingPop onClick={setFrameContent} />
        <IntertidalPop onClick={setFrameContent} />
        <BeachPop onClick={setFrameContent} />
        <BikePathPop onClick={setFrameContent} />
        <ArchaeologyPop onClick={setFrameContent} />
        <ParkPop onClick={setFrameContent} />
        <TransitPop onClick={setFrameContent} />
        <HotelPop onClick={setFrameContent} />
        <Office3 xOffset={0.72} yOffset={0.59} />
        <SubwayPop onClick={setFrameContent} />
        {/* <Tree xOffset={0.425} yOffset={0.7} scale={0.04} /> */}
        {/* <Tree xOffset={0.425 + 0.03} yOffset={0.7} scale={0.04} /> */}
        {/* <Tree xOffset={0.58} yOffset={0.685} scale={0.04} /> */}
        {/* <Tree xOffset={0.58 + 0.03} yOffset={0.685} scale={0.04} /> */}
        <TrafficLight scale={0.03} xOffset={0.53} yOffset={0.672} />
        {/* <Tree xOffset={0.69} yOffset={0.685} scale={0.04} /> */}
        <Tree xOffset={0.585} yOffset={0.688} scale={0.04} />
        {/* <House1 scale={0.06} xOffset={0.725} yOffset={0.685} /> */}
        {/* <House1 scale={0.06} xOffset={0.82} yOffset={0.67} /> */}
        {/* <path className="FillGround" d="M655 233 l 50 -4.5 v 5 h -50" /> */}
        {/* <House1 scale={0.06} xOffset={0.905} yOffset={0.647} /> */}
        <Tree xOffset={0.775} yOffset={0.687} scale={0.04} />
        <Tree xOffset={0.775 + 0.03} yOffset={0.687} scale={0.04} />
        <Midrise xOffset={0.942} yOffset={0.656} />
      </SVGFrame>
    </div>
  )
}

export default CulturalLandscapesTableau
