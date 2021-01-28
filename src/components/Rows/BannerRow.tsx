import React from 'react'

import './BannerRow.scss'

interface Props {
  bgColorRGB: string
  bgImage: string
  bgOpacity: number
  children: React.ReactNode
  textDark: boolean
}

const BannerRow = (props: Props): JSX.Element => {
  const { children } = props

  const bgImage = props.bgImage
  const bannerStyle: React.CSSProperties = {}
  if (bgImage) {
    bannerStyle.backgroundImage = `url(${bgImage})`
  }

  const bgColorRGB = props.bgColorRGB || 'rgba(0, 0, 0)'
  const bgOpacity = props.bgOpacity || 0.5
  const backgroundColor = bgColorRGB.replace(')', `, ${bgOpacity})`)

  const textColor = props.textDark ? 'text-dark' : 'text-light'

  return (
    <div className="BannerRow" style={bannerStyle}>
      <div className={`row py-5 ${textColor}`} style={{ backgroundColor }}>
        <div className="col-12 py-5">
          <div className="py-5">
            <p className="lead my-0 py-5 text-center">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerRow
