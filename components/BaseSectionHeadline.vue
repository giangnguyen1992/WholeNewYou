<template>
    <div class="flex align-middle justify-center">
        <h2 class="font-heading text-sec-base text-4xl">{{ headlineText }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        headlineText() {
            return this.text.toUpperCase();
        }
    }
};
</script>
