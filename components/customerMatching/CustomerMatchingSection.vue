<template>
    <div class="p-32">
        <BaseSectionHeadline class="mb-8">
            {{ customerMatchingData.headline }}
        </BaseSectionHeadline>
        <div class="flex align-middle justify-between">
            <MatchingPoint
                v-for="(argument, index) in customerMatchingData.arguments"
                :key="index"
                :argument="{ key: index + 1, text: argument }"
                class="px-4"
            />
        </div>
    </div>
</template>

<script>
import MatchingPoint from './MatchingPoint';

export default {
    components: {
        MatchingPoint
    },
    computed: {
        customerMatchingData() {
            return this.$store.getters.customerMatching;
        }
    }
};
</script>
