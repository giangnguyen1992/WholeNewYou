<template>
    <BaseSection v-if="empathy" class="bg-sec2-light">
        <div class="mx-auto">
            <BaseSectionHeadline class="text-center text-sec-base"
                >{{ empathy.headline }}
            </BaseSectionHeadline>
            <ul v-if="empathy.text" class="mt-8">
                <li
                    v-for="(row, index) in empathy.text"
                    :key="index"
                    class="text-sec-base mt-4"
                >
                    {{ row }}
                </li>
            </ul>
            <p
                class=" mx-auto w-4/5 text-center font-semibold text-sec-base mt-8 bg-white p-4 shadow-lg rounded-lg"
            >
                {{ empathy.lastline }}
            </p>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        empathy: {
            type: Object,
            required: true
        }
    }
};
</script>
