import React from 'react'

import NarrativeInput from '../NarrativeInput'

import './HotspotElement.scss'

interface Props {
  children: React.ReactNode
  height: number
  narrativeStage: number
  onClick: () => void
  setNarrativeStage: (narrativeStage: number) => void
  title: string
  width: number
}

const HotspotElement = ({
  children,
  height,
  narrativeStage,
  onClick,
  setNarrativeStage,
  title,
  width
}: Props): JSX.Element => {
  return (
    <div className="HotspotElement" style={{ height, width }}>
      <h1>{title}</h1>
      {children}
      <div className="d-flex w-100 justify-content-between align-content-end">
        <button
          className="btn btn-sm btn-outline-brand-light mt-3 mr-3"
          onClick={onClick}
        >
          <i className="fas fa-times mr-2" />
          &nbsp;Close
        </button>
        <NarrativeInput
          narrativeStage={narrativeStage}
          setNarrativeStage={setNarrativeStage}
        />
      </div>
    </div>
  )
}

export default HotspotElement
