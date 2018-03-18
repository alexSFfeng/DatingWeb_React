// help bundle js and other files for the app
import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [ // actual entry point must be last in order for webpack to bundle correctly.
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // can change target to node if the app is ran by node.
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    // allows hot reload preventing full reload.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // these configs allow webpack to recognize files besides js as well.
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /\.module.css$/, loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'},
      {test: /^((?!\.module).)*css$/, loader: 'style!css'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(png|jpg)$/, loader: "file"}
    ]
  }
};