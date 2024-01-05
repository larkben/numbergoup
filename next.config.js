/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    experimental: {
      appDir: true,
    },
    webpack: (config, { isServer }) => {
      // Replace 'fs' module with an empty module on client side
      if (!isServer) {
        config.resolve.fallback = { fs: false };
      }
      return config;
    },
  };
