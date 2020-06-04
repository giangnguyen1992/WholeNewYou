<template>
    <picture>
        <source
            media="(min-width: 1012px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :src="imgPlaceholder"
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 1011px) and (min-width: 620px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :src="imgPlaceholder"
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 619px)"
            :data-srcset="
                `${require(`~/assets/images/${image.name}-mobile.${image.type}`)} 1x, ${require(`~/assets/images/${image.name}-retina.${image.type}`)} 2x`
            "
            :src="imgPlaceholder"
            :type="`image/${image.type}`"
        />
        <img
            :data-src="
                `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :src="imgPlaceholder"
            :alt="image.alt"
            class="rounded-lg lazyload"
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
