import React from 'react'

import { useNarrative } from './NarrativeContext'
import NarrativeInput from './NarrativeInput'
import NarrativeToggleButtons from './NarrativeToggleButtons'

import './NarrativeSelect.scss'
import { NarrativeType } from '../../@types/NarrativeType'

export const DEFAULT_STAGE_NAMES = [
  'Current state',
  'Sea level rise (SLR)',
  'SLR + storm'
]

export const EXTENDED_STAGE_NAMES = [
  'Current state',
  'Rain event',
  'Sea level rise (SLR)',
  'SLR + storm'
]

interface Props {
  activeNarrative: NarrativeType
  isCompact?: boolean
}

const NarrativeSelect = ({
  activeNarrative,
  isCompact
}: Props): JSX.Element => {
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
        stageNames={
          activeNarrative === NarrativeType.FoodSecurity ||
          activeNarrative === NarrativeType.UtilitySystems
            ? EXTENDED_STAGE_NAMES
            : DEFAULT_STAGE_NAMES
        }
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
