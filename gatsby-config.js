import dotenv from 'dotenv'

import { isDevelopment } from './src/helpers'

if (isDevelopment) {
  dotenv.config({
    path: '.env',
  })
}

module.exports = {
  siteMetadata: {
    title: 'Donde la locura nos lleve!',
    author: '@dondelalocura',
    siteUrl: 'https://dondelalocuranoslleve.com',
    startDate: '2019-05-30',
    social: {
      twitter: {
        name: '@dondelalocuranoslleve',
        url: 'https://twitter.com/dondelalocuranoslleve',
      },
      facebook: {
        name: 'dondelalocuranoslleve',
        url: 'https://www.facebook.com/dondelalocuranoslleve',
      },
      instagram: {
        name: 'donde_la_locura_nos_lleve',
        url: 'https://instagram.com/donde_la_locura_nos_lleve',
      },
    },
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wheremadnesstakesus',
        // eslint-disable-next-line camelcase
        short_name: 'starter',
        // eslint-disable-next-line camelcase
        start_url: '/',
        // eslint-disable-next-line camelcase
        background_color: '#663399',
        // eslint-disable-next-line camelcase
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logo.png',
      },
    },
    process.env.ANALYZE_BUNDLE_SIZE && {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ].filter(Boolean),
}
