'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API:'"https://www.fastmock.site/mock/2b7185326ae844c34f40f598f9627291/film"'
})
