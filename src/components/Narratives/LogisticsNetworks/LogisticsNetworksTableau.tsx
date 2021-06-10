import React, { useCallback } from 'react'

import { useNarrative } from '../NarrativeContext'
import CargoContainers from '../PlaceableSVGs/Maritime/CargoContainers'
import CargoShip from '../PlaceableSVGs/Maritime/CargoShip'
import Crane from '../PlaceableSVGs/Maritime/Crane'
import Gantry from '../PlaceableSVGs/Maritime/Gantry'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import Office1 from '../PlaceableSVGs/Buildings/Office1'
import Office2 from '../PlaceableSVGs/Buildings/Office2'
import Pier from '../PlaceableSVGs/Maritime/Pier'
import Retail from '../PlaceableSVGs/Buildings/Retail'
import SVGFrame from '../Frames/SVGFrame'
import Train from '../PlaceableSVGs/Vehicles/Train'
import Tree from '../PlaceableSVGs/Trees/Tree'
import Truck3 from '../PlaceableSVGs/Vehicles/Truck3'
import Warehouse from '../PlaceableSVGs/Buildings/Warehouse'

import '../PlaceableSVGs/Elements.scss'
import './LogisticsNetworksTableau.scss'

interface Props {
  setFrameContent: (content: React.ReactNode) => void
}

const LogisticsNetworksTableau = ({ setFrameContent }: Props): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  const onClickText = useCallback(
    (e) => {
      if (narrativeStage > 0) {
        setFrameContent('Lorem ipsum')
      } else {
        setFrameContent(undefined)
      }
    },
    [narrativeStage]
  )

  return (
    <div className="LogisticsNetworksTableau">
      <SVGFrame id="LogisticsNetworksTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <CargoShip
          xOffset={0.03}
          yOffset={0.75}
          extraClasses={+narrativeStage > 0 ? 'Red' : ''}
          narrativeStage={narrativeStage}
          onClick={onClickText}
        />
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
        <Retail
          xOffset={0.88}
          yOffset={0.495}
          extraClasses={+narrativeStage > 0 ? 'Red' : ''}
          narrativeStage={narrativeStage}
          onClick={onClickText}
        ></Retail>
      </SVGFrame>
    </div>
  )
}

export default LogisticsNetworksTableau
