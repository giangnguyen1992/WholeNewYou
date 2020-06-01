<template>
    <div class="flex flex-col items-center flex-1 pr-6 last:pr-0">
        <div class="w-24 my-8">
            <img :src="iconPath" alt="Banane" />
        </div>
        <h3 class="font-sans text-sec-base font-semibold text-2xl mt-4 mb-2">
            {{ argument.headline }}
        </h3>
        <p class="font-sans text-sec-base text-center">{{ argument.text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        argument: {
            type: Object,
            required: true
        }
    },
    computed: {
        iconPath() {
            const iconName = this.argument.icon.toLowerCase();
            return require(`~/assets/images/icons/${iconName}.svg`);
        }
    }
};
</script>
