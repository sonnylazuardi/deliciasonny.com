module.exports = {
  siteMetadata: {
    title: `Ridho Fitri Wedding`,
    description: `Ridho Fitri Wedding`,
    author: `@convyusboy`
  },
  plugins: [
    { resolve: `gatsby-plugin-emotion` },
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
