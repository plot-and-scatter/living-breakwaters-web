import React from 'react'

import { useNarrative } from './NarrativeContext'
import NarrativeInput from './NarrativeInput'
import NarrativeToggleButtons from './NarrativeToggleButtons'

import './NarrativeSelect.scss'

export const STAGE_NAMES = [
  'Current state',
  'Sea level rise (SLR)',
  'SLR + storm'
]

interface Props {
  isCompact?: boolean
}

const NarrativeSelect = ({ isCompact }: Props): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()

  return (
    <div className="NarrativeSelect">
      {!isCompact && (
        <>
          <h4>Show what happens with...</h4>
        </>
      )}
      <NarrativeInput
        setNarrativeStage={setNarrativeStage}
        narrativeStage={narrativeStage}
      />
      {/* <div className="mt-3 d-flex align-items-center justify-content-between">
        {STAGE_NAMES.map((_, index) => (
          <div key={index}>
            {+narrativeStage === index && <NarrativeToggleButtons />}
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default NarrativeSelect
