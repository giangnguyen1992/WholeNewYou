<template>
    <a
        class="inline-block bg-primary-base rounded-md shadow-button hover:shadow-hoverButton py-3 px-12"
        :href="buttonPath"
    >
        <span class="flex align-middle justify-center tracking-wider"
            ><span class="font-sans font-bold text-white text-base"
                ><slot></slot
            ></span>
        </span>
    </a>
</template>

<script>
export default {
    props: {
        buttonPath: {
            type: String,
            required: true
        }
    },
    computed: {
        text() {
            return this.buttonText.toUpperCase();
        }
    }
};
</script>
