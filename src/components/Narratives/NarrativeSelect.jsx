import React from 'react'
import { useNarrative } from './NarrativeContext'
import { useCallback } from 'react'

import './NarrativeSelect.scss'

const MAX_NARRATIVE_STAGE = 2

const STAGE_NAMES = ['Present', 'Near Future', 'Future']

const NarrativeSelect = () => {
  const {
    narrativeStage,
    setNarrativeStage,
    showRain,
    toggleRain,
    showSurge,
    toggleSurge
  } = useNarrative()

  const setNarrativeStageCallback = useCallback(
    (stage) => setNarrativeStage(stage),
    [setNarrativeStage]
  )

  const toggleShowRainCallback = useCallback(() => {
    toggleRain()
  }, [toggleRain])

  const toggleShowSurgeCallback = useCallback(() => {
    toggleSurge()
  }, [toggleSurge])

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
              {+narrativeStage === i ? (
                <div>
                  <button
                    className={`btn btn-sm ${
                      showRain ? 'btn-primary' : 'btn-outline-primary'
                    }`}
                    onClick={() => toggleShowRainCallback()}
                  >
                    <i className="fas fa-cloud-showers-heavy mr-2" />
                    {showRain ? 'Stop rain' : 'Start rain'}
                  </button>
                  <br />
                  <button
                    className={`btn btn-sm ${
                      showSurge ? 'btn-primary' : 'btn-outline-primary'
                    } mt-1`}
                    onClick={() => toggleShowSurgeCallback()}
                  >
                    <i className="fas fa-wind mr-2" />
                    {showSurge ? 'Stop storm' : 'Start storm'}
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NarrativeSelect
