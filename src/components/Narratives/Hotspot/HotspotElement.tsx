import React from 'react'

import FixTypeLater from '../../Types/FixTypeLater'
import NarrativeInput from '../NarrativeInput'

import './HotspotElement.scss'

interface Props {
  children: React.ReactNode
  height: number
  narrativeStage: FixTypeLater
  onClick: () => void
  setNarrativeStage: FixTypeLater
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
      <button
        className="btn btn-sm btn-outline-brand-light mt-2"
        onClick={onClick}
      >
        <i className="fas fa-times mr-2" />
        Close
      </button>
      <NarrativeInput
        narrativeStage={narrativeStage}
        setNarrativeStage={setNarrativeStage}
      />
    </div>
  )
}

export default HotspotElement
