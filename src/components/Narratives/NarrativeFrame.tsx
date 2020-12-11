import React, { useState } from 'react'

import { ScenarioType } from '../../@types/Scenario'
import { FixTypeLater } from '../Types/FixTypeLater'
import NarrativeSelect from './NarrativeSelect'
import NarrativeSelection from './Selection/NarrativeSelection'
import Tableau from './Tableau'

const NarrativeFrame = (props: FixTypeLater): JSX.Element => {
  return (
    <div className="NarrativeFrame row">
      <div className="col-6">
        <p className="p-1" style={{ marginTop: '-1rem' }}>
          {props.text}
        </p>
      </div>
      <div className="col-6">
        <NarrativeSelect />
      </div>
      <div className="col-12">
        <Tableau activeNarrative={props.activeNarrative} />
      </div>
    </div>
  )
}

export default NarrativeFrame
