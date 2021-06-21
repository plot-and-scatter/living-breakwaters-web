import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import DouglasFir from '../PlaceableSVGs/Trees/DouglasFir'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import UtilitySystemsLand from './SVGGroups/UtilitySystemsLand'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import Car3 from '../PlaceableSVGs/Vehicles/Car3'

import OutflowPop from './Popovers/OutflowPop'
import TreatmentPlantPop from './Popovers/TreatmentPlantPop'
import PowerStationPop from './Popovers/PowerStationPop'
import SewageBackupPop from './Popovers/SewageBackupPop'
import SchoolPop from './Popovers/SchoolPop'
import BasementPop from './Popovers/BasementPop'
import HospitalPop from './Popovers/HospitalPop'
import UndergroundParkingPop from './Popovers/UndergroundParkingPop'

import '../PlaceableSVGs/Elements.scss'
import './UtilitySystemsTableau.scss'
import House1 from '../PlaceableSVGs/Buildings/House1'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const UtilitySystemsTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    if (narrativeStage === 2) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="UtilitySystemsTableau">
      <SVGFrame id="UtilitySystemsTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <UtilitySystemsLand />
        <Fish xOffset={0.05} yOffset={0.79} />
        <Birds xOffset={0.2} yOffset={0.3} />

        <OutflowPop onClick={setFrameContent} />
        <TreatmentPlantPop onClick={setFrameContent} />
        <PowerStationPop onClick={setFrameContent} />

        <SchoolPop onClick={setFrameContent} />
        <BasementPop onClick={setFrameContent} />
        <HospitalPop onClick={setFrameContent} />
        <UndergroundParkingPop onClick={setFrameContent} />
        <SewageBackupPop onClick={setFrameContent} />

        <Tree xOffset={0.425} yOffset={0.7} scale={0.04} />
        <Tree xOffset={0.425 + 0.03} yOffset={0.7} scale={0.04} />
        <Tree xOffset={0.58} yOffset={0.68} scale={0.04} />
        <Tree xOffset={0.58 + 0.03} yOffset={0.68} scale={0.04} />
        <TrafficLight scale={0.03} xOffset={0.65} yOffset={0.67} />
        <Car3 xOffset={0.66} yOffset={0.725} scale={0.02} />
        <Tree xOffset={0.69} yOffset={0.68} scale={0.04} />
        <Tree xOffset={0.78} yOffset={0.68} scale={0.04} />
        <House1 scale={0.06} xOffset={0.82} yOffset={0.67} />
        <House1 scale={0.06} xOffset={0.905} yOffset={0.645} />
        <Tree xOffset={0.86} yOffset={0.66} scale={0.04} />
        <Tree xOffset={0.86 + 0.03} yOffset={0.65} scale={0.04} />
      </SVGFrame>
    </div>
  )
}

export default UtilitySystemsTableau
