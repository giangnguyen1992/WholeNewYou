<template>
    <div>
        <BaseSection v-if="customerNeeds" class="relative bg-sec2-light">
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="text-center text-sec-base"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <div v-if="customerNeeds.text" class="flex flex-col mt-8 sm:pb-24">
                <ul class="flex flex-col mb-8 space-y-8">
                    <li
                        v-for="(row, index) in customerNeeds.text"
                        :key="index"
                        class="flex flex-1 items-center"
                    >
                        <span
                            class="text-primary-base lg:text-5xl md:text-4xl sm:text-4xl font-semibold leading-none pr-6"
                            >{{ `0${index + 1}` }}</span
                        >
                        <p class="text-sec-base" v-html="row"></p>
                    </li>
                </ul>
            </div>
            <div
                class="bg-white absolute w-4/5 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center p-4 shadow-lg rounded-lg"
            >
                <h3
                    class="text-sec-base font-heading font-semibold lg:text-2xl md:text-2xl sm:text-2xl"
                >
                    {{ experienced.headline }}
                </h3>
                <p class="text-sec-base" v-html="experienced.text[0]"></p>
            </div>
        </BaseSection>
        <BaseSection class="bg-primary-light">
            <BaseSectionHeadline
                class="text-center text-sec-base lg:pt-8 md:pt-16 sm:pt-32"
            >
                {{ afterlife.headline }}
            </BaseSectionHeadline>
            <ul class="flex flex-col items-left mt-8 space-y-8">
                <li
                    v-for="(row, index) in afterlife.text"
                    :key="index"
                    class="checkmarks flex flex-1 items-center"
                >
                    <p class="text-sec-base" v-html="row"></p>
                </li>
            </ul>
        </BaseSection>
    </div>
</template>

<script>
export default {
    props: {
        customerNeeds: {
            type: Object,
            required: true
        },
        experienced: {
            type: Object,
            required: true
        },
        afterlife: {
            type: Object,
            required: true
        }
    },
    computed: {
        sectionHeadline() {
            return this.customerNeeds
                ? this.customerNeeds.headline.toUpperCase()
                : '';
        }
    }
};
</script>

<style scoped>
.checkmarks::before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 20px 20px;
    background-image: url('~assets/images/icons/checkmark.svg');
    background-repeat: no-repeat;
    padding-right: 30px;
}
</style>
