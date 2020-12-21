<template>
    <BaseSection v-if="faqs">
        <div class="text-center">
            <BaseSectionHeadline v-if="faqs.headline" class="text-sec-base">
                {{ faqs.headline }}
            </BaseSectionHeadline>
            <div
                class="flex flex-col justify-center text-left font-sans text-sec-base text-base mt-8 space-y-6 sm:space-y-4"
            >
                <details
                    v-for="(faq, index) in faqs.faq"
                    :key="index"
                    class="border-b border-primary-base p-2"
                    :open="index == 0"
                >
                    <summary
                        class="font-sans text-sec-base font-semibold text-lg"
                        >{{ faq.headline }}</summary
                    >
                    <p class="p-4" v-html="faq.text"></p>
                </details>
            </div>
            <BaseButton v-if="faqs.buttonText" class="mt-8">
                {{ faqs.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        faqs: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
@keyframes open {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

details[open] summary ~ * {
    animation: open 0.3s ease-in-out;
}
</style>
