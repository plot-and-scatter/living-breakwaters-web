import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import Car3 from '../PlaceableSVGs/Vehicles/Car3'
import CargoShippingPop from './Popovers/CargoShippingPop'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import LogisticsNetworksLand from './SVGGroups/LogisticsNetworksLand'
import Office1 from '../PlaceableSVGs/Buildings/Office1'
import Office2 from '../PlaceableSVGs/Buildings/Office2'
import Pier from '../PlaceableSVGs/Maritime/Pier'
import PortPop from './Popovers/PortPop'
import RetailPop from './Popovers/RetailPop'
import RightOfWayPop from './Popovers/RightOfWayPop'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'
import WarehousePop from './Popovers/WarehousePop'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'

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
        <LogisticsNetworksLand />
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
