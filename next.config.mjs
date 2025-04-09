
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true, // Needed for static export
    },
    swcMinify: true, // Ensure SWC minifier is enabled
    webpack: (config, { dev, isServer }) => {
      // Only run in production client-side builds
      if (!dev && !isServer) {
        config.optimization.minimize = true;
      }
      return config;
    },
};

export default nextConfig;
