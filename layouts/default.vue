<template>
    <div class="flex flex-col min-h-screen">
        <div
            id="scrollObserver"
            class="absolute top-0 h-px w-full invisible"
        ></div>
        <NavigationSection />
        <nuxt />
        <FooterSection class="mt-auto" />
        <CookieBanner v-if="showCookieBanner" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationSection from '~/components/nav/NavigationSection';
import FooterSection from '~/components/footer/FooterSection';
import CookieBanner from '~/components/cookieBanner/CookieBanner';

import localStorageFunction from '~/mixins/localstorage';

export default {
    components: {
        NavigationSection,
        FooterSection,
        CookieBanner
    },
    mixins: [localStorageFunction],
    computed: {
        ...mapGetters('user', ['showCookieBanner'])
    },
    mounted() {
        this.initIntersectionObserver();
        this.setConsentStatusOnPageLoad();
    },
    methods: {
        ...mapActions({
            setCookieStatus: 'user/userAcceptCookies',
            userHasAcceptedCookie: 'user/userHasAcceptedCookie'
        }),
        initIntersectionObserver() {
            const ioTarget = document.querySelector('#scrollObserver');
            if (
                ioTarget &&
                typeof window.IntersectionObserver === 'function' &&
                typeof window.IntersectionObserverEntry === 'function'
            ) {
                const options = {
                    root: null,
                    rootMargin: `100px 0px 100px 0px`,
                    thresholds: [0, 0.25, 0.5, 0.75, 1.0]
                };

                const observer = new IntersectionObserver((entries) => {
                    this.observeScroll(entries);
                }, options);

                observer.observe(ioTarget);
            }
        },
        observeScroll(entries) {
            if (!Array.isArray(entries)) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.onScrollToTop();
                } else {
                    this.onScrollPastTargetEl();
                }
            });
        },
        onScrollPastTargetEl() {
            this.$nuxt.$emit('ON_SCROLL_DOWN');
        },
        onScrollToTop() {
            this.$nuxt.$emit('ON_SCROLL_UP');
        },
        setConsentStatusOnPageLoad() {
            if (this.getLocalStorage('accept_wny_cookie')) {
                if (
                    typeof this.$fb === 'object' &&
                    typeof this.$fb.enable === 'function'
                ) {
                    this.$fb.enable();
                    this.userHasAcceptedCookie();
                }
            } else {
                this.setCookieStatus();
            }
        }
    }
};
</script>
