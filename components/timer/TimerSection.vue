<template>
    <BaseSection v-if="timer">
        <div class="flex flex-col items-center">
            <p
                v-if="timer.text"
                class="text-sec-base text-center max-w-2xl mb-8"
                v-html="timer.text"
            ></p>
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="lg:mb-8 md:mb-4 sm:mb-4 text-sec-base"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <!-- <Timer
                v-if="timerExpiredDate"
                :expired-date="timerExpiredDate"
                class="mb-8"
            /> -->
            <BaseButton v-if="timer.buttonText">
                {{ timer.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    components: {
        // Timer: () => import('~/components/Timer')
    },
    props: {
        timer: {
            type: Object,
            required: true
        }
    },
    computed: {
        timerExpiredDate() {
            return this.timer.timerExpiredDate;
        },
        sectionHeadline() {
            return this.timer ? this.timer.headline.toUpperCase() : '';
        }
    }
};
</script>
