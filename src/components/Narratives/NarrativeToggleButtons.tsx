import React from 'react'

import { useNarrative } from './NarrativeContext'

const NarrativeToggleButtons = (): JSX.Element => {
  const { showRain, toggleRain, showSurge, toggleSurge } = useNarrative()

  return (
    <div className="NarrativeToggleButtons">
      <button
        className={`w-100 btn btn-sm ${
          showRain ? 'btn-primary' : 'btn-outline-primary'
        }`}
        onClick={() => toggleRain()}
      >
        <i className="fas fa-cloud-showers-heavy mr-2" />
        {showRain ? 'Stop rain' : 'Start rain'}
      </button>
      <br />
      <button
        className={`w-100 btn btn-sm ${
          showSurge ? 'btn-primary' : 'btn-outline-primary'
        } mt-1`}
        onClick={() => toggleSurge()}
      >
        <i className="fas fa-wind mr-2" />
        {showSurge ? 'Stop storm' : 'Start storm'}
      </button>
    </div>
  )
}

export default NarrativeToggleButtons
