import React from 'react'

import CargoShippingPop from './Popovers/CargoShippingPop'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import Office1 from '../PlaceableSVGs/Buildings/Office1'
import Office2 from '../PlaceableSVGs/Buildings/Office2'
import Pier from '../PlaceableSVGs/Maritime/Pier'
import RetailPop from './Popovers/RetailPop'
import SVGFrame from '../Frames/SVGFrame'
import Train from '../PlaceableSVGs/Vehicles/Train'
import Tree from '../PlaceableSVGs/Trees/Tree'
import Truck3 from '../PlaceableSVGs/Vehicles/Truck3'
import Warehouse from '../PlaceableSVGs/Buildings/Warehouse'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'
import PortPop from './Popovers/PortPop'
import RightOfWayPop from './Popovers/RightOfWayPop'
import WarehousePop from './Popovers/WarehousePop'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const LogisticsNetworksTableau = ({ setFrameContent }: Props): JSX.Element => {
  return (
    <div className="LogisticsNetworksTableau">
      <SVGFrame id="LogisticsNetworksTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <Pier xOffset={0.114} yOffset={0.858} />
        <Office1 xOffset={0.63} yOffset={0.7} />
        <Office2 xOffset={0.7} yOffset={0.38} />
        <CargoShippingPop onClick={setFrameContent} />
        <PortPop onClick={setFrameContent} />
        <WarehousePop onClick={setFrameContent} />
        <RightOfWayPop onClick={setFrameContent} />
        <RetailPop onClick={setFrameContent} />
      </SVGFrame>
    </div>
  )
}

export default LogisticsNetworksTableau
