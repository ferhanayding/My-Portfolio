const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  outputFileTracingExcludes: {
    '*': ['**/node_modules/**'],
  },
};

module.exports = withNextIntl(nextConfig);