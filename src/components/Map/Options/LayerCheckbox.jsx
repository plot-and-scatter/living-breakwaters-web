import React from "react"
import PropTypes from "prop-types"

class LayerCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.ref = React.createRef()
  }

  onCheckboxChange(event) {
    // console.log(event.target.checked)
    this.props.toggleIdCallback([event.target.value, event.target.checked])
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps.checked)
    if (prevProps.checkedTs != this.props.checkedTs) {
      this.ref.current.checked = this.props.checked
      this.props.toggleIdCallback([this.props.layer.id, this.props.checked])
    }
  }

  render() {
    const { layer } = this.props
    const splitColorR = parseInt(layer.color.substring(1, 3), 16)
    const splitColorG = parseInt(layer.color.substring(3, 5), 16)
    const splitColorB = parseInt(layer.color.substring(5), 16)

    // console.log(splitColorR, splitColorG, splitColorB)

    const threshold = 80

    const color =
      splitColorR > threshold &&
      splitColorG > threshold &&
      splitColorB > threshold
        ? "black"
        : "white"

    return (
      <div
        key={layer.id}
        className="LayerCheckbox p-1"
        style={{ backgroundColor: layer.color, color }}
      >
        <small>
          <div className="form-check">
            <input
              type="checkbox"
              id={layer.id}
              name={layer.id}
              value={layer.id}
              className="form-check-input"
              onChange={this.onCheckboxChange}
              ref={this.ref}
            />
            <label htmlFor={layer.id} className="form-check-label">
              {layer.name}
            </label>
          </div>
        </small>
      </div>
    )
  }
}

export default LayerCheckbox

LayerCheckbox.propTypes = {
  checked: PropTypes.bool,
  checkedTs: PropTypes.number,
  layer: PropTypes.object,
  toggleIdCallback: PropTypes.func,
}