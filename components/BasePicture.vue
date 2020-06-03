<template>
    <picture>
        <source
            media="(min-width: 1012px)"
            :srcset="
                `${require(`~/assets/images/${image.name}-desktop.${image.type}`)}`
            "
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 1011px) and (min-width: 620px)"
            :srcset="
                `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :type="`image/${image.type}`"
        />
        <source
            media="(max-width: 619px)"
            :srcset="
                `${require(`~/assets/images/${image.name}-mobile.${image.type}`)} 1x, ${require(`~/assets/images/${image.name}-retina.${image.type}`)} 2x`
            "
            :type="`image/${image.type}`"
        />
        <img
            :src="
                `${require(`~/assets/images/${image.name}-retina.${image.type}`)}`
            "
            :alt="image.alt"
            class="rounded-lg"
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
    }
};
</script>
