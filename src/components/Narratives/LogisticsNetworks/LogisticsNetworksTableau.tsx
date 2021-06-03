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
import Ship from '../PlaceableSVGs/Maritime/Ship'
import Roots from '../PlaceableSVGs/Trees/Roots'
import ShippingPopover from './SVGGroups/ShippingPopover'
import SmallStormDrain from '../PlaceableSVGs/Objects/SmallStormDrain'
import SVGFrame from '../Frames/SVGFrame'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'
import Warehouse from '../PlaceableSVGs/Buildings/Warehouse'
import CargoShip from '../PlaceableSVGs/Maritime/CargoShip'
import Gantry from '../PlaceableSVGs/Maritime/Gantry'
import Crane from '../PlaceableSVGs/Maritime/Crane'
import CargoContainers from '../PlaceableSVGs/Maritime/CargoContainers'
import Tree from '../PlaceableSVGs/Trees/Tree'
import Pier from '../PlaceableSVGs/Maritime/Pier'

import Train from '../PlaceableSVGs/Vehicles/Train'
import Truck3 from '../PlaceableSVGs/Vehicles/Truck3'

import Office1 from '../PlaceableSVGs/Buildings/Office1'
import Office2 from '../PlaceableSVGs/Buildings/Office2'
import Retail from '../PlaceableSVGs/Buildings/Retail'

const LogisticsNetworksTableau = (): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  return (
    <div className="LogisticsNetworksTableau">
      <SVGFrame id="LogisticsNetworksTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <CargoShip xOffset={0.03} yOffset={0.75} />
        <Pier xOffset={0.114} yOffset={0.858} />
        <Crane xOffset={0.12} yOffset={0.661} />
        <Gantry xOffset={0.27} yOffset={0.705} />
        <CargoContainers xOffset={0.228} yOffset={0.779} />
        <Warehouse xOffset={0.34} yOffset={0.77} />
        <Tree xOffset={0.44} yOffset={0.75} />
        <Train xOffset={0.488} yOffset={0.785} />
        <Tree xOffset={0.52} yOffset={0.75} />
        <Truck3 xOffset={0.57} yOffset={0.793} />
        <Office1 xOffset={0.63} yOffset={0.7} />
        <Office2 xOffset={0.7} yOffset={0.38} />
        <Retail xOffset={0.88} yOffset={0.495} />
      </SVGFrame>
    </div>
  )
}

export default LogisticsNetworksTableau
