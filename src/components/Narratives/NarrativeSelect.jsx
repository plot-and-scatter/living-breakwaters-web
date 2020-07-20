import React from "react"
import { useNarrative } from "./NarrativeContext"
import { useCallback } from "react"

import "./NarrativeSelect.scss"

const MAX_NARRATIVE_STAGE = 3

const STAGE_NAMES = ["Present", "Near Future", "Future", "Distant Future"]

const NarrativeSelect = () => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  const setNarrativeStageCallback = useCallback(
    stage => setNarrativeStage(stage),
    [setNarrativeStage]
  )

  const stages = []
  for (let i = 0; i <= MAX_NARRATIVE_STAGE; i++) {
    stages.push(
      <button
        key={i}
        className={`Stage btn p-3 mr-2 ${
          narrativeStage === i ? "btn-primary" : "btn-primary-outline"
        }`}
        onClick={() => setNarrativeStageCallback(i)}
      >
        {STAGE_NAMES[i]}
      </button>
    )
  }

  return (
    <div className="NarrativeSelect mt-3">
      <h4>Select a narrative stage</h4>
      {/* <p>Current narrative stage: {narrativeStage + 1}</p> */}
      {/* <input
        type="number"
        value={narrativeStage}
        onChange={event => setNarrativeStageCallback(event.target.value)}
        min={0}
        max={MAX_NARRATIVE_STAGE}
      /> */}
      <div className="d-flex align-items-center">{stages}</div>
    </div>
  )
}

export default NarrativeSelect
