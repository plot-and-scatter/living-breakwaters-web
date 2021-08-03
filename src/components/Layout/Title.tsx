import React from 'react'

import './Title.scss'

interface Props {
  headingGroup: string
  title?: string
}

const Title = ({ headingGroup, title }: Props): JSX.Element => {
  return (
    <div className="Title py-2 col-6">
      <h1>
        <span className={`HeadingGroup ${title ? 'Muted' : ''}`}>
          {headingGroup}
          {title && <>: </>}
        </span>
        {title}
      </h1>
    </div>
  )
}

export default Title
