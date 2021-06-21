import React, { useCallback } from 'react'

interface Props {
  narrativeStage: number
  setNarrativeStage: (stage: number) => void
  stageNames: string[]
}

const NarrativeInput = ({
  narrativeStage,
  setNarrativeStage,
  stageNames
}: Props): JSX.Element => {
  const stages = []
  for (let i = 0; i < stageNames.length; i++) {
    stages.push(
      <div
        key={i}
        className={`text-center Stage ${
          narrativeStage === +i ? 'ActiveStage' : ''
        }`}
      >
        {stageNames[i]}
      </div>
    )
  }

  const setNarrativeStageCallback = useCallback(
    (stage) => setNarrativeStage(stage),
    [setNarrativeStage]
  )

  return (
    <div className="NarrativeInput">
      <div className="mt-3 d-flex align-items-center justify-content-between">
        {stages}
      </div>
      <input
        type="range"
        min="0"
        max={stageNames.length - 1}
        className="slider"
        id="myRange"
        value={narrativeStage}
        onChange={(event) => setNarrativeStageCallback(event.target.value)}
      />
    </div>
  )
}

export default NarrativeInput
