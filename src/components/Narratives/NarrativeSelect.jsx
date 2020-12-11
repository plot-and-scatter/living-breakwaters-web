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
      <p className="mt-3">
        Mauris elementum congue faucibus. Proin fringilla, velit eu iaculis
        fermentum, lectus orci tempus magna, sed feugiat erat ipsum quis diam.
        Mauris quis diam vel urna scelerisque aliquet nec at nisi. Duis ex
        massa, elementum fermentum eleifend quis, pellentesque sed nunc. Aenean
        sit amet est ut nunc malesuada pellentesque vel ac urna. Donec
        vestibulum ut orci nec volutpat. Fusce at sodales diam. Proin tortor ex,
        porta at ante sit amet, gravida rutrum elit. Maecenas est purus,
        porttitor ut condimentum ac, tristique et dui. Sed eget mollis orci.
        Etiam ultrices aliquet ante sit amet feugiat.
      </p>
    </div>
  )
}

export default NarrativeSelect
