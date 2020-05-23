<template>
    <footer class="bg-sec2-base pt-10 pb-6">
        <BaseLogo />
        <ul class="flex justify-center align-middle my-8">
            <li class="px-6">
                <figure class="w-6 scale">
                    <a
                        href="https://www.instagram.com/bloominglife.de/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="~/assets/images/icons/instagram.svg"
                            alt="Instagram"
                        />
                    </a>
                </figure>
            </li>
            <li class="px-6">
                <figure class="w-6 scale">
                    <a
                        href="https://www.youtube.com/channel/UCNGsn-nsqStKzQAr_2-9Kow"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="~/assets/images/icons/youtube.svg"
                            alt="Youtube"
                        />
                    </a>
                </figure>
            </li>
            <li class="px-6">
                <figure class="w-6 scale">
                    <a
                        href="https://www.bloominglife.de/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="~/assets/images/icons/worldwide.svg"
                            alt="Webseite Bloominglife.de"
                        />
                    </a>
                </figure>
            </li>
        </ul>
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
