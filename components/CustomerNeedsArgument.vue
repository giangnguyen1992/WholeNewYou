<template>
    <div class="flex flex-1 lg:mr-6 last:mr-0 md:mb-8 sm:mb-8 ">
        <div
            class="text-primary-base lg:text-5xl md:text-4xl sm:text-4xl font-semibold leading-none pr-6"
        >
            {{ `0${argument.key}` }}
        </div>
        <p class="font-sans text-sec-base">{{ argument.text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        argument: {
            type: Object,
            required: true
        }
    }
};
</script>
