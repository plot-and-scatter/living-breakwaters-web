import { graphql } from 'gatsby'
import React, { useState } from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/Frames/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import SEO from '../components/SEO'

import './Narratives.scss'

const Narratives = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [activeNarrative, setActiveNarrative] = useState(
    NarrativeType.CriticalInfrastructures
  )

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="Narratives">
        <SEO title="Narratives" />
        <div className="row my-4 align-items-center Title">
          <div className="col-8">
            <h1 className="mb-0">{activeNarrative}</h1>
          </div>
          <div className="col-4 text-right">
            <NarrativeSelection
              activeNarrative={activeNarrative}
              setActiveNarrative={setActiveNarrative}
            />
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
        <NarrativeFrame activeNarrative={activeNarrative} />
      </div>
    </Layout>
  )
}

export default Narratives

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
