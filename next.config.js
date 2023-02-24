/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com", "media.licdn.com"],
  },
};

module.exports = nextConfig;
