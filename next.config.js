/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['live.staticflickr.com', 'media.licdn.com', 'flickr.com'],
  },
};

module.exports = nextConfig;
