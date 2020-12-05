import React from 'react'

import './Tableau.scss'
import FoodSecurityTableau from './Agriculture/FoodSecurityTableau'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'

const Tableau = () => {
  return (
    <div className="Tableau">
      <FoodSecurityTableau />
      {/* <CriticalInfrastructureTableau /> */}
    </div>
  )
}

export default Tableau
