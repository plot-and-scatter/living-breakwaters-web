import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import ALink from '../../Layout/ALink'
import ArchaeologyPop from './Popovers/ArchaeologyPop'
import Basement from '../PlaceableSVGs/Buildings/Basement'
import BeachPop from './Popovers/BeachPop'
import BikePathPop from './Popovers/BikePathPop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import CulturalLandscapesContamination from './BaseLayers/CulturalLandscapesContamination'
import CulturalLandscapesGround from './BaseLayers/CulturalLandscapesGround'
import CulturalLandscapesGroundwater from './BaseLayers/CulturalLandscapesGroundwater'
import CulturalLandscapesSeaLevel from './BaseLayers/CulturalLandscapesSeaLevel'
import CulturalLandscapesSeaLevelRise from './BaseLayers/CulturalLandscapesSeaLevelRise'
import CulturalLandscapesStormSurge from './BaseLayers/CulturalLandscapesStormSurge'
import FishingPop from './Popovers/FishingPop'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import HotelPop from './Popovers/HotelPop'
import IntertidalPop from './Popovers/IntertidalPop'
import Midrise from '../PlaceableSVGs/Buildings/Midrise'
import Office3 from '../PlaceableSVGs/Buildings/Office3'
import ParkPop from './Popovers/ParkPop'
import Retail from '../PlaceableSVGs/Buildings/Retail'
import SubwayPop from './Popovers/SubwayPop'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TransitPop from './Popovers/TransitPop'
import Tree from '../PlaceableSVGs/Trees/Tree'

import '../PlaceableSVGs/Elements.scss'
import './CulturalLandscapesTableau.scss'
import { CulturalLandscapesPopupKey as PKey } from './CulturalLandscapesPopupDictionary'
import Bus from '../PlaceableSVGs/Vehicles/Bus'

export const DEFAULT_CONTENT = (
  <p>
    Cultural landscapes default content.{' '}
    <ALink external href="">
      Sample external link
    </ALink>
    .
  </p>
)

interface Props {
  popoverClick?: (e: Event, contentKey: string) => void
}

const CulturalLandscapesTableau = ({ popoverClick }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  // TODO: Add dashed line for sea level

  // TODO: With sea level rise, animate up the dashed line to match the new
  // sea level (or show another sea level); show there are changes to the
  // groundwater table in the park area; this would be different from the
  // contamination hatch. We want to show the saturated zone moving up.

  // TODO: Change the hatching for the various items: contamination vs. saltwater
  // vs. groundwater

  // TODO: Don't completely flood the subway

  useEffect(() => {
    if (narrativeStage == 1) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

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

        <CulturalLandscapesContamination
          stage={narrativeStage}
          yOffset={0.817}
        />

        <Birds xOffset={0.2} yOffset={0.3} />
        <FishingPop
          onClick={(e) => {
            console.log('Clicky')
            popoverClick(e, PKey.Fishing)
          }}
        />
        <IntertidalPop onClick={(e) => popoverClick(e, PKey.Intertidal)} />
        <BeachPop onClick={(e) => popoverClick(e, PKey.Beach)} />
        <BikePathPop onClick={(e) => popoverClick(e, PKey.BikePath)} />
        <ArchaeologyPop onClick={(e) => popoverClick(e, PKey.Archaeology)} />
        <ParkPop onClick={(e) => popoverClick(e, PKey.Park)} />
        {/* <TransitPop onClick={(e) => popoverClick(e, PKey.Transit)} /> */}
        <Bus xOffset={0.545} yOffset={0.721} scale={0.02} />
        <HotelPop onClick={(e) => popoverClick(e, PKey.Hotel)} />
        <Office3 xOffset={0.72} yOffset={0.59} />
        <SubwayPop onClick={(e) => popoverClick(e, PKey.Subway)} />
        <TrafficLight scale={0.03} xOffset={0.53} yOffset={0.672} />
        <Tree xOffset={0.585} yOffset={0.688} scale={0.04} />
        <Tree xOffset={0.775} yOffset={0.687} scale={0.04} />
        <Tree xOffset={0.775 + 0.03} yOffset={0.687} scale={0.04} />
        <Midrise xOffset={0.942} yOffset={0.656} />

        <CulturalLandscapesGroundwater stage={narrativeStage} yOffset={0.875} />
      </SVGFrame>
    </div>
  )
}

export default CulturalLandscapesTableau
