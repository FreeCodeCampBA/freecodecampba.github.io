exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter|react-mapbox-gl|react-mapbox-gl|react-map-gl|(mapbox-gl)\.js$/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
