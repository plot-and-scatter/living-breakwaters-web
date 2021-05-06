import React from 'react'

import './Subhead.scss'

interface Props {
  children: React.ReactNode
  level?: number
}

const Subhead = ({ children, level = 1 }: Props): JSX.Element => {
  // Level 2 = <h3>
  if (level === 2) return <h3 className="Subhead mt-4 mb-2 pb-1">{children}</h3>

  // Default = <h2>
  return <h2 className="Subhead mt-5 mb-3 pb-2">{children}</h2>
}

export default Subhead
