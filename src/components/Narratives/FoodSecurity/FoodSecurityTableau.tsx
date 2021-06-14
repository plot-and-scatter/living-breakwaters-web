import React, { useState } from 'react'

import { useNarrative } from '../NarrativeContext'

import HeavyRain from '../PlaceableSVGs/HeavyRain'
import NewPumpStation from '../PlaceableSVGs/Buildings/NewPumpStation'
import Land from './SVGGroups/Land'

import SVGFrame from '../Frames/SVGFrame'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'

const FoodSecurityTableau = (): JSX.Element => {
  const { narrativeStage: stage, setNarrativeStage } = useNarrative()

  return (
    <div className="FoodSecurityTableau">
      <SVGFrame id="FoodSecurityTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land scale={1} xOffset={0} />
        <NewPumpStation xOffset={0.275} yOffset={0.75} />
        {/* <Textbox
            narrativeStage={stage}
            rotate={narrativeGenerator(stage, [25, 20, 10])}
            xOffset={narrativeGenerator(stage, [0.43, 0.53, 0.7])}
            yOffset={narrativeGenerator(stage, [0.9, 0.87, 0.84])}
          >
            interface
          </Textbox> */}
      </SVGFrame>
    </div>
  )
}

export default FoodSecurityTableau
