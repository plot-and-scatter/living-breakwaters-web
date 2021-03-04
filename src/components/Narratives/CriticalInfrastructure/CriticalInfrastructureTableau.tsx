import React from 'react'

import { useNarrative } from '../NarrativeContext'
import AntennaTower from '../PlaceableSVGs/Buildings/AntennaTower'
import Biker from '../PlaceableSVGs/People/Biker'
import Building1 from '../PlaceableSVGs/Buildings/Building1'
import Bush1 from '../PlaceableSVGs/Plants/Bush1'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Car from '../PlaceableSVGs/Vehicles/Car'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import DrainagePopover from './SVGGroups/DrainagePopover'
import Grass from '../PlaceableSVGs/Plants/Grass'
import Harbor from '../PlaceableSVGs/Maritime/Harbor'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Hotspot from '../Hotspot/Hotspot'
import House1 from '../PlaceableSVGs/Buildings/House1'
import House2 from '../PlaceableSVGs/Buildings/House2'
import House3 from '../PlaceableSVGs/Buildings/House3'
import Land from './SVGGroups/Land'
import LargeStormDrain from '../PlaceableSVGs/Objects/LargeStormDrain'
import Oak from '../PlaceableSVGs/Trees/Oak'
import Person1 from '../PlaceableSVGs/People/Person1'
import Person2 from '../PlaceableSVGs/People/Person2'
import RedShip from '../PlaceableSVGs/Maritime/RedShip'
import Roots from '../PlaceableSVGs/Trees/Roots'
import ShippingPopover from './SVGGroups/ShippingPopover'
import SmallStormDrain from '../PlaceableSVGs/Objects/SmallStormDrain'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'

import '../PlaceableSVGs/Elements.scss'
import './CriticalInfrastructureTableau.scss'

const CriticalInfrastructureTableau = (): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  return (
    <div className="CriticalInfrastructureTableau">
      <SVGFrame id="CriticalInfrastructureTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <g id="Maritime">
          <Harbor xOffset={-0.01} yOffset={0.73} scale={0.35} />
          <RedShip xOffset={-0.005} yOffset={0.77} scale={0.2} />
        </g>
        <g id="GroundLevel">
          <g id="Trees">
            <Oak xOffset={0.37} yOffset={0.72} scale={0.03} />
            <Deadwood xOffset={0.39} yOffset={0.73} scale={0.015} />
            <Cypress xOffset={0.61} yOffset={0.66} scale={0.011} />
            <Cypress xOffset={0.515} yOffset={0.76} scale={0.0045} />
            <Cypress xOffset={0.514} yOffset={0.76} scale={0.004} />
            <Oak xOffset={0.619} yOffset={0.71} scale={0.015} />
            <Oak xOffset={0.62} yOffset={0.635} scale={0.04} />
            <Cypress xOffset={0.66} yOffset={0.6} scale={0.011} />
            <Cypress xOffset={0.665} yOffset={0.6} scale={0.011} />
            <Cypress xOffset={0.653} yOffset={0.6} scale={0.011} />
            <Oak xOffset={0.7} yOffset={0.555} scale={0.045} />
            <Oak xOffset={0.67} yOffset={0.592} scale={0.047} />
            <Oak xOffset={0.69} yOffset={0.586} scale={0.04} />
            <Cypress xOffset={0.83} yOffset={0.565} scale={0.0055} />
            <Cypress xOffset={0.886} yOffset={0.545} scale={0.007} />
          </g>
          <g id="Plants">
            <Grass xOffset={0.385} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.38} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.376} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.374} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.37} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.366} yOffset={0.78} scale={0.004} />
            <Grass xOffset={0.363} yOffset={0.785} scale={0.004} />
            <Grass xOffset={0.36} yOffset={0.785} scale={0.004} />
            <Grass xOffset={0.356} yOffset={0.785} scale={0.004} />
            <Bush2 xOffset={0.4} yOffset={0.77} scale={0.01} />
            <Bush1 xOffset={0.394} yOffset={0.775} scale={0.008} />
            <Bush1 xOffset={0.43} yOffset={0.78} scale={0.01} />
            <Bush1 xOffset={0.615} yOffset={0.735} scale={0.01} />
            <Bush2 xOffset={0.606} yOffset={0.76} scale={0.01} />
            <Bush1 xOffset={0.64} yOffset={0.7} scale={0.012} />
            <Bush2 xOffset={0.65} yOffset={0.7} scale={0.01} />
            <Bush2 xOffset={0.66} yOffset={0.69} scale={0.01} />
            <Bush2 xOffset={0.67} yOffset={0.665} scale={0.02} />
            <Bush2 xOffset={0.73} yOffset={0.57} scale={0.03} />
            <Bush2 xOffset={0.835} yOffset={0.585} scale={0.015} />
            <Bush1 xOffset={0.94} yOffset={0.595} scale={0.01} />
          </g>
          <g id="Objects">
            <TrafficLight xOffset={0.465} yOffset={0.77} scale={0.004} />
            <LargeStormDrain xOffset={0.44} yOffset={0.81} scale={0.035} />
            <TrafficLight2 xOffset={0.951} yOffset={0.55} scale={0.017} />
            <TrafficLight xOffset={0.993} yOffset={0.579} scale={0.005} />
            <LargeStormDrain xOffset={0.82} yOffset={0.63} scale={0.035} />
            <SmallStormDrain xOffset={0.934} yOffset={0.625} scale={0.02} />
          </g>
          <g id="Vehicles">
            <Car xOffset={0.454} yOffset={0.78} scale={0.012} />
            <Car xOffset={0.956} yOffset={0.596} scale={0.012} />
            <Car xOffset={0.98} yOffset={0.595} scale={0.012} />
          </g>
          <g id="People">
            <Person1 xOffset={0.35} yOffset={0.785} scale={0.003} />
            <Person2 xOffset={0.345} yOffset={0.787} scale={0.003} />
            <Biker xOffset={0.33} yOffset={0.79} scale={0.006} />
          </g>
          <g id="Buildings">
            <AntennaTower xOffset={0.41} yOffset={0.675} scale={0.018} />
            <Building1 xOffset={0.52} yOffset={0.71} scale={0.09} />
            <House1 xOffset={0.47} yOffset={0.745} scale={0.04} />
            <House2 xOffset={0.76} yOffset={0.57} scale={0.07} />
            <House1 xOffset={0.846} yOffset={0.565} scale={0.04} />
            <House3 xOffset={0.894} yOffset={0.542} scale={0.05} />
          </g>
        </g>
        <g id="Hotspots">
          <Hotspot
            index={0}
            xOffset={0.2}
            yOffset={0.75}
            scale={0.05}
            width={600}
            title={`Shipping ${narrativeStage}`}
            narrativeStage={narrativeStage}
            setNarrativeStage={setNarrativeStage}
          >
            <ShippingPopover stage={narrativeStage} scale={0.81} />
          </Hotspot>
          <Hotspot
            index={1}
            xOffset={0.813}
            yOffset={0.61}
            scale={0.05}
            width={600}
            title={'Drainage'}
            narrativeStage={narrativeStage}
            setNarrativeStage={setNarrativeStage}
          >
            <DrainagePopover stage={narrativeStage} scale={0.8} />
          </Hotspot>
        </g>
      </SVGFrame>
      <div className="HotspotText" id="HotspotText0"></div>
      <div className="HotspotText" id="HotspotText1"></div>
    </div>
  )
}

export default CriticalInfrastructureTableau
