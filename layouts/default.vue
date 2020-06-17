<template>
    <div>
        <NavigationSection />
        <nuxt />
        <FooterSection />
        <CookieBanner v-if="showCookieBanner" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationSection from '../components/nav/NavigationSection';
import FooterSection from '../components/footer/FooterSection';
import CookieBanner from '../components/cookieBanner/CookieBanner';

export default {
    components: {
        NavigationSection,
        FooterSection,
        CookieBanner
    },
    computed: {
        ...mapGetters('user', ['showCookieBanner'])
    },
    mounted() {
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
    },
    methods: {
        ...mapActions({
            setCookieStatus: 'user/userAcceptCookies',
            userHasAcceptedCookie: 'user/userHasAcceptedCookie'
        }),
        getLocalStorage(key) {
            if (typeof key !== 'string') {
                return undefined;
            }
            let storage;
            try {
                storage = window.localStorage;
            } catch (e) {
                return undefined;
            }
            if (storage && storage.getItem(key)) {
                const parsedValue = JSON.parse(storage.getItem(key));
                return parsedValue;
            }
            return undefined;
        }
    }
};
</script>

<style></style>
