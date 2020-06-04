export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Whole New You',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Dein Onlinekurs für gesunde Ernährung und Achtsamkeit! Investiere im Juli zwei Wochen in dich selbst, deine Gesundheit und dein Wohlbefinden. Lerne die Grundlagen einer gesunden Ernährung kennen und wie du diese nachhaltig in deinen Alltag zu integrierst – für mehr Energie, ein stärkeres Immunsystem und ein gesteigertes Wohlbefinden.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/WNY.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@300;400;600&display=swap'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/global-components.js',
        '~/plugins/lazysizes.client.js',
        '~/plugins/smoothscrollPolyfill.client.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
