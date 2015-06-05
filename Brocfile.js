/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var autoprefixer = require('autoprefixer-core');
var lost = require('lost');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simpleVars = require('postcss-simple-vars');

var app = new EmberApp({
  postcssOptions: {
    plugins: [
      {
        module: autoprefixer,
        options: {
          browsers: ['last 2 versions']
        }
      },
      {
        module:lost
      },
      {
        module:nested
      },
      {
        module:mixins
      },
      {
        module:simpleVars
      }
    ]
  }
});

module.exports = app.toTree();
