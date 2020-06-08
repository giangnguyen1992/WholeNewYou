<template>
    <BaseSection class="bg-sec-light">
        <h2
            v-if="sectionHeadline"
            class="text-center font-heading text-4xl text-white mb-8"
        >
            {{ sectionHeadline }}
        </h2>
        <div v-if="courseOverview.program" class="flex flex-col justify-center">
            <CourseOverviewWeek
                v-for="(weekOverview, index) in courseOverview.program"
                :key="index"
                :program-headline="courseOverview.programHeadline"
                :program="{
                    index,
                    weekOverview,
                    weekHeadline: courseOverview.programHeadline
                }"
            />
        </div>
    </BaseSection>
</template>

<script>
import CourseOverviewWeek from '~/components/CourseOverviewWeek';

export default {
    components: {
        CourseOverviewWeek
    },
    computed: {
        courseOverview() {
            return this.$store.getters.courseOverview;
        },
        sectionHeadline() {
            return this.courseOverview.headline.toUpperCase();
        }
    }
};
</script>
