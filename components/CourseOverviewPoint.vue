<template>
    <div
        class="bg-white flex w-full items-center justify-start rounded-lg lg:py-8 md:py-8 sm:py-4 px-4 my-4 lg:even:ml-32 lg:-pl-32"
    >
        <div
            v-if="weekOverview.index"
            class="text-primary-base text-3xl font-semibold pr-4"
        >
            {{ `0${weekOverview.index}` }}
        </div>
        <div>
            <h4
                v-if="weekOverview.item.headline"
                class="font-sans text-sec-base font-semibold text-lg"
            >
                {{ weekOverview.item.headline }}
            </h4>
            <p
                v-if="weekOverview.item.description"
                class="font-sans text-sec-base"
            >
                {{ weekOverview.item.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weekOverview: {
            type: Object,
            required: true
        }
    }
};
</script>
