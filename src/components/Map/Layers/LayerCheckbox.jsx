import React from "react"
import PropTypes from "prop-types"
import LayerLabel from "./LayerLabel"

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
              onChange={this.onCheckboxChange}
              ref={this.ref}
            />
            <label htmlFor={layer.id} className="form-check-label">
              {layer.name}
            </label>
          </div>
        </small>
      </LayerLabel>
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
