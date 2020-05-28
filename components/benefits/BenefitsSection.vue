<template>
    <BaseSection class="bg-sec2-light text-center">
        <BaseSectionHeadline class="mb-8">
            {{ benefitsSectionData.headline }}
        </BaseSectionHeadline>
        <div class="flex align-middle justify-center">
            <BenefitsArgument
                v-for="argument in benefitsSectionData.arguments"
                :key="argument.headline"
                :argument="argument"
            >
            </BenefitsArgument>
        </div>
        <BaseButton button-path="#" class="mt-8">
            {{ benefitsSectionData.buttonText }}
        </BaseButton>
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
