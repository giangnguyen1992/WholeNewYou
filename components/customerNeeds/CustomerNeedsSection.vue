<template>
    <BaseSection class="bg-grey-light">
        <BaseSectionHeadline class="mb-8 text-center">
            {{ customerNeedsData.headline }}
        </BaseSectionHeadline>
        <div class="flex md:flex-col sm:flex-col items-center justify-between">
            <CustomerNeedsArgument
                v-for="(argument, index) in customerNeedsData.arguments"
                :key="index"
                :argument="{ key: index + 1, text: argument }"
            />
        </div>
    </BaseSection>
</template>

<script>
import CustomerNeedsArgument from '~/components/CustomerNeedsArgument';

export default {
    components: {
        CustomerNeedsArgument
    },
    computed: {
        customerNeedsData() {
            return this.$store.getters.customerNeeds;
        }
    }
};
</script>
