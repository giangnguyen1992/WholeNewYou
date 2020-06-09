<template>
    <BaseSection v-if="timer">
        <div class="flex flex-col items-center">
            <p
                v-if="timer.text"
                class="text-sec-base text-center max-w-2xl mb-8"
            >
                {{ timer.text }}
            </p>
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="lg:mb-8 md:mb-4 sm:mb-4"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <Timer
                v-if="timerExpiredDate"
                :expired-date="timerExpiredDate"
                class="mb-8"
            />
            <BaseButton v-if="timer.buttonText">
                {{ timer.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    components: {
        Timer: () => import('~/components/Timer')
    },
    computed: {
        timer() {
            return this.$store.getters.timer;
        },
        timerExpiredDate() {
            return this.$store.getters.timerExpiredDate;
        },
        sectionHeadline() {
            return this.timer ? this.timer.headline.toUpperCase() : '';
        }
    }
};
</script>
