import React, { useState } from 'react'

import { ScenarioType } from '../../@types/Scenario'
import NarrativeSelection from './Selection/NarrativeSelection'
import Tableau from './Tableau'

const NarrativeFrame = (): JSX.Element => {
  const [activeNarrative, setActiveNarrative] = useState<ScenarioType>(
    ScenarioType.CriticalInfrastructures
  )

  return (
    <div className="NarrativeFrame">
      <NarrativeSelection
        activeNarrative={activeNarrative}
        setActiveNarrative={setActiveNarrative}
      />
      <Tableau activeNarrative={activeNarrative} />
    </div>
  )
}

export default NarrativeFrame
