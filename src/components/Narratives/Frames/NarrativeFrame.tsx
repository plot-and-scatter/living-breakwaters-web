import React, { useEffect, useState } from 'react'
import { NarrativeType } from '../../../@types/NarrativeType'

import NarrativeSelect from '../NarrativeSelect'
import Tableau from '../Tableau'

import './NarrativeFrame.scss'

interface Props {
  activeNarrative: NarrativeType
}

const DEFAULT_CONTENT = (
  <p>
    Coastal habitats adapt to environmental and climate change, e.g., sea-level
    rise by migrating inland to retain their relative function and structure.
    Coastal squeeze occurs where coastal armoring or other barriers prevent this
    natural migration creating fixed margins between the land and sea (Doody,
    2004; Lithgow et al., 2019). Coastal squeeze may lead to the loss of
    intertidal habitats or even entire intertidal zones. The rate at which the
    loss takes place is dependent on factors such as the geographical formation
    of the coast (Doody, 2004).
  </p>
)

const NarrativeFrame = (props: Props): JSX.Element => {
  const [frameContent, setFrameContent] = useState<React.ReactNode>(
    DEFAULT_CONTENT
  )

  useEffect(() => {
    console.log('frameContent', frameContent)
  }, [frameContent])

  return (
    <div className="NarrativeFrame row">
      <div className="col-12">
        <Tableau
          activeNarrative={props.activeNarrative}
          setFrameContent={setFrameContent}
        />
      </div>
      <div className="col-6 mt-4">
        <NarrativeSelect activeNarrative={props.activeNarrative} />
      </div>
      <div className="col-6 mt-4">{frameContent || DEFAULT_CONTENT}</div>
    </div>
  )
}

export default NarrativeFrame
