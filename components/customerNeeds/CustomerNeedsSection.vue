<template>
    <BaseSection>
        <BaseSectionHeadline class="mb-8">
            {{ customerNeedsData.headline }}
        </BaseSectionHeadline>
        <div class="flex align-middle justify-between">
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
