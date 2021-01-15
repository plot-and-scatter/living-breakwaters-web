import React from 'react'
import { useCallback } from 'react'

import { useNarrative } from './NarrativeContext'
import NarrativeInput from './NarrativeInput'

import './NarrativeSelect.scss'

export const STAGE_NAMES = ['Present', 'Near Future', 'Future']

interface Props {
  isCompact?: boolean
}

const NarrativeSelect = ({ isCompact }: Props): JSX.Element => {
  const {
    narrativeStage,
    setNarrativeStage,
    showRain,
    toggleRain,
    showSurge,
    toggleSurge
  } = useNarrative()

  const toggleShowRainCallback = useCallback(() => {
    toggleRain()
  }, [toggleRain])

  const toggleShowSurgeCallback = useCallback(() => {
    toggleSurge()
  }, [toggleSurge])

  return (
    <div className="NarrativeSelect">
      {!isCompact && (
        <>
          <h4>Show what happens in the...</h4>
        </>
      )}
      <NarrativeInput setNarrativeStage={setNarrativeStage} />
      <div className="mt-3 d-flex align-items-center justify-content-between">
        {STAGE_NAMES.map((s, i) => {
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
