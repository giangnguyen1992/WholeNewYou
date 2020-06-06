<template>
    <BaseSection>
        <div class="flex flex-col items-center">
            <p class="text-sec-base text-center max-w-2xl mb-8">
                {{ timer.text }}
            </p>
            <BaseSectionHeadline class="lg:mb-8 md:mb-4 sm:mb-4">
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <Timer :expired-date="timer.expiredDate" class="mb-8" />
            <BaseButton>
                {{ timer.buttonText }}
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
        timer() {
            return this.$store.getters.timer;
        },
        sectionHeadline() {
            return this.timer.headline.toUpperCase();
        }
    }
};
</script>
