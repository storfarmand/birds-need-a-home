const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, '../scripts'),
  build: path.join(__dirname, '../dist'),
  fonts: '/fonts'
};

module.exports = {
  entry: {
    app: ['whatwg-fetch', PATHS.app]
  },
  output: {
      path: PATHS.build,
      filename: '[name].min.js',
      publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'babel-plugin-transform-runtime', 'transform-class-properties','transform-decorators-legacy','transform-es2015-destructuring']
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'less-loader',
              options: {
                globalVars: {
                  fontPath: `'${PATHS.fonts}'`
                }
              }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            }
          }
        }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.eot$/,
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
      },
      {
        test: /\.mp3$/,
        loaders: 'file-loader?name=assets/[name].[ext]'
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [
          // shows views/landing.html as the landing page
          { from: /^\/$/, to: '/' },
          // shows views/subpage.html for all routes starting with /subpage
          // { from: /^\/subpage/, to: '/views/subpage.html' },
          // shows views/404.html on all other pages
          { from: /./, to: '/' },
      ],
    },
  }
};
