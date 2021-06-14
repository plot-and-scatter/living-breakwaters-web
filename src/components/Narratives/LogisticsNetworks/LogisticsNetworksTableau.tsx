import React, { useEffect } from 'react'

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
import Car3 from '../PlaceableSVGs/Vehicles/Car3'
import Truck3 from '../PlaceableSVGs/Vehicles/Truck3'
import Warehouse from '../PlaceableSVGs/Buildings/Warehouse'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'
import PortPop from './Popovers/PortPop'
import RightOfWayPop from './Popovers/RightOfWayPop'
import WarehousePop from './Popovers/WarehousePop'
import { useNarrative } from '../NarrativeContext'

interface Props {
  setFrameContent?: (content: React.ReactNode) => void
}

const LogisticsNetworksTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage, setShowRain } = useNarrative()

  useEffect(() => {
    if (narrativeStage === 2) {
      setShowRain(true)
    } else {
      setShowRain(false)
    }
  }, [narrativeStage])

  return (
    <div className="LogisticsNetworksTableau">
      <SVGFrame id="LogisticsNetworksTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <Pier xOffset={0.114} yOffset={0.858} />
        <Office1 xOffset={0.63} yOffset={0.7} />
        <Tree xOffset={0.6} yOffset={0.75} />
        <Office2 xOffset={0.7} yOffset={0.38} />
        <Tree xOffset={0.745} yOffset={0.71} />
        <Car3 xOffset={0.8} yOffset={0.75} />
        <PortPop onClick={setFrameContent} />
        <CargoShippingPop onClick={setFrameContent} />
        <WarehousePop onClick={setFrameContent} />
        <RightOfWayPop onClick={setFrameContent} />
        <RetailPop onClick={setFrameContent} />
        <Tree xOffset={0.84} yOffset={0.71} />
      </SVGFrame>
    </div>
  )
}

export default LogisticsNetworksTableau
