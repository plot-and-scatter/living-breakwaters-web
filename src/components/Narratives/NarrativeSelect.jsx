import React from 'react'
import { useNarrative } from './NarrativeContext'
import { useCallback } from 'react'

import './NarrativeSelect.scss'

const MAX_NARRATIVE_STAGE = 2

const STAGE_NAMES = ['Present', 'Near Future', 'Future']

const NarrativeSelect = () => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  const setNarrativeStageCallback = useCallback(
    (stage) => setNarrativeStage(stage),
    [setNarrativeStage]
  )

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

  return (
    <div className="NarrativeSelect">
      <h4>Show what happens in the...</h4>
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
      <div className="mt-3 d-flex align-items-center justify-content-between">
        {stages.map((s, i) => {
          return (
            <div key={i}>
              <button className="btn btn-sm btn-primary">Rain</button>
              <br />
              <button className="btn btn-sm btn-primary mt-1">Storm</button>
            </div>
          )
        })}
      </div>
      {/* <p className="mt-3">
        Coastal squeeze has led to the loss of the intertidal zone. Hence, a
        flood wall was constructed to protect the remaining farmlands in zone 2.
      </p> */}
    </div>
  )
}

export default NarrativeSelect
