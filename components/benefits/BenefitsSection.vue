<template>
    <BaseSection>
        <div class="text-center">
            <BaseSectionHeadline class="mb-8">
                {{ benefitsSectionData.headline }}
            </BaseSectionHeadline>
            <div
                class="flex md:flex-col sm:flex-col align-middle justify-center"
            >
                <BenefitsArgument
                    v-for="argument in benefitsSectionData.arguments"
                    :key="argument.headline"
                    :argument="argument"
                >
                </BenefitsArgument>
            </div>
            <BaseButton button-path="#" class="lg:mt-8">
                {{ benefitsSectionData.buttonText }}
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
        benefitsSectionData() {
            return this.$store.getters.benefits;
        }
    }
};
</script>
