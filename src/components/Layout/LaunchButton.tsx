import React from 'react'

interface Props {
  text: string
  small?: boolean
}

const LaunchButton = ({ text, small }: Props): JSX.Element => {
  return (
    <div className="LaunchButton">
      <button className={`btn ${!small && 'btn-lg'} btn-outline-primary`}>
        {text}
      </button>
    </div>
  )
}

export default LaunchButton
