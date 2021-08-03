import React from 'react'

import { NarrativeType } from '../../@types/NarrativeType'
import CulturalLandscapesTableau from './CulturalLandscapes/CulturalLandscapesTableau'
import LogisticsNetworksTableau from './LogisticsNetworks/LogisticsNetworksTableau'
import FoodSecurityTableau from './FoodSecurity/FoodSecurityTableau'
import UtilitySystemsTableau from './UtilitySystems/UtilitySystemsTableau'

import './Tableau.scss'

interface Props {
  activeNarrative: NarrativeType
  popoverClick?: (e: Event, contentKey: string) => void
}

const Tableau = ({ activeNarrative, popoverClick }: Props): JSX.Element => {
  let tableau

  switch (activeNarrative) {
    case NarrativeType.LogisticsNetworks:
      tableau = <LogisticsNetworksTableau popoverClick={popoverClick} />
      break
    case NarrativeType.CulturalLandscapes:
      tableau = <CulturalLandscapesTableau popoverClick={popoverClick} />
      break
    case NarrativeType.UtilitySystems:
      tableau = <UtilitySystemsTableau popoverClick={popoverClick} />
      break
    case NarrativeType.FoodSecurity:
      tableau = <FoodSecurityTableau popoverClick={popoverClick} />
      break
    default:
      tableau = <FoodSecurityTableau popoverClick={popoverClick} />
  }

  return <div className="Tableau">{tableau}</div>
}

export default Tableau
