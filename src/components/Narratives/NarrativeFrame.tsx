import React, { useState } from 'react'

import { ScenarioType } from '../../@types/Scenario'
import NarrativeSelection from './Selection/NarrativeSelection'
import Tableau from './Tableau'

const NarrativeFrame = (): JSX.Element => {
  const [activeNarrative, setActiveNarrative] = useState<ScenarioType>(
    ScenarioType.FoodSecurity
  )

  return (
    <div className="NarrativeFrame">
      <NarrativeSelection activeNarrative={activeNarrative} />
      <Tableau activeNarrative={activeNarrative} />
    </div>
  )
}

export default NarrativeFrame
