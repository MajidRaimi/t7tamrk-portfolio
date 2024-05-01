/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.storyblok.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'designmodo.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
