import React from 'react'

import { NarrativeType } from '../../@types/NarrativeType'
import CulturalLandscapesTableau from './CulturalLandscapes/CulturalLandscapesTableau'
import LogisticsNetworksTableau from './LogisticsNetworks/LogisticsNetworksTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'
import UtilitySystemsTableau from './UtilitySystems/UtilitySystemsTableau'

import './Tableau.scss'

interface Props {
  activeNarrative: NarrativeType
}

const Tableau = ({ activeNarrative }: Props): JSX.Element => {
  let tableau

  switch (activeNarrative) {
    case NarrativeType.LogisticsNetworks:
      tableau = <LogisticsNetworksTableau />
      break
    case NarrativeType.CulturalLandscapes:
      tableau = <CulturalLandscapesTableau />
      break
    case NarrativeType.UtilitySystems:
      tableau = <UtilitySystemsTableau />
      break
    case NarrativeType.FoodSecurity:
      tableau = <FoodSecurityTableau />
      break
    default:
      tableau = <UtilitySystemsTableau />
  }

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
