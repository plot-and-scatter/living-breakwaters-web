import React, { useCallback, useState } from 'react'

import './MapInfoButton.scss'

const MapInfoButton = (): JSX.Element => {
  const [infoPopupVisible, setInfoPopupVisible] = useState<boolean>(false)

  const onInfoClick = useCallback(() => {
    setInfoPopupVisible(!infoPopupVisible)
  }, [infoPopupVisible])

  return (
    <>
      <div className="MapInfoButton">
        <button className="btn btn-sm btn-outline-dark" onClick={onInfoClick}>
          <i className="fas fa-info mr-1" /> Info
        </button>
      </div>
      {infoPopupVisible && (
        <div className="InfoPopup">
          <div className="NarrativeContent rounded shadow Highlight">
            <div className="d-flex p-2 justify-content-between align-items-center">
              <h2 className="my-0">Lorem Ipsum</h2>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setInfoPopupVisible(false)}
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="FrameContent p-2">
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MapInfoButton
