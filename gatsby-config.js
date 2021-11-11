module.exports = {
  siteMetadata: {
    title: `The Wedding of Fitri & Ridho`,
    description: `The Wedding of Fitri & Ridho`,
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
