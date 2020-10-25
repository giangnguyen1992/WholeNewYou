<template>
    <BaseSection class="text-center">
        <BaseSectionHeadline>
            <slot>{{ description }}</slot>
        </BaseSectionHeadline>
        <p class="text-5xl">{{ sectionIndex }}</p>
    </BaseSection>
</template>

<script>
export default {
    props: {
        description: {
            type: String,
            required: true
        },
        sectionIndex: {
            type: String,
            required: true
        }
    }
};
</script>
