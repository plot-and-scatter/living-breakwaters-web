import { Link } from 'gatsby'
import React from 'react'
import LaunchButton from './LaunchButton'
import Subhead from './Subhead'

interface Props {
  title: string
  children: React.ReactNode
  image: string
  path: string
}

const InteractiveFeature = ({
  title,
  children,
  image,
  path
}: Props): JSX.Element => {
  return (
    <div className="InteractiveFeature col">
      <Link
        className="nav-link"
        to={path}
        style={{ fontWeight: 'normal', padding: 0 }}
      >
        <Subhead level={2}>{title}</Subhead>
        <img
          src={image}
          style={{ width: '100%', objectFit: 'cover', maxHeight: '170px' }}
          className="shadow-sm border border-primary"
        />
        <p className="mt-2">{children}</p>
        <div className="center">
          <LaunchButton text={`Explore ${title}`} small />
        </div>
      </Link>
    </div>
  )
}

export default InteractiveFeature
