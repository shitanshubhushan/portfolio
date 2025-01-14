/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'cdn-images-1.medium.com', 'miro.medium.com'],
    unoptimized: true,
  },
  // Required for static export
  distDir: 'out',
  trailingSlash: true,
}

export default nextConfig; 