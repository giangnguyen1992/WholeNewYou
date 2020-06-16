<template>
    <BaseSection v-if="customerNeeds" class="bg-grey-light">
        <BaseSectionHeadline v-if="sectionHeadline" class="text-center">
            {{ sectionHeadline }}
        </BaseSectionHeadline>
        <div
            v-if="customerNeeds.arguments && customerNeeds.arguments.length > 0"
            class="flex md:flex-col sm:flex-col items-center justify-between mt-8"
        >
            <CustomerNeedsArgument
                v-for="(argument, index) in customerNeeds.arguments"
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
        customerNeeds() {
            return this.$store.state.landingpage.data.customerNeeds;
        },
        sectionHeadline() {
            return this.customerNeeds
                ? this.customerNeeds.headline.toUpperCase()
                : '';
        }
    }
};
</script>
