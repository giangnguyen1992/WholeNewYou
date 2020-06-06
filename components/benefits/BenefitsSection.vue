<template>
    <BaseSection>
        <div class="text-center">
            <BaseSectionHeadline class="mb-8">
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <div
                class="flex md:flex-col sm:flex-col align-middle justify-center"
            >
                <BenefitsArgument
                    v-for="argument in benefits.arguments"
                    :key="argument.headline"
                    :argument="argument"
                >
                </BenefitsArgument>
            </div>
            <BaseButton class="lg:mt-8">
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
            return this.benefits.headline.toUpperCase();
        }
    }
};
</script>
