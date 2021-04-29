import React from 'react'
import { NarrativeType } from '../../../@types/NarrativeType'

interface Props {
  activeNarrative: NarrativeType
  setActiveNarrative: (narrative: NarrativeType) => void
}

const NarrativeSelection = ({
  activeNarrative,
  setActiveNarrative
}: Props): JSX.Element => {
  return (
    <div className="StrategyDropdown dropdown">
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
        {Object.values(NarrativeType).map((narrative, index) => {
          return (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => setActiveNarrative(narrative)}
            >
              {narrative}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default NarrativeSelection
