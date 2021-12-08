/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};
