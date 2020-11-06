import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

import './Strategies.scss'

const StrategyTemplate = (props) => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  console.log(props.data)
  console.log(post)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="Strategies row">
        <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <h1
            style={{
              marginTop: '2rem',
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <h2>
            <span className="badge badge-primary">
              {post.frontmatter.strategyTypes}
            </span>
          </h2>
          <div
            className="Post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr style={{ marginBottom: '1rem' }} />
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
        </div>
      </div>
    </Layout>
  )
}

export default StrategyTemplate

StrategyTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query StrategyBySlug($slug: String!) {
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
        strategyTypes
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
