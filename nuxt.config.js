require('dotenv').config();

const baseURL =
    process.env.NODE_ENV === 'development'
        ? process.env.DEV_BASEURL
        : process.env.PROD_BASEURL;

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
                    'Ich zeige dir, wie du deine Gesundheit selbst in die Hand nimmst und von nun an selbstbewusst mit deiner Ernährung umgehst. In 6 Wochen arbeiten wir an einem gesunden Health Mindset, lernen alles über die Grundlagen einer gesunden Ernährung und wie wir unsere Verdauung und Entgiftung optimal unterstützen.'
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
                    'Ich zeige dir, wie du deine Gesundheit selbst in die Hand nimmst und von nun an selbstbewusst mit deiner Ernährung umgehst. In 6 Wochen arbeiten wir an einem gesunden Health Mindset, lernen alles über die Grundlagen einer gesunden Ernährung und wie wir unsere Verdauung und Entgiftung optimal unterstützen.'
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
                    'Ich zeige dir, wie du deine Gesundheit selbst in die Hand nimmst und von nun an selbstbewusst mit deiner Ernährung umgehst. In 6 Wochen arbeiten wir an einem gesunden Health Mindset, lernen alles über die Grundlagen einer gesunden Ernährung und wie wir unsere Verdauung und Entgiftung optimal unterstützen.'
            },
            {
                property: 'twitter:image',
                content: '/meta.png'
            },
            {
                name: 'google-site-verification',
                content: 'xIjosFBrzasXaVKsRF7ZJXyoGs5NsHqvTgsmfH73ZP0'
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
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        [
            'nuxt-facebook-pixel-module',
            {
                /* module options */
                track: 'PageView',
                pixelId: '3111615902287636',
                disabled: true
            }
        ]
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    axios: {
        baseURL
    }
};
