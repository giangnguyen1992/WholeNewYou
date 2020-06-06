<template>
    <div class="flex flex-col items-center mb-8">
        <h3
            class="text-white font-heading font-semibold lg:text-2xl md:text-2xl sm:text-2xl"
        >
            {{ `Woche ${week + 1}: ${programHeadline[week].toUpperCase()}` }}
        </h3>
        <div class="flex flex-col items-center justify-center">
            <CourseOverviewPoint
                v-for="(item, index) in weekOverview"
                :key="index"
                :week-point-item="item"
                :week-point="index + 1"
            >
            </CourseOverviewPoint>
        </div>
    </div>
</template>

<script>
import CourseOverviewPoint from '~/components/CourseOverviewPoint';

export default {
    components: {
        CourseOverviewPoint
    },
    props: {
        weekOverview: {
            type: Array,
            required: true
        },
        week: {
            type: Number,
            required: true
        },
        programHeadline: {
            type: Array,
            required: true
        }
    }
};
</script>
