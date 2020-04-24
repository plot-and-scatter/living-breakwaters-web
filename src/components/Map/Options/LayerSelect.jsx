import React from "react"
import PropTypes from "prop-types"
import LayerGroup from "./LayerGroup"

import LAYERS from "../../../static/layers.json"
import LAYER_GROUPS from "../../../static/layer_groups.json"

class LayerSelect extends React.Component {
  render() {
    const layerGroups = Object.keys(LAYER_GROUPS)
      .sort((a, b) => b.index - a.index)
      .map(key => {
        const layerGroup = LAYER_GROUPS[key]
        const layers = Object.values(LAYERS).filter(
          l => l.grouping === layerGroup.id
        )
        console.log(layerGroup)
        return (
          <LayerGroup
            key={layerGroup.id}
            layerGroup={layerGroup}
            layers={layers}
          />
        )
      })

    return (
      <div className="LayerSelect p-1">
        <h3>Layer Select</h3>
        {layerGroups}
      </div>
    )
  }
}

export default LayerSelect
