/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
