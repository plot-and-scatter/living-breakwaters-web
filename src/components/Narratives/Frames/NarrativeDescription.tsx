import React from 'react'
import LaunchButton from '../../Layout/LaunchButton'
import Subhead from '../../Layout/Subhead'

interface Props {
  content: JSX.Element
  image: string
  onClick: () => void
  title: string
}

const NarrativeDescription = ({
  content,
  image,
  onClick,
  title
}: Props): JSX.Element => {
  return (
    <div className="col-12 p-3" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Subhead level={2}>{title}</Subhead>
      <p>{content}</p>
      <img
        className="border border-dark shadow-sm"
        src={image}
        style={{ maxWidth: '100%' }}
      />
      <div className="mt-4 text-center">
        <LaunchButton text={`Explore ${title}`} />
      </div>
    </div>
  )
}

export default NarrativeDescription
