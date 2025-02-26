// All Credit Goes to Nook Theme , Modified by pabloilyas
const colors = require('tailwindcss/colors');

const gray = {
    50: colors.neutral[50],
    100: colors.neutral[100],
    200: colors.neutral[200],
    300: colors.neutral[300],
    400: colors.neutral[400],
    500: colors.neutral[500],
    600: colors.neutral[600],
    700: colors.neutral[700],
    800: colors.neutral[800],
    900: colors.neutral[900],
};

const purple = {
    50: "#f5e1ff",
    100: "#e9c2ff",
    200: "#d78cff",
    300: "#c555ff",
    400: "#a633e5",
    500: "#8c1bc8",
    600: "#720ea3",
    700: "#59097e",
    800: "#42065b",
    900: "#2c0339",
    950: "#1a0121",
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Inter"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                primary: purple,
                orange: purple, // Replacing orange with purple
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                neutral: {
                    50: colors.neutral[50],
                    100: colors.neutral[100],
                    200: colors.neutral[200],
                    300: colors.neutral[300],
                    400: colors.neutral[400],
                    500: colors.neutral[500],
                    600: colors.neutral[600],
                    700: '#17171B',
                    800: '#212121',
                    900: '#121212',
                }
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
