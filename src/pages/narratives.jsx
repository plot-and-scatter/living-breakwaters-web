import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"

import NarrativeSelect from "../components/Narratives/NarrativeSelect"
import { NarrativeProvider } from "../components/Narratives/NarrativeContext"

class Narratives extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Narratives" />
        <NarrativeProvider>
          <NarrativeSelect />
        </NarrativeProvider>
      </Layout>
    )
  }
}

export default Narratives

Narratives.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
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
