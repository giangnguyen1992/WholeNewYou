/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
            'primary-base': '#ffab9f',
            'primary-light': '#f6d0c4',
            'primary-lighter': '#f6e8e7',
            'sec-base': '#425966',
            'sec-light': '#9db5c4',
            'sec2-base': '#fddf9a',
            'sec2-light': '#fdf9e7'
        },
        fontFamily: {
            sans: ['Source Sans Pro', 'sans-serif'],
            heading: ['Bebas Neue', 'sans-serif'],
            serif: ['Source Serif Pro', 'serif']
        },
        screens: {
            sm: { max: '719px' },
            md: { min: '720px', max: '1011px' },
            lg: { min: '1012px' }
        },
        minHeight: {
            '62': '256px'
        },
        borderRadius: {
            lg: '0.5rem',
            image: '0.7rem',
            full: '9999px'
        },
        inset: {
            '0': 0,
            '1/2': '50%',
            auto: 'auto'
        },
        textColor: (theme) => theme('colors'),
        backgroundColor: (theme) => theme('colors'),
        boxShadow: {
            button:
                '0 10px 25px rgba(255, 171, 159, .3), 0 5px 10px rgba(255, 171, 159, .1)',
            hoverButton:
                '0 10px 25px rgba(255, 171, 159, .6), 0 5px 10px rgba(255, 171, 159, .3)',
            picture: '-20px -20px 0px -5px rgba(255,171,159,1)',
            md:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }
    },
    plugins: [],
    variants: {
        padding: ['responsive', 'hover', 'focus', 'odd', 'even', 'last'],
        margin: ['responsive', 'hover', 'focus', 'odd', 'even', 'last']
    }
};
