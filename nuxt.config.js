export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Whole New You',
        htmlAttrs: {
            lang: 'de'
        },
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
                    'Investiere im Juli zwei Wochen in dich selbst, deine Gesundheit und dein Wohlbefinden. Lerne die Grundlagen einer gesunden Ernährung kennen und wie du diese nachhaltig in deinen Alltag zu integrierst – für mehr Energie, ein stärkeres Immunsystem und ein gesteigertes Wohlbefinden.'
            },
            {
                name: 'title',
                content:
                    'Dein Onlinekurs für gesunde Ernährung und Achtsamkeit!'
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:url',
                content: 'https://wholenewyou.de/'
            },
            {
                property: 'og:title',
                content:
                    'Dein Onlinekurs für gesunde Ernährung und Achtsamkeit!'
            },
            {
                property: 'og:description',
                content:
                    'Investiere im Juli zwei Wochen in dich selbst, deine Gesundheit und dein Wohlbefinden. Lerne die Grundlagen einer gesunden Ernährung kennen und wie du diese nachhaltig in deinen Alltag zu integrierst – für mehr Energie, ein stärkeres Immunsystem und ein gesteigertes Wohlbefinden.'
            },
            {
                property: 'og:image',
                content: '/meta.png'
            },
            {
                property: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                property: 'twitter:url',
                content: 'https://wholenewyou.de/'
            },
            {
                property: 'twitter:title',
                content:
                    'Dein Onlinekurs für gesunde Ernährung und Achtsamkeit!'
            },
            {
                property: 'twitter:description',
                content:
                    'Investiere im Juli zwei Wochen in dich selbst, deine Gesundheit und dein Wohlbefinden. Lerne die Grundlagen einer gesunden Ernährung kennen und wie du diese nachhaltig in deinen Alltag zu integrierst – für mehr Energie, ein stärkeres Immunsystem und ein gesteigertes Wohlbefinden.'
            },
            {
                property: 'twitter:image',
                content: '/meta.png'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/WNY.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {},
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
