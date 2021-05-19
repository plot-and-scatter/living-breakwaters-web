import React from 'react'
import { graphql } from 'gatsby'

import { MapLayerManagerProvider } from '../components/Data/MapLayerManager'
import Layout from '../components/Layout/Layout'
import MapComponent from '../components/Map/Map'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'
import Header from '../components/Layout/Header'
import Title from '../components/Layout/Title'

const Map = (props: SitePageProps): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Map" />
      <Header>
        <Title headingGroup="Map" />
      </Header>
      <MapLayerManagerProvider>
        <MapComponent />
      </MapLayerManagerProvider>
    </Layout>
  )
}

export default Map

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`