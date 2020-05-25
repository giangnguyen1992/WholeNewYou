<template>
    <div class="flex w-1/4">
        <div class="text-primary-base text-5xl font-semibold leading-none pr-6">
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
