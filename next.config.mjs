/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'cdn-images-1.medium.com', 'miro.medium.com'],
    unoptimized: true,
  },
}

export default nextConfig; 