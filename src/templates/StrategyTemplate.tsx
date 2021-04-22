import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'
import StrategyCitations from '../components/Strategies/StrategyCitations'
import StrategyDetail from '../components/Strategies/StrategyDetail'
import StrategySelect from './StrategySelect'

import './Strategies.scss'

const StrategyTemplate = (props: SitePageProps): JSX.Element => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="Strategies">
        <div className="Title row align-items-center">
          <div className="col-4">
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div className="col-8">
            <StrategySelect
              currentPost={post}
              strategies={props.data.allMarkdownRemark.edges}
            />
          </div>
        </div>
        <StrategyDetail
          data={props.data}
          frontmatter={post.frontmatter}
          pageContext={props.pageContext}
        />
        <StrategyCitations citationHTML={post.html} />
        {/* <hr style={{ marginBottom: '1rem' }} />
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
        </ul> */}
      </div>
    </Layout>
  )
}

export default StrategyTemplate

export const pageQuery = graphql`
  query StrategyBySlug($slug: String!, $animationSlug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile(filter: { absolutePath: { regex: $animationSlug } }) {
      nodes {
        absolutePath
        relativePath
        childImageSharp {
          fluid(maxWidth: 2000) {
            src
          }
        }
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
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "strategy" } } }
      sort: { fields: [frontmatter___title], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            strategyTypes
            title
          }
        }
      }
    }
  }
`
