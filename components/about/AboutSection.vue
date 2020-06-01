<template>
    <BaseSection>
        <div class="flex items-start justify-center">
            <div class="w-1/3 flex-shrink-0 mr-12">
                <img
                    src="~/assets/images/aboutme.JPG"
                    alt="Regina Kirchmeier"
                />
            </div>
            <div>
                <BaseSectionHeadline class="mb-8">
                    {{ aboutSectionData.headline }}
                </BaseSectionHeadline>
                <p class="text-sec-base mb-8">{{ aboutSectionData.text }}</p>
                <p class="text-sec-base text-2xl">
                    <span class="text-primary-base text-3xl leading-none"
                        >"</span
                    >
                    {{ aboutSectionData.quote }}
                    <span class="text-primary-base text-3xl leading-none"
                        >"</span
                    >
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
