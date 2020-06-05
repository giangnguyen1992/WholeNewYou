<template>
    <picture>
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
            :alt="image.alt"
            class="rounded-lg"
            :class="{ lazyload: image.lazyload }"
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
    computed: {
        imgPlaceholder() {
            return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        }
    }
};
</script>
