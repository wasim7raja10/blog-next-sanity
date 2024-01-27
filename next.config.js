/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
}
