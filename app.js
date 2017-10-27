const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const products = require('./assets/data/products/index.js')
const env = process.env.SPIKE_ENV

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    parser: sugarml,
    locals: (ctx) => {
      return {
        products: products,
        APIkey: 'NWQyYTQ4YzAtOTNkOS00OWMxLWI1ZTYtMmM5ZjY5Y2M0NmZlNjM2MjU0Nzc4MTAyNjc3OTc0'
      }
    },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    parser: sugarss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards()
}
