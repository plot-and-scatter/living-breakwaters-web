module.exports = {
  pathPrefix: '/living-breakwaters-web',
  siteMetadata: {
    title: `Living Breakwaters`,
    author: `Frank Hangler`,
    description: `Living Breakwaters online platform.`,
    siteUrl: `https://plotandscatter.com/living-breakwaters-web`,
    social: {
      twitter: `livingbreakwaters`
    }
  },
  plugins: [
    { resolve: `gatsby-plugin-anchor-links`, options: { offset: -100 } },
    `gatsby-plugin-catch-links`,
    `gatsby-remark-external-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/strategies`,
        name: `strategies`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              useFootnoteMarkerText: true,
              footnoteBackRefInnerTextStartPosition: 'front',
              footnoteBackRefInnerText: '↑'
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`
  ]
}
