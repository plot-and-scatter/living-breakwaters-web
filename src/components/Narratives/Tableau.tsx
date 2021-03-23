import React from 'react'

import { NarrativeType } from '../../@types/NarrativeType'
import CommunityVulnerabilityTableau from './CommunityVulnerability/CommunityVulnerabilityTableau'
import CriticalInfrastructureTableau from './CriticalInfrastructure/CriticalInfrastructureTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'
import WasteElectricityTableau from './WasteElectricity/WasteElectricityTableau'

import './Tableau.scss'

interface Props {
  activeNarrative: NarrativeType
}

const Tableau = ({ activeNarrative }: Props): JSX.Element => {
  let tableau

  switch (activeNarrative) {
    case NarrativeType.CriticalInfrastructures:
      tableau = <CriticalInfrastructureTableau />
      break
    case NarrativeType.CommunityVulnerability:
      tableau = <CommunityVulnerabilityTableau />
      break
    case NarrativeType.WasteElectricity:
      tableau = <WasteElectricityTableau />
      break
    case NarrativeType.FoodSecurity:
      tableau = <FoodSecurityTableau />
      break
    default:
      tableau = <WasteElectricityTableau />
  }

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
