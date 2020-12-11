import React from 'react'
import { Scenario, ScenarioType } from '../../../@types/Scenario'

import SCENARIOS from '../../../static/scenarios.json'

interface Props {
  activeNarrative: ScenarioType
  setActiveNarrative: (narrative: ScenarioType) => void
}

const NarrativeSelection = ({
  activeNarrative,
  setActiveNarrative
}: Props): JSX.Element => {
  return (
    <div className="StrategyDropdown dropdown mt-3">
      <button
        className={`btn dropdown-toggle btn-primary`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ color: 'white' }}
      >
        Select a narrative
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {Object.values(SCENARIOS).map((narrative, index) => {
          const scenario = (narrative as unknown) as Scenario
          return (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => setActiveNarrative(scenario.id)}
            >
              {scenario.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default NarrativeSelection
