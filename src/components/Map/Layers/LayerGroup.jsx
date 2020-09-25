import React from "react"
import PropTypes from "prop-types"
import LayerCheckbox from "./LayerCheckbox"

class LayerGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allChecked: false,
      expanded: true,
    }
    this.checkAll = this.checkAll.bind(this)
    this.uncheckAll = this.uncheckAll.bind(this)
    this.toggleCheckAll = this.toggleCheckAll.bind(this)
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

  toggleCheckAll() {
    this.setState({
      allChecked: !this.state.allChecked,
      checkedTs: +new Date(),
    })
  }

  render() {
    const layers = Object.values(this.props.layers)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(layer => {
        return (
          <LayerCheckbox
            key={layer.id}
            layer={layer}
            checked={this.state.allChecked}
            checkedTs={this.state.checkedTs}
          />
        )
      })

    return (
      <div className="LayerGroup pb-2">
        <div className="d-flex align-items-baseline justify-content-between">
          <h6
            onClick={this.toggleExpanded}
            style={{ cursor: "pointer" }}
            className="mb-1"
          >
            {this.props.layerGroup.name}
          </h6>
          <p className="mb-1">
            <button
              className="btn btn-sm btn-xs btn-outline-secondary ml-2"
              onClick={this.toggleCheckAll}
            >
              {this.state.allChecked ? (
                <>
                  <i className="fas fa-times mr-1" />
                  Uncheck all
                </>
              ) : (
                <>
                  <i className="fas fa-check mr-1" />
                  Check all
                </>
              )}
            </button>
          </p>
        </div>
        <div>{layers}</div>
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
