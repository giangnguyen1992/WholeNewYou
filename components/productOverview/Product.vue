<template>
    <div
        v-if="product.earlyBirdPrice"
        class="flex-1 flex flex-col text-sec-base leading-none items-center justify-center md:odd:pb-8 sm:odd:pb-8 md:even:pt-8 sm:even:pt-8"
    >
        <p v-if="product.name" class="text-xl text-center leading-none mb-4">
            {{ product.name }}
        </p>
        <p class="font-heading lg:text-6xl md:text-5xl sm:text-5xl mb-2">
            {{ `${product.earlyBirdPrice} €` }}
        </p>

        <p v-if="product.price" class="text-lg mb-4">
            {{ `danach ${product.price}€` }}
        </p>
        <a
            v-if="product.buttonText"
            class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12"
            href="https://sellfy.com/p/ppsoll/"
            target="_blank"
            rel="noopener"
            @click="fbTrackAddToCart"
        >
            <span class="flex align-middle justify-center tracking-wider"
                ><span class="font-sans font-bold text-white text-base">
                    {{ product.buttonText }}
                </span>
            </span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
};
</script>
