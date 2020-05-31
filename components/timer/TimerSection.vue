<template>
    <BaseSection class="flex flex-col items-center">
        <p class="text-sec-base text-center mb-8">
            {{ timerSectionData.text }}
        </p>
        <BaseSectionHeadline class="mb-8">
            {{ timerSectionData.headline }}
        </BaseSectionHeadline>
        <Timer :expired-date="timerSectionData.expiredDate" class="mb-8" />
        <BaseButton>
            {{ timerSectionData.buttonText }}
        </BaseButton>
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
