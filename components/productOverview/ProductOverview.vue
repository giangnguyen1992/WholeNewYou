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
                    v-html="product"
                ></li>
            </ul>

            <h3
                v-if="productOverview.priceHeadline"
                class="font-sans text-sec-base font-semibold text-2xl mt-8"
            >
                {{ productOverview.priceHeadline }}
            </h3>
            <div
                class="flex md:flex-col sm:flex-col items-center justify-between my-8"
            >
                <div
                    v-if="productOverview.product[0].earlyBirdPrice"
                    class="flex-1 flex flex-col text-sec-base leading-none items-center justify-center lg:border-r-2 md:border-b-2 sm:border-b-2 md:pb-8 sm:pb-8 border-primary-base"
                >
                    <p
                        v-if="productOverview.product[0].name"
                        class="text-xl text-center leading-none mb-4"
                    >
                        {{ productOverview.product[0].name }}
                    </p>
                    <p
                        class="font-heading lg:text-6xl md:text-5xl sm:text-5xl mb-2"
                    >
                        {{ `${productOverview.product[0].earlyBirdPrice} €` }}
                    </p>

                    <p
                        v-if="productOverview.product[0].price"
                        class="text-lg mb-4"
                    >
                        {{ `anstatt ${productOverview.product[0].price}€` }}
                    </p>
                    <a
                        v-if="productOverview.product[0].buttonText"
                        class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12"
                        href="https://sellfy.com/p/ppsoll/"
                        target="_blank"
                        rel="noopener"
                        @click="fbTrackAddToCart"
                    >
                        <span
                            class="flex align-middle justify-center tracking-wider"
                            ><span
                                class="font-sans font-bold text-white text-base"
                            >
                                {{ productOverview.product[0].buttonText }}
                            </span>
                        </span>
                    </a>
                </div>
                <div
                    v-if="productOverview.product[1].earlyBirdPrice"
                    class="flex-1 flex flex-col text-sec-base leading-none items-center justify-center md:pt-8 sm:pt-8"
                >
                    <p
                        v-if="productOverview.product[1].name"
                        class="text-xl text-center leading-none mb-4"
                    >
                        {{ productOverview.product[1].name }}
                    </p>
                    <p
                        class="font-heading lg:text-6xl md:text-5xl sm:text-5xl mb-2"
                    >
                        {{ `${productOverview.product[1].earlyBirdPrice} €` }}
                    </p>

                    <p
                        v-if="productOverview.product[1].price"
                        class="text-lg mb-4"
                    >
                        {{ `danach ${productOverview.product[1].price}€` }}
                    </p>
                    <a
                        v-if="productOverview.product[1].buttonText"
                        class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12"
                        href="https://sellfy.com/blooming-life/p/whole-new-complete-course-jn63qw/"
                        target="_blank"
                        rel="noopener"
                        @click="fbTrackAddToCart"
                    >
                        <span
                            class="flex align-middle justify-center tracking-wider"
                            ><span
                                class="font-sans font-bold text-white text-base"
                            >
                                {{ productOverview.product[1].buttonText }}
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        productOverview: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters('user', ['showCookieBanner']),
        sectionHeadline() {
            return this.productOverview
                ? this.productOverview.headline.toUpperCase()
                : '';
        }
    },
    methods: {
        fbTrackAddToCart() {
            if (
                this.showCookieBanner ||
                typeof this.$fb !== 'object' ||
                typeof this.$fb.track !== 'function'
            ) {
                return;
            }

            this.$fb.track('AddToCart');
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
