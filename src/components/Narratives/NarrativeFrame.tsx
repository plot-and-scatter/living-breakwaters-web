import React, { useState } from 'react'

import { ScenarioType } from '../../@types/Scenario'
import { FixTypeLater } from '../Types/FixTypeLater'
import NarrativeSelect from './NarrativeSelect'
import NarrativeSelection from './Selection/NarrativeSelection'
import Tableau from './Tableau'

const NarrativeFrame = (props: FixTypeLater): JSX.Element => {
  return (
    <div className="NarrativeFrame row">
      <div className="col-3">
        <p style={{ fontSize: '0.9rem' }}>{props.text}</p>
      </div>
      <div className="col-9">
        <Tableau activeNarrative={props.activeNarrative} />
        <NarrativeSelect />
      </div>
    </div>
  )
}

export default NarrativeFrame
