import React from "react"
import PropTypes from "prop-types"
import LayerCheckbox from "./LayerCheckbox"

class LayerGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allChecked: false,
      expanded: false,
    }
    this.checkAll = this.checkAll.bind(this)
    this.uncheckAll = this.uncheckAll.bind(this)
    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  checkAll() {
    this.setState({ allChecked: true, checkedTs: +new Date() })
  }

  uncheckAll() {
    this.setState({ allChecked: false, checkedTs: +new Date() })
  }

  render() {
    const layers = Object.values(this.props.layers)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(layer => {
        return (
          <LayerCheckbox
            key={layer.id}
            layer={layer}
            toggleIdCallback={this.props.toggleIdCallback}
            checked={this.state.allChecked}
            checkedTs={this.state.checkedTs}
          />
        )
      })

    const expanded = this.state.expanded

    return (
      <div className="LayerGroup pb-3">
        <h6 onClick={this.toggleExpanded} style={{ cursor: "pointer" }}>
          {expanded ? "-" : "+"}&nbsp;{this.props.layerGroup.name}{" "}
        </h6>
        <div style={{ display: expanded ? "block" : "none" }}>
          <p>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={this.checkAll}
            >
              Check all
            </button>
            <button
              className="btn btn-sm btn-outline-primary ml-1"
              onClick={this.uncheckAll}
            >
              Uncheck all
            </button>
          </p>
          {layers}
        </div>
      </div>
    )
  }
}

export default LayerGroup

LayerGroup.propTypes = {
  layerGroup: PropTypes.object,
  layers: PropTypes.array,
  toggleIdCallback: PropTypes.func,
}
