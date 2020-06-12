<template>
    <BaseSection v-if="productOverview">
        <div
            id="productBox"
            class="flex flex-col items-center border-solid border-primary-base border rounded-lg lg:p-8 md:p-8 sm:p-4 text-sec-base lg:scale"
        >
            <BaseSectionHeadline v-if="sectionHeadline" class="mb-8">
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <figure v-if="productOverview.image" class="w-full mb-8">
                <BasePicture :image="productOverview.image" />
            </figure>
            <ul
                v-if="productOverview.includes"
                class="border-b border-solid border-primary-base pb-8 mb-8"
            >
                <li
                    v-for="(product, index) in productOverview.includes"
                    :key="index"
                    class="productList mb-2 last:mb-0"
                >
                    {{ product }}
                </li>
            </ul>
            <p
                v-if="productOverview.priceHeadline"
                class="text-xl leading-none"
            >
                {{ productOverview.priceHeadline }}
            </p>
            <div
                v-if="productOverview.earlyBirdPrice"
                class="flex flex-col text-sec-base leading-none items-center justify-center lg:my-8 md:my-8 sm:my-8"
            >
                <p
                    class="font-heading lg:text-6xl md:text-5xl sm:text-5xl mb-2"
                >
                    {{ `${productOverview.earlyBirdPrice} €` }}
                </p>

                <p v-if="productOverview.price" class="text-lg">
                    {{ `danach ${productOverview.price}€` }}
                </p>
            </div>
            <a
                v-if="productOverview.productUrl"
                :href="productOverview.productUrl"
                target="_blank"
                rel="noopener"
                class="inline-block bg-primary-base rounded-md shadow-button hover:shadow-hoverButton py-3 px-12"
                role="button"
            >
                <span class="flex align-middle justify-center tracking-wider"
                    ><span class="font-sans font-bold text-white text-base">
                        {{ productOverview.buttonText }}
                    </span>
                </span>
            </a>
        </div>
    </BaseSection>
</template>

<script>
export default {
    computed: {
        productOverview() {
            return this.$store.getters.productOverview;
        },
        sectionHeadline() {
            return this.productOverview
                ? this.productOverview.headline.toUpperCase()
                : '';
        }
    }
};
</script>

<style scoped>
.productList::before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    background-size: 12px 12px;
    background-image: url('~assets/images/icons/correct.svg');
    background-repeat: no-repeat;
    padding-right: 20px;
}

.scale:hover {
    transform: scale(1.01);
    border-width: 2px;
}

.scale {
    transition: all 0.3s;
    transform-origin: 50% 50%;
    backface-visibility: hidden;
}
</style>
