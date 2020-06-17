<template>
    <div
        v-if="!isHidden"
        class="bg-sec2-base w-full fixed lg:bottom-0 md:bottom-0 lg:left-0 md:left-0 lg:ml-16 md:ml-16 lg:mb-16 md:mb-16 lg:max-w-lg md:max-w-lg sm:bottom-0 sm:left-0 flex flex-col lg:p-8 md:p-8 sm:px-4 sm:py-2 rounded-lg shadow-lg"
    >
        <h4 class="lg:text-xl md:text-xl sm:text-lg mb-2">
            Wir benötigen Deine Zustimmung.
        </h4>
        <p class="lg:text-base md:text-base sm:text-sm font-light mb-4">
            Auf dieser Webseite nutzen wir Cookies, um Anzeigen zu
            personalisieren und die Zugriffe auf unsere Webseite zu analysieren.
            Wir geben Informationen zur Nutzung unserer Webseite an Partner für
            soziale Medien und Analysen weiter. Mit einem Klick auf Akzeptieren
            stimmst Du dieser Nutzung zu. Weitere Infos findest Du in unserer
            <a class="underline hover:text-sec-base" :href="datenschutzUrl"
                >Datenschutzerklärung</a
            >.
        </p>
        <div class="flex items-center justify-evenly">
            <button class="text-sm font-thin" @click="declineCookie">
                Ablehnen
            </button>
            <button
                class="bg-white inline-block rounded-lg lg:hover:shadow-lg focus:shadow-outline outline-none py-2 px-8"
                @click="acceptCookie"
            >
                Akzeptieren
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            isHidden: false
        };
    },
    computed: {
        datenschutzUrl() {
            return this.$store.state.landingpage.data.footer.privacy;
        }
    },
    methods: {
        ...mapActions({
            setCookieStatus: 'user/userAcceptCookies',
            userHasAcceptedCookie: 'user/userHasAcceptedCookie'
        }),
        acceptCookie() {
            if (this.setLocalStorage('accept_wny_cookie', 'true')) {
                this.$fb.enable();
                this.userHasAcceptedCookie();
                this.isHidden = true;
            }
        },
        declineCookie() {
            this.isHidden = true;
        },
        setLocalStorage(key, value) {
            if (typeof key !== 'string' || typeof value === 'undefined') {
                return false;
            }
            let storage;
            try {
                storage = window.localStorage;
            } catch (e) {
                return false;
            }
            if (storage) {
                const valueJSON = JSON.stringify(value);
                storage.setItem(key, valueJSON);
                return true;
            }
            return false;
        }
    }
};
</script>
