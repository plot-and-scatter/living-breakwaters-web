import React from "react"
import { useNarrative } from "./NarrativeContext"

const NarrativeSelect = () => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  return (
    <div>
      <h1>Select a narrative stage</h1>
      <p>Current narrative stage: {narrativeStage}</p>
    </div>
  )
}

export default NarrativeSelect
