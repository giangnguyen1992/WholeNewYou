<template>
    <BaseSection class="bg-sec2-base">
        <BaseLogo />
        <SocialBar class="my-8" :services="services" />
        <div
            class="flex justify-center align-middle font-sans text-sec-base mb-8"
        >
            <a
                href="https://www.bloominglife.de/datenschutzerklaerung/"
                class="mr-10 hover:text-sec-light"
                target="_blank"
                rel="noopener"
                >Datenschutz</a
            >
            <a
                href="https://www.bloominglife.de/impressum/"
                class="hover:text-sec-light"
                target="_blank"
                rel="noopener"
                >Impressum</a
            >
        </div>
        <div class="text-center text-sec-base">
            <p>© {{ currentYear }} Bloominglife. All Rights Reserved.</p>
        </div>
    </BaseSection>
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
