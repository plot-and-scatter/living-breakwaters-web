import { graphql } from 'gatsby'
import React, { useState } from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/Frames/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import SEO from '../components/SEO'
import Header from '../components/Layout/Header'
import Title from '../components/Layout/Title'

import './Narratives.scss'

const Narratives = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [activeNarrative, setActiveNarrative] = useState()

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Narratives" />
      <Header>
        <Title headingGroup="Narratives" title={activeNarrative} />
        <div className="col-6 text-right">
          <NarrativeSelection
            activeNarrative={activeNarrative}
            setActiveNarrative={setActiveNarrative}
          />
        </div>
      </Header>
      <div className="Narratives">
        <NarrativeFrame
          activeNarrative={activeNarrative}
          setActiveNarrative={setActiveNarrative}
        />
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
