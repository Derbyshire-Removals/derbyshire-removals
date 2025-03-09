
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Static HTML export for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
};

module.exports = nextConfig;
