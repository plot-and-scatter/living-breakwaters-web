import PropTypes from "prop-types"
import React from "react"

class ContentRow extends React.Component {
  render() {
    const { children } = this.props
    let { rowClasses } = this.props
    if (rowClasses == null) {
      rowClasses = "py-5"
    }

    return (
      <div className={`row ${rowClasses}`}>
        <div className="col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          {children}
        </div>
      </div>
    )
  }
}

export default ContentRow

ContentRow.propTypes = {
  children: PropTypes.node,
  rowClasses: PropTypes.string,
}
