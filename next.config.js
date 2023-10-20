const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n
  i18n,
  swcMinify: true,
  experimental: {
    appDir: true,
  },

  transpilePackages: ['antd'],
  // config env
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,


  },
  httpAgentOptions: {
    keepAlive: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['huynnbucket.s3.ap-southeast-1.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/rss.rss',
        destination: '/api/rss.rss',
      },
      {
        source: '/rss/:path*',
        destination: '/api/rss/:path*',
      },
      {
        source: '/sitemap/:path*',
        destination: '/api/sitemap/:path*',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },

  headers: async function headers() {
    if (process.env.NODE_ENV === 'development') return [];
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
