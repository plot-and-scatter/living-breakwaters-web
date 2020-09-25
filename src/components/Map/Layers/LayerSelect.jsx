import React from "react"
import PropTypes from "prop-types"
import LayerGroup from "./LayerGroup"

import LAYERS from "../../../static/layers.json"
import LAYER_GROUPS from "../../../static/layer_groups.json"

import "./Layers.scss"

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
          />
        )
      })

    var groupSize = 3
    var cols = layerGroups
      .reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([])
        r[r.length - 1].push(element)
        return r
      }, [])
      .map(function(rowContent, index) {
        // surround every group with 'col'
        return (
          <div className="col-6" key={index}>
            {rowContent}
          </div>
        )
      })

    return <div className="LayerSelect row">{cols}</div>
  }
}

LayerSelect.propTypes = {
  toggleIdCallback: PropTypes.func,
}

export default LayerSelect
