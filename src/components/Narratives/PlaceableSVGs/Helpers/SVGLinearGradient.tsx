import React from "react"

const SVGLinearGradient = ({ idPrefix }) => {
  return (
    <linearGradient id={`${idPrefix}-gradient`} gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="var(--color-start)" />
      <stop offset="100%" stopColor="var(--color-stop)" />
    </linearGradient>
  )
}

export default SVGLinearGradient
