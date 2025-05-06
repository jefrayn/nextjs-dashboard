import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     ppr: 'incremental'
//   }
// };

// export default nextConfig;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;