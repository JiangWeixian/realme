if (process.env.NODE_ENV === 'development') {
  console.log('info  - lanUrl:', `http://${require('address').ip()}:3000`)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // disable eslint on build
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // realme-ten.vercel.app is website provide svg images build with svg foreignObject
    domains: [
      'images.unsplash.com',
      'user-images.githubusercontent.com',
      'realme-ten.vercel.app',
      '127.0.0.1',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
