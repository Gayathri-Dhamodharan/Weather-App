/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Exclude mysql2 and its dependencies from client-side bundling
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  images: {
    domains: ["cdn.weatherapi.com"], // Add the domain here for external images
  },
};

export default nextConfig;
