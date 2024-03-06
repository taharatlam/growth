/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://techmatrick.com/'],
    },
    env: {
        imageUrl: 'https://techmatrick.com/algoquant/uploads/images/',
    },
}

module.exports = nextConfig
