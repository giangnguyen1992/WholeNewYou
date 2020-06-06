<template>
    <BaseSection class="bg-sec-light">
        <h2 class="text-center font-heading text-4xl text-white mb-8">
            {{ sectionHeadline }}
        </h2>
        <div class="flex flex-col justify-center">
            <CourseOverviewWeek
                v-for="(courseWeek, index) in courseOverview.program"
                :key="index"
                :week-overview="courseWeek"
                :week="index"
                :program-headline="courseOverview.programHeadline"
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
