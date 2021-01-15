import React, { useCallback } from 'react'

import FixTypeLater from '../Types/FixTypeLater'
import { STAGE_NAMES } from './NarrativeSelect'

const MAX_NARRATIVE_STAGE = 2

interface Props {
  narrativeStage: FixTypeLater
  setNarrativeStage: FixTypeLater
}

const NarrativeInput = ({
  narrativeStage,
  setNarrativeStage
}: Props): JSX.Element => {
  const stages = []
  for (let i = 0; i <= MAX_NARRATIVE_STAGE; i++) {
    stages.push(
      <div
        key={i}
        className={`Stage ${+narrativeStage === +i ? 'ActiveStage' : ''}`}
      >
        {STAGE_NAMES[i]}
      </div>
    )
  }

  const setNarrativeStageCallback = useCallback(
    (stage) => setNarrativeStage(stage),
    [setNarrativeStage]
  )

  console.log('narrativeStage', narrativeStage, +narrativeStage)

  return (
    <div className="NarrativeInput">
      <div className="mt-3 d-flex align-items-center justify-content-between">
        {stages}
      </div>
      <input
        defaultValue={0}
        type="range"
        min="0"
        max="2"
        className="slider"
        id="myRange"
        onChange={(event) => setNarrativeStageCallback(event.target.value)}
      />
    </div>
  )
}

export default NarrativeInput
