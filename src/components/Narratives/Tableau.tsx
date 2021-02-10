import React from 'react'

import { ScenarioType } from '../../@types/Scenario'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'

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

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
