<template>
    <div
        class="flex flex-col items-center flex-1 lg:pr-6 last:pr-0 md:mb-12 sm:mb-12 md:max-w-xl md:mx-auto "
    >
        <div class="w-32 mb-8 md:mb-4 sm:mb-4">
            <img class="w-full" :src="iconPath" :alt="argument.icon" />
        </div>
        <h3
            class="font-sans text-sec-base font-semibold text-2xl self-start mb-2"
        >
            {{ argument.headline }}
        </h3>
        <p class="text-sec-base text-left">{{ argument.text }}</p>
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
