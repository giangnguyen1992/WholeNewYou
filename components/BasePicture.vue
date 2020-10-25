<template>
    <picture
        v-if="image.name && image.type"
        class="block relative h-0 overflow-hidden"
        :class="image.noPadding ? 'hero-padding' : 'fixed-ratio-padding'"
        :style="image.isProduct ? inlinePadding6by4 : ''"
    >
        <source
            media="(min-width: 1012px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :srcset="
                image.lazyload
                    ? imgPlaceholder
                    : `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 1011px) and (min-width: 620px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :srcset="
                image.lazyload
                    ? imgPlaceholder
                    : `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 619px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-mobile.${image.type}`)} 1x, ${require(`~/assets/images/${image.name}-retina.${image.type}`)} 2x`
            "
            :srcset="
                image.lazyload
                    ? imgPlaceholder
                    : `${require(`~/assets/images/${image.name}-mobile.${image.type}`)} 1x, ${require(`~/assets/images/${image.name}-retina.${image.type}`)} 2x`
            "
            :type="`image/${image.type}`"
        />
        <img
            :data-src="
                `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :src="
                image.lazyload
                    ? imgPlaceholder
                    : `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :alt="image.alt ? image.alt : ''"
            class="rounded-lg absolute top-0 left-0 w-full h-full"
            :class="{
                lazyload: image.lazyload
            }"
        />
    </picture>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            inlinePadding6by4: {
                paddingBottom: '66.67%'
            }
        };
    },
    computed: {
        imgPlaceholder() {
            return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        }
    }
};
</script>

<style scoped>
@media (min-width: 1012px) {
    .fixed-ratio-padding {
        /* ratio: 100% / (9 / 6) = */
        padding-bottom: 150%;
    }
}

@media (max-width: 1011px) {
    .fixed-ratio-padding {
        /* ratio: 100% / (3 / 4) = */
        padding-bottom: 75%;
    }
}

@media (min-width: 1012px) {
    .hero-padding {
        padding-bottom: 150%;
    }
}

@media (max-width: 1011px) {
    .hero-padding {
        padding-bottom: 117%;
    }
}
</style>
