module.exports = {
  compress: false,
  distDir: '.build',
  webpack5: true,
  swcMinify: true,
  pageExtensions: ['js'],
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    isDevelopment: ['development', 'test'].includes(process.env.NODE_ENV)
  },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.js?$/,
      include: [options.dir],
      use: [
        'next-swc-loader',
        {
          loader: '@svgr/webpack',
          options: { babel: false }
        }
      ]
    })

    return config
  }
}
