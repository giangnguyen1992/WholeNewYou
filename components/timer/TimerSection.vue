<template>
    <BaseSection>
        <div class="flex flex-col items-center">
            <p class="text-sec-base text-center max-w-2xl mb-8">
                {{ timerSectionData.text }}
            </p>
            <BaseSectionHeadline class="lg:mb-8 md:mb-4 sm:mb-4">
                {{ timerSectionData.headline }}
            </BaseSectionHeadline>
            <Timer :expired-date="timerSectionData.expiredDate" class="mb-8" />
            <BaseButton>
                {{ timerSectionData.buttonText }}
            </BaseButton>
        </div>
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
