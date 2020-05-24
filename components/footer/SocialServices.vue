<template>
    <li class="px-6">
        <figure class="w-6 scale">
            <a :href="service.url" target="_blank" rel="noopener">
                <img :src="socialIconPath" :alt="service.name" />
            </a>
        </figure>
    </li>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    },
    computed: {
        socialIconPath() {
            const iconName = this.service.name.toLowerCase();
            return require(`~/assets/images/icons/${iconName}.svg`);
        }
    }
};
</script>

<style scoped>
.scale:hover {
    transform: scale(1.3);
}

.scale {
    transition: all 0.3s;
    transform-origin: 50% 50%;
}
</style>
