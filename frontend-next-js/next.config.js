/** @type {import('next').NextConfig} */
const nextConfig = {
    //If you want to display any images in nextjs app from accross the internet; here is my next config
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
