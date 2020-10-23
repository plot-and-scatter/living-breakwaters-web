import PropTypes from "prop-types"
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"

import './Strategies.scss'

class StrategyTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    console.log(this.props.data)
    console.log(post)


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className='Strategies row'>
          <div className='col col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'>
          <h1
          style={{
            marginTop: "2rem",
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            display: `block`,
            marginBottom: "1rem",
          }}
        >
          {post.frontmatter.date} • {post.frontmatter.tags && post.frontmatter.tags.split(' ').map((t, i) => <span key={i} className={'badge badge-primary mr-2'}>{t}</span>)}
        </p>
        <img style={{ border: 'solid 1px #ccc'}} src={post.frontmatter.image} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: "1rem",
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
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
}

export default StrategyTemplate

StrategyTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
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
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
