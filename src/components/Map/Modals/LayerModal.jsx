import React from "react"
import PropTypes from "prop-types"
import LayerSelect from "../Layers/LayerSelect"

const LayerModal = props => {
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
            <LayerSelect toggleIdCallback={props.toggleIdCallback} />
          </div>
        </div>
      </div>
    </div>
  )
}

LayerModal.propTypes = {
  toggleIdCallback: PropTypes.func,
}

export default LayerModal
