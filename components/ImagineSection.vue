<template>
    <BaseSection v-if="imagine" class="bg-sec-base">
        <div class="text-center">
            <ul v-if="imagine.text" class="text-white space-y-4">
                <li v-for="(row, index) in imagine.text" :key="index">
                    {{ row }}
                </li>
            </ul>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        imagine: {
            type: Object,
            required: true
        }
    }
};
</script>
