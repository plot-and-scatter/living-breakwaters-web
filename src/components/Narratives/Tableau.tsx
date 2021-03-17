import React from 'react'

import { ScenarioType } from '../../@types/Scenario'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'
import SVGFrame from './Frames/SVGFrame'
import Car from './PlaceableSVGs/Vehicles/Car'
import Truck from './PlaceableSVGs/Vehicles/Truck'

import './Tableau.scss'

interface Props {
  activeNarrative: ScenarioType
}

const Tableau = ({ activeNarrative }: Props): JSX.Element => {
  let tableau = <FoodSecurityTableau />

  switch (activeNarrative) {
    case ScenarioType.CriticalInfrastructures:
      tableau = <CriticalInfrastructureTableau />
      break
  }

  tableau = (
    <SVGFrame id="FoodSecurityTableau">
      <Truck xOffset={0.3} /> {/* HELGA: place new object here */}
    </SVGFrame>
  )

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
