import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import FixTypeLater from '../components/Types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

interface Props {
  data: FixTypeLater
  pageContext: FixTypeLater
}

const ScenarioTemplate = ({ data, pageContext }: Props): JSX.Element => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  console.log(pageQuery)

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1
        style={{
          marginTop: '1rem',
          marginBottom: 0
        }}
      >
        {post.frontmatter.title}
      </h1>
      <h2 className="my-3">{post.frontmatter.subtitle}</h2>
      <p
        style={{
          display: `block`,
          marginBottom: '1rem'
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: '1rem'
        }}
      />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default ScenarioTemplate

ScenarioTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query ScenarioBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
