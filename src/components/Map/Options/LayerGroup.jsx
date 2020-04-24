import React from "react"
import PropTypes from "prop-types"
import LayerCheckbox from "./LayerCheckbox"

class LayerGroup extends React.Component {
  render() {
    const layers = Object.values(this.props.layers)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(layer => {
        return <LayerCheckbox key={layer.id} layer={layer} />
      })

    return (
      <div className="LayerGroup p-1 pb-3">
        <h4>{this.props.layerGroup.name}</h4>
        {layers}
      </div>
    )
  }
}

export default LayerGroup

LayerGroup.propTypes = {
  layerGroup: PropTypes.object,
  layers: PropTypes.object,
}
