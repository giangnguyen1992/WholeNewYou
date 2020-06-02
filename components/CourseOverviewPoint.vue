<template>
    <div
        class="bg-white flex w-full items-center justify-start rounded-lg lg:py-8 md:py-8 sm:py-4 px-4 my-4 lg:even:ml-32 lg:-pl-32"
    >
        <div class="text-primary-base text-3xl font-semibold pr-4">
            {{ `0${weekPoint}` }}
        </div>
        <div>
            <h4 class="font-sans text-sec-base font-semibold text-lg">
                {{ weekPointItem.headline }}
            </h4>
            <p class="font-sans text-sec-base">
                {{ weekPointItem.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weekPointItem: {
            type: Object,
            required: true
        },
        weekPoint: {
            type: Number,
            required: true
        }
    }
};
</script>
