<template>
    <div
        class="bg-white flex w-3/4 items-center justify-center rounded-lg p-4 my-4 even:ml-32"
    >
        <div class="text-primary-base text-3xl font-semibold pr-4">
            {{ `0${weekPoint}` }}
        </div>
        <div>
            <h4 class="font-sans text-sec-base font-semibold text-lg">
                {{ weekPointKey }}
            </h4>
            <p class="font-sans text-sec-base">{{ weekPointItem }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weekPointItem: {
            type: String,
            required: true
        },
        weekPointKey: {
            type: String,
            required: true
        },
        weekPoint: {
            type: Number,
            required: true
        }
    }
};
</script>
