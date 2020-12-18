import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

import NarrativeSelect from '../components/Narratives/NarrativeSelect'
import { NarrativeProvider } from '../components/Narratives/NarrativeContext'
import NarrativeFrame from '../components/Narratives/NarrativeFrame'
import { ScenarioType } from '../@types/Scenario'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'

import SCENARIOS from '../static/scenarios.json'

import './Narratives.scss'

const Narratives = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [activeNarrative, setActiveNarrative] = useState(
    ScenarioType.CriticalInfrastructures
  )

  return (
    <Layout location={props.location} title={siteTitle}>
      <NarrativeProvider>
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
      </NarrativeProvider>
    </Layout>
  )
}

export default Narratives

Narratives.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
