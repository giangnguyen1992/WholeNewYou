<template>
    <BaseSection v-if="benefits">
        <div class="text-center">
            <BaseSectionHeadline v-if="sectionHeadline" class="mb-8">
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <div
                v-if="benefits.arguments"
                class="flex md:flex-col sm:flex-col align-middle justify-center"
            >
                <BenefitsArgument
                    v-for="argument in benefits.arguments"
                    :key="argument.headline"
                    :argument="argument"
                >
                </BenefitsArgument>
            </div>
            <BaseButton v-if="benefits.buttonText" class="lg:mt-8">
                {{ benefits.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
import BenefitsArgument from '~/components/BenefitsArgument';

export default {
    components: {
        BenefitsArgument
    },
    computed: {
        benefits() {
            return this.$store.getters.benefits;
        },
        sectionHeadline() {
            return this.benefits ? this.benefits.headline.toUpperCase() : '';
        }
    }
};
</script>
