import React, { useState } from 'react'

import { narrativeGenerator } from '../narrativeHelpers'
import { useNarrative } from '../NarrativeContext'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import DikePopover from './Popovers/DikePopover'
import Farmhouse from '../PlaceableSVGs/Buildings/Farmhouse'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Hotspot from '../Hotspot/Hotspot'
import Land from './SVGGroups/Land'
import Oak from '../PlaceableSVGs/Trees/Oak'
import Pump from '../PlaceableSVGs/Buildings/Pump'
import Roots from '../PlaceableSVGs/Trees/Roots'
import SVGFrame from '../Frames/SVGFrame'
import Text from '../PlaceableSVGs/Text'
import Truck from '../PlaceableSVGs/Vehicles/Truck'
import Well from '../PlaceableSVGs/Buildings/Well'
import WellPopover from './Popovers/WellPopover'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'

const FoodSecurityTableau = (): JSX.Element => {
  const { narrativeStage: stage, setNarrativeStage } = useNarrative()

  const [isDikePopoverOpen, setIsDikePopoverOpen] = useState<boolean>(false)
  const [isWellPopoverOpen, setIsWellPopoverOpen] = useState<boolean>(false)

  return (
    <div className="FoodSecurityTableau">
      <SVGFrame id="FoodSecurityTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land scale={1} xOffset={0} />
        <g id="Trees">
          <Oak xOffset={0.33} yOffset={0.46} scale={0.055} />
          <Oak xOffset={0.36} yOffset={0.43} scale={0.065} />
          <Deadwood xOffset={0.335} yOffset={0.565} scale={0.015} />
          <Bush2 xOffset={0.35} yOffset={0.545} scale={0.015} />
          <Oak xOffset={0.635} yOffset={0.435} scale={0.07} />
          <Roots xOffset={0.783} yOffset={0.685} scale={0.03} />
          <Oak xOffset={0.76} yOffset={0.43} scale={0.08} />
          <Cypress xOffset={0.855} yOffset={0.42} scale={0.02} />
          <Cypress xOffset={0.84} yOffset={0.42} scale={0.02} />
        </g>
        <g id="Pump">
          <Pump
            xOffset={0.32}
            yOffset={0.588}
            scale={0.105}
            extraClasses={isDikePopoverOpen ? 'Red' : ''}
          />
        </g>
        <g id="Farm">
          <Farmhouse
            xOffset={0.68}
            yOffset={narrativeGenerator(stage, [0.495, 0.5, 0.52])}
            scale={0.07}
            rotate={stage === 2 ? 5 : 0}
            extraClasses={isWellPopoverOpen && stage === 2 ? 'Red' : ''}
          />
          <Truck xOffset={0.755} yOffset={0.575} scale={0.04} />
          <Well
            extraClasses={isWellPopoverOpen ? 'Red' : ''}
            xOffset={0.64}
            yOffset={0.785}
            scale={0.0095}
          />
          <Well
            extraClasses={isWellPopoverOpen ? 'Red' : ''}
            xOffset={0.9}
            yOffset={0.785}
            scale={0.0095}
          />
        </g>
        <g id="Labels">
          <Text xOffset={0.2} yOffset={0.8}>
            saltwater wedge
          </Text>
          <Text
            narrativeStage={stage}
            rotate={narrativeGenerator(stage, [25, 20, 10])}
            xOffset={narrativeGenerator(stage, [0.43, 0.53, 0.7])}
            yOffset={narrativeGenerator(stage, [0.9, 0.87, 0.84])}
          >
            interface
          </Text>
          <text x={1500} y={450}>
            fresh water
          </text>
          <text x={1820} y={425} transform="rotate(-90, 1820, 425)">
            pumping well
          </text>
          <text x={1290} y={425} transform="rotate(-90, 1290, 425)">
            pumping well
          </text>
          <text
            x={1900}
            y={325}
            id="Subsidence"
            visibility={stage === 2 ? 'visible' : 'hidden'}
          >
            subsidence
          </text>
        </g>
        <g id="Hotspots">
          <Hotspot
            index={0}
            xOffset={0.38}
            yOffset={0.6}
            scale={0.05}
            title={'Flood wall'}
            narrativeStage={stage}
            setNarrativeStage={setNarrativeStage}
            onOpenCallback={(isOpen: boolean) => setIsDikePopoverOpen(isOpen)}
          >
            <DikePopover narrativeStage={stage} />
          </Hotspot>
          <Hotspot
            index={1}
            xOffset={0.62}
            yOffset={0.59}
            scale={0.05}
            title={'Pumps'}
            narrativeStage={stage}
            setNarrativeStage={setNarrativeStage}
            onOpenCallback={(isOpen: boolean) => setIsWellPopoverOpen(isOpen)}
          >
            <WellPopover narrativeStage={stage} />
          </Hotspot>
        </g>
      </SVGFrame>
      <div className="HotspotText" id="HotspotText0"></div>
      <div className="HotspotText" id="HotspotText1"></div>
    </div>
  )
}

export default FoodSecurityTableau
