import React from "react"
import PropTypes from "prop-types"
import LayerGroup from "./LayerGroup"

import LAYERS from "../../../static/layers.json"
import LAYER_GROUPS from "../../../static/layer_groups.json"

import "./LayerSelect.scss"

class LayerSelect extends React.Component {
  render() {
    const layerGroups = Object.keys(LAYER_GROUPS)
      .sort((a, b) => b.index - a.index)
      .map(key => {
        const layerGroup = LAYER_GROUPS[key]
        const layers = Object.values(LAYERS).filter(
          layer => layer.grouping === layerGroup.id
        )
        return (
          <LayerGroup
            key={layerGroup.id}
            layerGroup={layerGroup}
            layers={layers}
            toggleIdCallback={this.props.toggleIdCallback}
          />
        )
      })

    return (
      <div className="LayerSelect p-2">
        <h5>Layer Select</h5>
        <div className="row">{layerGroups}</div>
      </div>
    )
  }
}

LayerSelect.propTypes = {
  toggleIdCallback: PropTypes.func,
}

export default LayerSelect