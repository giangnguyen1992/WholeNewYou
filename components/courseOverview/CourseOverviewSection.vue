<template>
    <BaseSection v-if="courseOverview" class="bg-sec-light overflow-x-hidden">
        <BaseSectionHeadline
            v-if="sectionHeadline"
            class="text-center text-white mb-8"
        >
            {{ sectionHeadline }}
        </BaseSectionHeadline>
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
    props: {
        courseOverview: {
            type: Object,
            required: true
        }
    },
    computed: {
        sectionHeadline() {
            return this.courseOverview
                ? this.courseOverview.headline.toUpperCase()
                : '';
        }
    }
};
</script>
