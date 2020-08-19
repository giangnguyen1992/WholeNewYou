<template>
    <div>
        <NavigationSection />
        <nuxt />
        <CookieBanner v-if="showCookieBanner" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationSection from '~/components/nav/NavigationSection';
import CookieBanner from '~/components/cookieBanner/CookieBanner';

import localStorageFunction from '~/mixins/localstorage';

export default {
    components: {
        NavigationSection,
        CookieBanner
    },
    mixins: [localStorageFunction],
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
        })
    }
};
</script>

<style></style>
