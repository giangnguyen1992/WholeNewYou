<template>
    <section
        class="w-full lg:px-8 md:px-8 sm:px-4 lg:py-24 md:py-12 sm:pb-12 sm:pt-4"
    >
        <div class="flex md:flex-col sm:flex-col items-center justify-center">
            <div class="lg:self-center lg:max-w-xl md:max-w-xl lg:mr-24 mb-8">
                <h1 class="text-sec-base flex flex-col lg:mb-8">
                    <span
                        class="font-heading lg:text-4xl md:text-4xl sm:text-3xl leading-tight lg:mb-8"
                        >{{ heroSectionData.headline }}</span
                    >
                    <span class="md:hidden sm:hidden">{{
                        heroSectionData.intro
                    }}</span>
                </h1>

                <BaseButton button-path="#" class="md:hidden sm:hidden">{{
                    heroSectionData.buttonText
                }}</BaseButton>
            </div>
            <div class="lg:max-w-xl md:max-w-xl">
                <BasePicture
                    :image="{
                        name: 'regina-hero',
                        type: 'jpg',
                        alt: 'Mädchen auf einem Küchentresen'
                    }"
                />
            </div>
            <p class="lg:hidden md:max-w-xl text-sec-base md:mt-12 sm:mt-12">
                {{ heroSectionData.intro }}
            </p>
            <BaseButton button-path="#" class="lg:hidden md:mt-12 sm:mt-12">{{
                heroSectionData.buttonText
            }}</BaseButton>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        heroSectionData() {
            return this.$store.getters.hero;
        }
    }
};
</script>
