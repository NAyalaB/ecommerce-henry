/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
      
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          pathname: '/**',
        },
       
        {
          protocol: 'https',
          hostname: 'image.similarpng.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.pngall.com',
          pathname: '/**',
        },

        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
          pathname: '/**',
        },
       
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          pathname: '/**',
        },

        {
          protocol: 'https',
          hostname: 'imgur.com', 
          pathname: '/**',
        },
        
        
      ],
    },
  };
  
  module.exports = nextConfig;
  