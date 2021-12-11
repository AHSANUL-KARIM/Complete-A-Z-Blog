module.exports = {
  reactStrictMode: true,
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
   webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    mongodb_username: 'AHSANUL',
    mongodb_password: 'AHsanul12',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-site'
   }
}
