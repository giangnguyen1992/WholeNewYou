<template>
    <BaseSection class="bg-grey-light">
        <div class="flex flex-col items-center">
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="lg:mb-8 md:mb-4 sm:mb-4 text-sec-base"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <p
                v-if="newsletter.text"
                class="text-sec-base text-center max-w-2xl mb-8"
            >
                {{ newsletter.text }}
            </p>
            <a
                v-if="newsletter.buttonText"
                :href="newsletter.signupUrl"
                target="_blank"
                rel="noopener"
                class="inline-block bg-primary-base rounded-lg shadow-button hover:shadow-hoverButton py-3 px-12"
                role="button"
            >
                <span class="flex align-middle justify-center tracking-wider"
                    ><span class="font-sans font-bold text-white text-base">
                        {{ newsletter.buttonText }}
                    </span>
                </span>
            </a>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        newsletter: {
            type: Object,
            required: true
        }
    },
    computed: {
        sectionHeadline() {
            return this.newsletter
                ? this.newsletter.headline.toUpperCase()
                : '';
        }
    }
};
</script>
