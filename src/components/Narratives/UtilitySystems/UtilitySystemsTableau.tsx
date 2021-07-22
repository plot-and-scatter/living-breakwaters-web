import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import BasementPop from './Popovers/BasementPop'
import Birds from '../PlaceableSVGs/Fauna/Birds'
import Car3 from '../PlaceableSVGs/Vehicles/Car3'
import Fish from '../PlaceableSVGs/Fauna/Fish'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import HospitalPop from './Popovers/HospitalPop'
import House1 from '../PlaceableSVGs/Buildings/House1'
import OutflowPop from './Popovers/OutflowPop'
import PowerStationPop from './Popovers/PowerStationPop'
import SchoolPop from './Popovers/SchoolPop'
import SewageBackupPop from './Popovers/SewageBackupPop'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TreatmentPlantPop from './Popovers/TreatmentPlantPop'
import Tree from '../PlaceableSVGs/Trees/Tree'
import UndergroundParkingPop from './Popovers/UndergroundParkingPop'
import UtilitySystemsGround from './BaseLayers/UtilitySystemsGround'
import UtilitySystemsSeaLevel from './BaseLayers/UtilitySystemsSeaLevel'
import UtilitySystemsSeaLevelRise from './BaseLayers/UtilitySystemsSeaLevelRise'
import UtilitySystemsStormSurge from './BaseLayers/UtilitySystemsStormSurge'

import '../PlaceableSVGs/Elements.scss'
import './UtilitySystemsTableau.scss'
import ALink from '../../Layout/ALink'
import { UtilitySystemsPopupKey as PKey } from './UtilitySystemsPopupDictionary'

export const DEFAULT_CONTENT = (
  <p>
    Utility systems default content.{' '}
    <ALink external href="">
      Sample external link
    </ALink>
    .
  </p>
)

interface Props {
  popoverClick?: (e: Event, contentKey: string) => void
}

const UtilitySystemsTableau = ({ popoverClick }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    if (narrativeStage >= 1) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="UtilitySystemsTableau">
      <SVGFrame id="UtilitySystemsTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />

        <UtilitySystemsStormSurge />
        <UtilitySystemsSeaLevelRise />
        <UtilitySystemsSeaLevel />
        <UtilitySystemsGround stage={narrativeStage} yOffset={0.8} />

        <Fish xOffset={0.04} yOffset={0.8} />
        <Birds xOffset={0.2} yOffset={0.3} />

        <OutflowPop onClick={(e) => popoverClick(e, PKey.Outflow)} />
        <TreatmentPlantPop
          onClick={(e) => popoverClick(e, PKey.TreatmentPlant)}
        />
        <PowerStationPop onClick={(e) => popoverClick(e, PKey.PowerStation)} />

        <SchoolPop onClick={(e) => popoverClick(e, PKey.School)} />
        <BasementPop onClick={(e) => popoverClick(e, PKey.Basement)} />
        <HospitalPop onClick={(e) => popoverClick(e, PKey.Hospital)} />
        <UndergroundParkingPop
          onClick={(e) => popoverClick(e, PKey.UndergroundParking)}
        />

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

        <SewageBackupPop onClick={(e) => popoverClick(e, PKey.SewageBackup)} />
      </SVGFrame>
    </div>
  )
}

export default UtilitySystemsTableau
