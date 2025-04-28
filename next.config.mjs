// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

export default {
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
};

