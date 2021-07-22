import React, { useEffect } from 'react'

import { useNarrative } from '../NarrativeContext'
import ALink from '../../Layout/ALink'
import Car3 from '../PlaceableSVGs/Vehicles/Car3'
import CargoShippingPop from './Popovers/CargoShippingPop'
import FreightTransportPop from './Popovers/FreightTransportPop'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import LogisticsNetworksLand from './SVGGroups/LogisticsNetworksLand'
import Office1 from '../PlaceableSVGs/Buildings/Office1'
import Office2 from '../PlaceableSVGs/Buildings/Office2'
import Pier from '../PlaceableSVGs/Maritime/Pier'
import PortFacilitiesPop from './Popovers/PortFacilitiesPop'
import RetailPop from './Popovers/RetailPop'
import SVGFrame from '../Frames/SVGFrame'
import Tree from '../PlaceableSVGs/Trees/Tree'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'

export const DEFAULT_CONTENT = (
  <p>
    Seaports are essential for global trade-led development: they provide access
    to global markets and supply-chains for all countries, and are integral to
    maritime transport, as well as fisheries, and many economic activities in
    coastal areas. However, due to their location in low-lying estuaries and
    deltas, ports are extremely susceptible to the impacts of rising sea levels,
    storm surges, waves and winds, as well as tectonic events (e.g. tsunamis).{' '}
    <ALink
      external
      href="https://unctad.org/news/climate-change-impacts-seaports-growing-threat-sustainable-trade-and-development"
    >
      Please read this recent article for more information
    </ALink>
    .
  </p>
)

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
        <path className="FillGround" d="M500 261.5 l 110 -12.5 v 15 h -110" />
        <PortFacilitiesPop onClick={setFrameContent} />
        <CargoShippingPop onClick={setFrameContent} />
        {/* <WarehousePop onClick={setFrameContent} /> */}
        <FreightTransportPop onClick={setFrameContent} />
        <RetailPop onClick={setFrameContent} />
        <Tree xOffset={0.84} yOffset={0.71} />
      </SVGFrame>
    </div>
  )
}

export default LogisticsNetworksTableau
