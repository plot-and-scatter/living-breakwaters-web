import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'
import Title from '../components/Layout/Title'
import MapFrame from '../components/Map/MapFrame'

const Map = ({ data }: SitePageProps): JSX.Element => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Map" />
      <Header>
        <Title headingGroup="Map" />
      </Header>
      <MapFrame />
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
