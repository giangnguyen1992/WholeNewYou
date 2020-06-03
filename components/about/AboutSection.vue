<template>
    <BaseSection class="bg-grey-light">
        <div
            class="flex md:flex-col sm:flex-col lg:items-start md:items-center sm:items-center justify-center"
        >
            <BaseSectionHeadline class="lg:hidden mb-8">
                {{ aboutSectionData.headline }}
            </BaseSectionHeadline>
            <div class="lg:w-1/3 flex-shrink-0 lg:mr-12 md:mb-8 sm:mb-8">
                <BasePicture
                    :image="{
                        name: 'aboutme',
                        type: 'JPG',
                        alt: 'Regina Kirchmeier'
                    }"
                />
            </div>
            <div>
                <BaseSectionHeadline class="md:hidden sm:hidden mb-8">
                    {{ aboutSectionData.headline }}
                </BaseSectionHeadline>
                <p class="text-sec-base mb-8">{{ aboutSectionData.text }}</p>
                <p
                    class="text-sec-base font-serif lg:text-2xl md:text-2xl sm:text-xl quote"
                >
                    {{ aboutSectionData.quote }}
                </p>
            </div>
        </div>
    </BaseSection>
</template>

<script>
export default {
    computed: {
        aboutSectionData() {
            return this.$store.getters.about;
        }
    }
};
</script>

<style scoped>
.quote::before {
    content: '"';
    color: #ffab9f;
    font-size: 1.875rem;
    line-height: 1;
}

.quote::after {
    content: '"';
    color: #ffab9f;
    font-size: 1.875rem;
    line-height: 1;
}
</style>
