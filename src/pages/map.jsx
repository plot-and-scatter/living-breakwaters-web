import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import MapComponent from "../components/Map/Map.tsx"
import { MapLayerManagerProvider } from "../components/Data/MapLayerManager"

const Map = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Map" />
      <MapLayerManagerProvider>
        <MapComponent />
      </MapLayerManagerProvider>
    </Layout>
  )
}

export default Map

Map.propTypes = {
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
