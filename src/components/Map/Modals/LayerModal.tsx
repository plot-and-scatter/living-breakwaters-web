import React from 'react'

import LayerSelect from '../Layers/LayerSelect'

const LayerModal = (): JSX.Element => {
  return (
    <div className="LayerModal modal left fade" id="LayerSelect">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Layer select
            </h5>
            <button
              type="button"
              className="btn btn-light"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <LayerSelect />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayerModal
