import '../src/styles/globals.css';

import tailwindConfig from '../tailwind.config';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#fff',
            },
            {
                name: 'dark',
                value: '#000000',
            },
            {
                name: 'cyan',
                value: '#a0dcff',
            },
        ],
    },
};
