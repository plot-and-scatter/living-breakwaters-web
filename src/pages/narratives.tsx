import { graphql } from 'gatsby'
import React, { useState } from 'react'

import FixTypeLater from '../components/Types/FixTypeLater'
import { NarrativeProvider } from '../components/Narratives/NarrativeContext'
import { ScenarioType } from '../@types/Scenario'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import SEO from '../components/SEO'

import './Narratives.scss'
import SCENARIOS from '../static/scenarios.json'

const Narratives = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [activeNarrative, setActiveNarrative] = useState(
    ScenarioType.CriticalInfrastructures
  )

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="Narratives">
        <SEO title="Narratives" />
        <div className="row my-4 align-items-center Title">
          <div className="col-8">
            <h1 className="mb-0">{SCENARIOS[activeNarrative].title}</h1>
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
        <NarrativeFrame
          activeNarrative={activeNarrative}
          text={SCENARIOS[activeNarrative].intro}
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
