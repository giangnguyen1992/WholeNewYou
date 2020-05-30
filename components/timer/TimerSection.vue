<template>
    <BaseSection>
        <p class="text-sec-base text-center mb-8">
            {{ timerSectionData.text }}
        </p>
        <BaseSectionHeadline>
            {{ timerSectionData.headline }}
        </BaseSectionHeadline>
        <Timer :expired-date="timerSectionData.expiredDate" />
    </BaseSection>
</template>

<script>
import Timer from '~/components/Timer';

export default {
    components: {
        Timer
    },
    computed: {
        timerSectionData() {
            return this.$store.getters.timer;
        }
    }
};
</script>
