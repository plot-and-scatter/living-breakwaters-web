import { graphql } from 'gatsby'
import React from 'react'

import { StrategyMainPageGQL } from '../@types/StrategyGQL'
import { StrategyPageContext } from '../@types/StrategyPageContext'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import SitePageProps from '../@types/SitePageProps'
import StrategyDetail from '../components/Strategies/StrategyDetail/StrategyDetail'
import StrategySelect from './StrategySelect'
import Title from '../components/Layout/Title'

import './Strategies.scss'

const Strategy = ({
  data,
  pageContext
}: SitePageProps<StrategyMainPageGQL, StrategyPageContext>): JSX.Element => {
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
          pageContext={pageContext}
          citationHTML={post.html}
        />
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
