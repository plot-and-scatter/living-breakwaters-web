import PropTypes from "prop-types"
import React from "react"

import "./BannerRow.scss"

class BannerRow extends React.Component {
  render() {
    const { children } = this.props

    const bgImage = this.props.bgImage
    const bannerStyle = {}
    if (bgImage) {
      bannerStyle.backgroundImage = `url(${bgImage})`
    }

    const bgColorRGB = this.props.bgColorRGB || "rgba(0, 0, 0)"
    const bgOpacity = this.props.bgOpacity || 0.5
    const backgroundColor = bgColorRGB.replace(")", `, ${bgOpacity})`)

    const textColor = this.props.textDark ? "text-dark" : "text-light"

    return (
      <div className="BannerRow" style={bannerStyle}>
        <div className={`row py-5 ${textColor}`} style={{ backgroundColor }}>
          <div className="col-12 py-5">
            <div className="py-5">
              <p className="lead my-0 py-5 text-center">{children}</p>
            </div>
          </div>
          {/* <div className="Credit col-12 text-right align-bottom">
            <p className="pb-2">
              Photo by Name • <a href="/">Source</a>
            </p>
          </div> */}
        </div>
      </div>
    )
  }
}

export default BannerRow

BannerRow.propTypes = {
  bgColorRGB: PropTypes.string,
  bgImage: PropTypes.string,
  bgOpacity: PropTypes.number,
  children: PropTypes.node,
  textDark: PropTypes.bool,
}
