const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
