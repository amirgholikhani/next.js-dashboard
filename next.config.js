/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'src'], // Only run ESLint on the 'pages' and 'src' directories during production builds (next build)
  },
  images: {
    domains: [
      'static.keepapp.ir',
      'static.restora.ir',
      'static.blueinnovatorsteam.ir'
    ],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
