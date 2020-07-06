import React from "react"
import { useNarrative } from "./NarrativeContext"
import { useCallback } from "react"

const NarrativeSelect = () => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  const setNarrativeStageCallback = useCallback(
    event => {
      setNarrativeStage(event.target.value)
    },
    [setNarrativeStage]
  )

  return (
    <div>
      <h1>Select a narrative stage</h1>
      <p>Current narrative stage: {narrativeStage}</p>
      <input
        type="number"
        value={narrativeStage}
        onChange={setNarrativeStageCallback}
      />
    </div>
  )
}

export default NarrativeSelect
