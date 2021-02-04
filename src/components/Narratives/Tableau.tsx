import React from 'react'

import { ScenarioType } from '../../@types/Scenario'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'

import './Tableau.scss'

interface Props {
  activeNarrative: ScenarioType
  showRain?: boolean
  showStorm?: boolean
}

const Tableau = ({
  activeNarrative,
  showRain,
  showStorm
}: Props): JSX.Element => {
  const tableau = (
    <FoodSecurityTableau showRain={showRain} showStorm={showStorm} />
  )

  // switch (activeNarrative) {
  //   case ScenarioType.CriticalInfrastructures:
  //     tableau = (
  //       <CriticalInfrastructureTableau
  //         showRain={showRain}
  //         showStorm={showStorm}
  //       />
  //     )
  //     break
  // }

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
