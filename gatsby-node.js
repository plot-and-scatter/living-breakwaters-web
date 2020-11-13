const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const TEMPLATES_DIR = `./src/templates/`

const BASE_QUERY = (contentTypeFilter) => `
  {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { ${contentTypeFilter} } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const STRATEGY_RETRIEVAL_QUERY = BASE_QUERY`ne: "scenario"`
const SCENARIO_RETRIEVAL_QUERY = BASE_QUERY`eq: "scenario"`

const STRATEGY_URL_PREFIX = `/strategies`
const SCENARIO_URL_PREFIX = `/scenarios`

const pagesFromNodes = async (
  query,
  templatePath,
  graphql,
  createPageMethod
) => {
  const gqlMarkdownNodes = await graphql(query)

  if (gqlMarkdownNodes.errors) {
    throw gqlMarkdownNodes.errors
  }

  const subpageMap = {}

  // Create pages.
  const pages = gqlMarkdownNodes.data.allMarkdownRemark.edges

  const subpageTypes = {
    summary: { path: '/summary/', multi: false },
    types: { path: '/types/', multi: false },
    benefits: { path: '/benefits/', multi: false },
    challenges: { path: '/challenges/', multi: false },
    examples: { path: '/example', multi: true },
    images: { path: '/image', multi: true }
  }

  // Find the children
  pages
    .filter((page) => page.node.frontmatter.title.length === 0)
    .forEach((page) => {
      const slug = `${page.node.fields.slug}`
      const splitSlug = slug.split('/')
      const parentSlug = splitSlug
        .slice(0, splitSlug.length - 2)
        .join('/')
        .concat('/')

      // Link up the subpages
      Object.keys(subpageTypes).forEach((subpageTypeKey) => {
        const value = subpageTypes[subpageTypeKey]
        const subpageTypeSlug = value.path
        if (slug.indexOf(subpageTypeSlug) > -1) {
          subpageMap[parentSlug] = subpageMap[parentSlug] || {}
          if (value.multi) {
            subpageMap[parentSlug][subpageTypeKey] =
              subpageMap[parentSlug][subpageTypeKey] || []
            subpageMap[parentSlug][subpageTypeKey].push(page.node.html)
          } else {
            subpageMap[parentSlug][subpageTypeKey] = page.node.html
          }
        }
      })
    })

  // Filter out the non-children
  pages
    .filter((page) => page.node.frontmatter.title.length > 0)
    .forEach((page, index) => {
      const previous = index === pages.length - 1 ? null : pages[index + 1].node
      const next = index === 0 ? null : pages[index - 1].node

      createPageMethod({
        path: page.node.fields.slug,
        component: path.resolve(templatePath),
        context: {
          animationSlug: `/${page.node.fields.slug}animation.*png/`,
          slug: page.node.fields.slug,
          foo: 'bar',
          subpages: subpageMap[page.node.fields.slug],
          previous,
          next
        }
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await pagesFromNodes(
    STRATEGY_RETRIEVAL_QUERY,
    `${TEMPLATES_DIR}Strategy.jsx`,
    graphql,
    createPage
  )
  await pagesFromNodes(
    SCENARIO_RETRIEVAL_QUERY,
    `${TEMPLATES_DIR}Scenario.jsx`,
    graphql,
    createPage
  )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const urlPrefix =
      node.frontmatter.contentType === 'scenario'
        ? SCENARIO_URL_PREFIX
        : STRATEGY_URL_PREFIX
    const value = `${urlPrefix}${createFilePath({ node, getNode })}`

    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

// Temporary workaround for mapbox-gl import error described in
// https://github.com/mapbox/mapbox-gl-js/issues/4593
// Same for gsap. See also https://www.gatsbyjs.com/docs/debugging-html-builds/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null()
          },
          {
            test: /gsap/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
