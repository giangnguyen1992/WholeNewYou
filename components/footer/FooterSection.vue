<template>
    <footer
        class="w-full lg:px-8 md:px-8 sm:px-4 lg:py-24 md:py-16 sm:py-12 bg-sec2-base"
    >
        <div class="mx-auto max-w-5xl">
            <BaseLogo />
            <SocialBar v-if="services" class="my-8" :services="services" />
            <div
                class="flex justify-center align-middle font-sans text-sec-base mb-8"
            >
                <a
                    v-if="footer.privacy"
                    :href="footer.privacy"
                    class="mr-10 hover:text-sec-light"
                    target="_blank"
                    rel="noopener"
                    >Datenschutz</a
                >
                <a
                    v-if="footer.impressum"
                    :href="footer.impressum"
                    class="hover:text-sec-light"
                    target="_blank"
                    rel="noopener"
                    >Impressum</a
                >
            </div>
            <div class="text-center text-sec-base">
                <p>© {{ currentYear }} Bloominglife. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
import SocialBar from '~/components/SocialBar';

export default {
    components: {
        SocialBar
    },
    computed: {
        currentYear() {
            const date = new Date();
            const currentYear = date.getFullYear();
            return currentYear;
        },
        footer() {
            return this.$store.getters.footer;
        },
        services() {
            return this.footer.socials ? this.footer.socials : [];
        }
    }
};
</script>
