<template>
    <footer class="w-full lg:px-8 md:px-8 sm:px-4 py-8 sm:py-4 bg-sec2-base">
        <div class="mx-auto max-w-5xl">
            <BaseLogo class="mx-auto" />
            <div
                class="flex justify-center align-middle font-sans text-sec-base mb-4"
            >
                <nuxt-link
                    to="/datenschutz"
                    class="mr-10 hover:text-sec-light"
                    target="_blank"
                    rel="noopener"
                    >Datenschutz</nuxt-link
                >
                <nuxt-link
                    to="/impressum"
                    class="hover:text-sec-light"
                    target="_blank"
                    rel="noopener"
                    >Impressum</nuxt-link
                >
            </div>
            <div class="text-center text-sec-base">
                <p>© {{ currentYear }} Bloominglife. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            const date = new Date();
            const currentYear = date.getFullYear();
            return currentYear;
        }
    }
};
</script>
