module.exports = {
  plugins: [
    { resolve: `gatsby-plugin-emotion` },
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
