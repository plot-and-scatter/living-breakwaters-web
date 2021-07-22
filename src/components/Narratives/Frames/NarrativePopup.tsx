import React from 'react'

import './NarrativePopup.scss'

interface Props {
  content: React.ReactNode
  contentKey: string
  left: number
}

const NarrativePopup = ({ content, contentKey, left }: Props): JSX.Element => {
  console.log('-> NarrativePopup ', content, contentKey, left)

  if (!content) return <></>

  const leftPx = !left || left < 150 ? 150 : left

  return (
    <>
      <div className="NarrativePopup" style={{ left: `${leftPx}px` }}>
        <div className="NarrativeContent rounded shadow">
          <h2 className="py-2 my-0">{contentKey}</h2>
          <div className="FrameContent p-2">{content}</div>
          <div className="d-flex justify-content-between p-2">
            <div>&larr; Previous state</div>
            <div>Next state &rarr;</div>
          </div>
        </div>
        <div className="Line"></div>
      </div>
    </>
  )
}

export default NarrativePopup
