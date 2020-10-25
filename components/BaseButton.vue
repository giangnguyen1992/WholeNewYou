<template>
    <a
        class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12"
        href="https://sellfy.com/p/ppsoll/"
        target="_blank"
        rel="noopener"
        @click="fbTrackAddToCart"
    >
        <span class="flex align-middle justify-center tracking-wider"
            ><span class="font-sans font-bold text-white text-base"
                ><slot></slot
            ></span>
        </span>
    </a>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['showCookieBanner'])
    },
    methods: {
        fbTrackAddToCart() {
            if (
                this.showCookieBanner ||
                typeof this.$fb !== 'object' ||
                typeof this.$fb.track !== 'function'
            ) {
                return;
            }

            this.$fb.track('AddToCart');
        }
    }
};
</script>
