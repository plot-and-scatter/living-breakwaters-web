import React from 'react'
import { useNarrative } from '../NarrativeContext'

import './NarrativePopup.scss'

interface Props {
  content: React.ReactNode
  contentKey: string
  setContentKey: (key?: string) => void
  left: number
}

const NarrativePopup = ({
  content,
  contentKey,
  setContentKey,
  left
}: Props): JSX.Element => {
  console.log('-> NarrativePopup ', content, contentKey, left)

  if (!content) return <></>

  const leftValue =
    left === undefined ? `50%` : left < 150 ? `150px` : `${left}px`

  const showLine = left !== undefined ? true : false

  const { narrativeStage, setNarrativeStage } = useNarrative()

  return (
    <>
      <div className="NarrativePopup" style={{ left: leftValue }}>
        <div className="NarrativeContent rounded shadow">
          <div className="d-flex p-2 justify-content-between align-items-center">
            <h2 className="my-0">{contentKey}</h2>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setContentKey(undefined)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="FrameContent p-2">{content}</div>
          <div className="d-flex justify-content-between p-2">
            <button
              className="btn btn-sm btn-light"
              onClick={() => setNarrativeStage(narrativeStage - 1)}
            >
              &larr; Previous state
            </button>
            <button
              className="btn btn-sm btn-light"
              onClick={() => setNarrativeStage(narrativeStage + 1)}
            >
              Next state &rarr;
            </button>
          </div>
        </div>
        {showLine && <div className="Line"></div>}
      </div>
    </>
  )
}

export default NarrativePopup
