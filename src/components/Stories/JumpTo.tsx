import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'

import './JumpTo.scss'

interface Props {
  path: string
}

const JumpTo = ({ path }: Props): JSX.Element => {
  return (
    <div className="JumpTo row">
      <div className="d-none d-md-block offset-xl-11 col-xl-1 offset-9 col-3 offset-md-10 col-md-2">
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            border: 'solid 1px black',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            color: 'white'
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#aaa',
              fontSize: '0.8rem'
            }}
          >
            Jump to...
          </p>
          <h6>
            <AnchorLink to={`${path}#intro`}>Intro</AnchorLink>
          </h6>
          <h6>
            <AnchorLink to={`${path}#map`}>Map</AnchorLink>
          </h6>
          <h6>
            <AnchorLink to={`${path}#narrative`}>Narrative</AnchorLink>
          </h6>
          <h6>
            <AnchorLink to={`${path}#strategies`}>Strategies</AnchorLink>
          </h6>
          <h6>
            <AnchorLink to={`${path}#resources`}>Resources</AnchorLink>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default JumpTo
