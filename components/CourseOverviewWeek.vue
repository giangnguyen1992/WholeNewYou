<template>
    <div class="flex flex-col items-center mb-8">
        <h3
            v-if="weekHeadline"
            class="text-white font-heading font-semibold lg:text-2xl md:text-2xl sm:text-2xl"
        >
            {{ weekHeadline }}
        </h3>
        <div
            v-if="program.weekOverview"
            class="flex flex-col items-center justify-center"
        >
            <CourseOverviewPoint
                v-for="(item, index) in program.weekOverview"
                :key="index"
                :week-overview="{ item, index: index + 1 }"
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
        program: {
            type: Object,
            required: true
        },
        programHeadline: {
            type: Array,
            required: true
        }
    },
    computed: {
        weekHeadline() {
            return `${this.programHeadline[this.program.index].toUpperCase()}`;
        }
    }
};
</script>
