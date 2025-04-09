
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true, // Needed for static export
    },
};

export default nextConfig;
