/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow images from any HTTPS domain
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/, // Only apply to JS/TS files
        use: ['@svgr/webpack'], // Allows SVGs as React components
      });
      return config;
    },
  };
  
  export default nextConfig;
  