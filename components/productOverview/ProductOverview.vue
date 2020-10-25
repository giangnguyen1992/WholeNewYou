<template>
    <BaseSection v-if="productOverview" id="productBox">
        <div
            class="flex flex-col items-center border-solid border-primary-base border-4 shadow-lg rounded-lg lg:p-8 md:p-8 sm:p-4 text-sec-base lg:scale"
        >
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="mb-8 text-sec-base"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <figure v-if="productOverview.image" class="w-full mb-8">
                <BasePicture :image="productOverview.image" />
            </figure>
            <ul v-if="productOverview.includes">
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
                class="text-xl leading-none mt-8"
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
            <BaseButton v-if="productOverview.buttonText">
                {{ productOverview.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        productOverview: {
            type: Object,
            required: true
        }
    },
    computed: {
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
