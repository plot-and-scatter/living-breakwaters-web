import React from 'react'

import { ScenarioType } from '../../@types/Scenario'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'
import SVGFrame from './Frames/SVGFrame'
import Car from './PlaceableSVGs/Vehicles/Car'
import Truck from './PlaceableSVGs/Vehicles/Truck'
import Church from './PlaceableSVGs/Buildings/Church'
import Factory from './PlaceableSVGs/Buildings/Factory'
import Hospital from './PlaceableSVGs/Buildings/Hospital'
import PersonWithKid from './PlaceableSVGs/People/PersonWithKid'





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
      <Hospital xOffset={0.3} />
      {/* <PersonWithKid xOffset={0.3} />  */}
      {/* <Factory xOffset={0.3} />  */}
      {/* <Church xOffset={0.3} */}

    </SVGFrame>
  )

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
