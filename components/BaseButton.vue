<template>
    <button
        class="inline-block bg-primary-base rounded-md shadow-button lg:hover:shadow-hoverButton py-3 px-12"
        @click="scrollToProdcutBox"
    >
        <span class="flex align-middle justify-center tracking-wider"
            ><span class="font-sans font-bold text-white text-base"
                ><slot></slot
            ></span>
        </span>
    </button>
</template>

<script>
export default {
    methods: {
        scrollToProdcutBox() {
            const productBox = document.getElementById('productBox');
            if (productBox) {
                productBox.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};
</script>
