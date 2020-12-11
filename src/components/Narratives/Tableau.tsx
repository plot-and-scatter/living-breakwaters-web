import React, { useState } from 'react'

import './Tableau.scss'
import FoodSecurityTableau from './Agriculture/FoodSecurityTableau'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import { ScenarioType } from '../../@types/Scenario'

const Tableau = (): JSX.Element => {
  const [activeNarrative, setActiveNarrative] = useState<ScenarioType>(
    ScenarioType.FoodSecurity
  )

  let tableau = <FoodSecurityTableau />

  switch (activeNarrative) {
    case ScenarioType.CriticalInfrastructures:
      tableau = <CriticalInfrastructureTableau />
      break
  }

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
