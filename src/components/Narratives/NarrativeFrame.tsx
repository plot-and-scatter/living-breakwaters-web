import React, { useState } from 'react'

import { ScenarioType } from '../../@types/Scenario'
import { FixTypeLater } from '../Types/FixTypeLater'
import NarrativeSelect from './NarrativeSelect'
import NarrativeSelection from './Selection/NarrativeSelection'
import Tableau from './Tableau'

import './NarrativeFrame.scss'

const NarrativeFrame = (props: FixTypeLater): JSX.Element => {
  return (
    <div className="NarrativeFrame row">
      <div className="col-12">
        <Tableau activeNarrative={props.activeNarrative} />
      </div>
      <div className="col-4 mt-4">
        <NarrativeSelect />
      </div>
      <div className="col-8 mt-4">
        <p className="p-1" style={{ marginTop: '-1rem' }}>
          Coastal habitats adapt to environmental and climate change, e.g.,
          sea-level rise by migrating inland to retain their relative function
          and structure. Coastal squeeze occurs where coastal armoring or other
          barriers prevent this natural migration creating fixed margins between
          the land and sea (Doody, 2004; Lithgow et al., 2019).1, 2 Coastal
          squeeze may lead to the loss of intertidal habitats or even entire
          intertidal zones. The rate at which the loss takes place is dependent
          on factors such as the geographical formation of the coast (Doody,
          2004). 1{' '}
        </p>

        <p>
          Coastal armoring changes the natural dynamics of shoreline sediment
          transport. In coastal and riverine areas, sustained sediment supplies
          are important for maintaining shoreline position and for offsetting
          surface subsidence. Surface subsidence is the decline in surface
          elevation due to the loss of sediment deposits (USGS, n.d). 3 Trapped
          behind sea defense systems, wetlands, mangrove, and marshes become
          increasingly vulnerable to accelerated surface subsidence, erosion,
          and decline (Anthony et al., 2015). 4
        </p>

        <p>
          Subsidence may also occur due to different forms of underground
          failure (USGS, n.d).3,8 In many areas, large tracks of wetlands have
          been converted to agricultural use (Hartig et al., 1997). 5 that have
          been protected behind coastal defense structures such as flood banks
          (Doody, 2013).6 Supporting such agricultural enterprises has meat
          adopting irrigation practices that involve extracting potable water
          from deep underground aquifers. This leads to groundwater fluxes,
          saltwater intrusion, and deep subsidence (Chang and Clement, 2012). 7
          This process is manifested on the surface of agricultural lands as
          tilting, sinking, and slumping of the soil surface. Deep subsidence
          has also been attributed to tectonic activity and deep basin processes
          that have destroyed agriculture infrastructure (Xiong, et al., 2019;
          Pontee, 2013) 8,9
        </p>
      </div>
    </div>
  )
}

export default NarrativeFrame
