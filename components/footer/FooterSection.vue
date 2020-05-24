<template>
    <footer class="bg-sec2-base pt-10 pb-6">
        <BaseLogo />
        <SocialBar class="my-8" :services="services" />
        <div
            class="flex justify-center align-middle font-sans text-sec-base mb-8"
        >
            <p class="mr-10 hover:text-sec-light">Datenschutz</p>
            <p class="hover:text-sec-light">Impressum</p>
        </div>
        <div class="text-center text-sec-base">
            <p>© {{ currentYear }} Bloominglife. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
import data from '~/data/langdingpage.json';
import SocialBar from '~/components/footer/SocialBar';

export default {
    components: {
        SocialBar
    },
    data() {
        return {
            data
        };
    },
    computed: {
        currentYear() {
            const date = new Date();
            const currentYear = date.getFullYear();
            return currentYear;
        },
        services() {
            return data.footer.socials ? data.footer.socials : [];
        }
    }
};
</script>
