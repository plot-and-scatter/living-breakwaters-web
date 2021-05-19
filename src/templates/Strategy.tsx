import { graphql } from 'gatsby'
import React from 'react'

import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'
import StrategyCitations from '../components/Strategies/StrategyDetail/StrategyCitations'
import StrategyDetail from '../components/Strategies/StrategyDetail/StrategyDetail'
import StrategySelect from './StrategySelect'
import Title from '../components/Layout/Title'

import './Strategies.scss'
import { StrategyMainPageGQL } from '../@types/StrategyGQL'

const Strategy = ({
  data,
  pageContext
}: SitePageProps<StrategyMainPageGQL>): JSX.Element => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header>
        <Title
          headingGroup={'Adaptation Strategy'}
          title={post.frontmatter.title}
        />
        <div className="col-6">
          <StrategySelect
            currentPost={post}
            strategies={data.allMarkdownRemark.edges}
          />
        </div>
      </Header>
      <div className="Strategies">
        <StrategyDetail
          data={data}
          frontmatter={post.frontmatter}
          pageContext={pageContext}
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

export default Strategy

export const pageQuery = graphql`
  query StrategyBySlug($slug: String!, $animationSlug: String!) {
    site {
      siteMetadata {
        title
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
      excerpt(pruneLength: 160)
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        strategyTypes
        title
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
