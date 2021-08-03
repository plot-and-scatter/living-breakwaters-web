import React from 'react'

import './BannerRow.scss'

interface Props {
  bgColorRGB?: string
  bgImage: string
  bgOpacity?: number
  children: React.ReactNode
  textDark?: boolean
  short?: boolean
}

const BannerRow = (props: Props): JSX.Element => {
  const { children } = props

  const bgImage = props.bgImage
  const bannerStyle: React.CSSProperties = {}
  if (bgImage) {
    bannerStyle.backgroundImage = `url(${bgImage})`
  }
  if (props.short) {
    bannerStyle.minHeight = `100vh`
  }

  const bgColorRGB = props.bgColorRGB || 'rgba(0, 0, 0)'
  const bgOpacity = props.bgOpacity || 0.5
  const backgroundColor = bgColorRGB.replace(')', `, ${bgOpacity})`)

  const textColor = props.textDark ? 'text-dark' : 'text-light'

  const paddingSize = props.short ? 4 : 5
  const padding = `py-${paddingSize}`

  return (
    <div className="BannerRow" style={bannerStyle}>
      <div
        className={`row ${padding} ${textColor}`}
        style={{
          backgroundColor,
          minHeight: props.short ? '100vh' : undefined
        }}
      >
        <div
          className={`col-12 ${padding}`}
          style={{ marginTop: props.short ? '100px' : undefined }}
        >
          <div className={`my-0 ${padding} row`}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BannerRow
