/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['images.unsplash.com', 'i.imgur.com'],
    }
}

module.exports = nextConfig
