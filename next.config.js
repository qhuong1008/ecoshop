/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  localePath: path.resolve("./public/static/locales"),
  debug: true,
  react: {
    useSuspense: false,
    wait: true,
  },
};
{
  ssr: false;
}

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          os: false,
        },
      };
      return config;
    },
  };
};

module.exports = nextConfig;
