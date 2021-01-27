import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

import './Strategies.scss'
import StrategySelect from './StrategySelect'
import { colorForStrategy } from '../pages/strategies'

const StrategyTemplate = (props) => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  // console.log('props', props)

  // console.log('props.pageContext', props.pageContext)
  console.log('post.frontmatter.strategyTypes', post.frontmatter.strategyTypes)

  const { previous, next } = props.pageContext

  console.log(props.data)
  console.log(post)

  const carouselRef = useRef()

  useEffect(() => {
    carouselRef.current.click()
  }, [])

  const strategyTypes = post.frontmatter.strategyTypes

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
        <div className="Post">
          <div className="row">
            <div className="col">
              <div className="row MoreInfo">
                <div className="Annotation col col-4">
                  <div
                    className={`Summary ${strategyTypes}BG`}
                    dangerouslySetInnerHTML={{
                      __html: props.pageContext.subpages.summary
                    }}
                  />
                </div>

                <div className="Illustration col-8">
                  <h2>How it works</h2>
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                    data-interval={2000}
                    ref={carouselRef}
                  >
                    <div className="carousel-inner">
                      {props.data.allFile.nodes.map((node, index) => {
                        return (
                          <div
                            key={index}
                            className={`carousel-item${
                              index === 0 ? ' active' : ''
                            }`}
                          >
                            <img
                              className="d-block w-100"
                              src={node.childImageSharp.fluid.src}
                            />
                          </div>
                        )
                      })}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleFade"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleFade"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>

                <div className="Types col col-4">
                  <h2>Types of {post.frontmatter.title.toLowerCase()}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.pageContext.subpages.types
                    }}
                  />
                </div>

                <div className="Benefits col col-4">
                  <h2>
                    <i className="fas fa-check mr-2" />
                    Benefits
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.pageContext.subpages.benefits
                    }}
                  />
                </div>

                <div className="Challenges col col-4">
                  <h2>
                    <i className="fas fa-times mr-2" />
                    Challenges
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.pageContext.subpages.challenges
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row BottomBG">
            <div className="col-8">
              <div className="Examples row">
                <div className="ExamplesTitle col-12">
                  <h2>
                    <i className="fas fa-tools mr-2"></i> Example projects
                  </h2>
                </div>

                {props.pageContext.subpages.examples &&
                  props.pageContext.subpages.examples.map(
                    (exampleHtml, index) => {
                      return (
                        <div className="col" key={index}>
                          <div
                            className="Example"
                            dangerouslySetInnerHTML={{ __html: exampleHtml }}
                          />
                        </div>
                      )
                    }
                  )}
              </div>
            </div>

            <div className="col Images">
              <div className="row ImagesTitle">
                <h2>
                  <i className="fas fa-images mr-2"></i> Gallery
                </h2>
              </div>

              {props.pageContext.subpages.images &&
                props.pageContext.subpages.images.map((imageHtml, index) => {
                  return (
                    <div className="col-12" key={index}>
                      <div
                        className="Image"
                        dangerouslySetInnerHTML={{ __html: imageHtml }}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <hr style={{ marginBottom: '1rem' }} />
        <div
          className="Citations"
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
