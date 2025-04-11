
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true, // Needed for static export
    },
    // Added optimizations for better performance
    optimizeFonts: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    swcMinify: true, // Use SWC minifier for better performance
};

export default nextConfig;
