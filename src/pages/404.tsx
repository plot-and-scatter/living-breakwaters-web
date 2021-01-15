import { graphql } from 'gatsby'
import React from 'react'

import FixTypeLater from '../components/Types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

const NotFoundPage = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
