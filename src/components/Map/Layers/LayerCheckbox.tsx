import React, { useCallback } from "react"
import PropTypes from "prop-types"
import LayerLabel from "./LayerLabel"

import { useMapLayerManager } from "../../Data/MapLayerManager"

interface IProps {
  layer: any
}

const LayerCheckbox = ({ layer }: IProps) => {
  const { showLayer, hideLayer, activeLayers } = useMapLayerManager()

  const isChecked = activeLayers[layer.id]

  const onCheckboxChange = useCallback(event => {
    event.target.checked
      ? showLayer(event.target.id)
      : hideLayer(event.target.id)
  }, [showLayer, hideLayer])

  return (
    <LayerLabel layer={layer}>
      <small>
        <div className="form-check">
          <input
            type="checkbox"
            id={layer.id}
            name={layer.id}
            value={layer.id}
            className="form-check-input"
            onChange={onCheckboxChange}
            checked={isChecked}
          />
          <label htmlFor={layer.id} className="form-check-label">
            {layer.name}
          </label>
        </div>
      </small>
    </LayerLabel>
  )
}

export default LayerCheckbox

LayerCheckbox.propTypes = {
  checked: PropTypes.bool,
  checkedTs: PropTypes.number,
  layer: PropTypes.object,
  toggleIdCallback: PropTypes.func,
}
