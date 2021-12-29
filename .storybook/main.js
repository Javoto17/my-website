const path = require('path');

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    webpackFinal: (config, { configType }) => {
        const PRODUCTION = configType === 'PRODUCTION';

        config.module.rules.find(
            (rule) => rule.test.toString() === '/\\.css$/'
        ).exclude = /\.module\.css$/;

        // Tell webpack what to do with CSS modules
        config.module.rules.push({
            test: /\.module\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: !PRODUCTION,
                        esModule: false,
                        modules: {
                            namedExport: false,
                            exportLocalsConvention: 'asIs',
                            localIdentName: PRODUCTION
                                ? '[hash:base64:5]'
                                : '[name]--[local]--[hash:base64:5]',
                        },
                    },
                },
                'postcss-loader',
            ],
        });

        return config;
    },
};
