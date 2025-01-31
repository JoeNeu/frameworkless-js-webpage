const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const paths = require('./paths')

const htmlPages = [
  // Generates an HTML file from a template
  // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
  new HtmlWebpackPlugin({
    title: 'Webpage Home',
    favicon: paths.src + '/images/favicon.png',
    template: paths.src + '/home.html',
    filename: 'index.html',
    url: (process.env.NODE_ENV === 'production')
      ? 'frameworkless-js-webpage' : ''
  }),
  new HtmlWebpackPlugin({
    title: 'Webpage Content',
    favicon: paths.src + '/images/favicon.png',
    template: paths.src + '/content.html',
    filename: 'content.html',
    url: (process.env.NODE_ENV === 'production')
      ? 'frameworkless-js-webpage' : ''
  }),
  new HtmlWebpackPlugin({
    title: 'Webpage About',
    favicon: paths.src + '/images/favicon.png',
    template: paths.src + '/about.html',
    filename: 'about.html',
    url: (process.env.NODE_ENV === 'production')
      ? 'frameworkless-js-webpage' : ''
  })
]

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    main : paths.src + '/index.js',
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    new PrettierPlugin(),
  ].concat(htmlPages),

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
}
