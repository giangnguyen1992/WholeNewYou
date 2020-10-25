<template>
    <BaseSection v-if="preview">
        <div class="flex flex-col">
            <BaseSectionHeadline class="text-center text-sec-base"
                >{{ preview.headline }}
            </BaseSectionHeadline>
            <BasePicture class="mt-8" :image="preview.image" />
            <BaseButton v-if="preview.buttonText" class="self-center mt-8">
                {{ preview.buttonText }}
            </BaseButton>
        </div>
    </BaseSection>
</template>

<script>
export default {
    props: {
        preview: {
            type: Object,
            required: true
        }
    }
};
</script>
