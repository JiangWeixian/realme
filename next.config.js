/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // disable eslint on build
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, context) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.plugins.push(
      new context.webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_DEBUG': false,
      }),
    )
    return config
  },
}

module.exports = nextConfig
