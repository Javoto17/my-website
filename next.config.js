/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['default', 'en'],
        defaultLocale: 'default',
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};
