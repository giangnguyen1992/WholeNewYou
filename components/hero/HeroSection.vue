<template>
    <BaseSection class="bg-sec2-light flex align-middle justify-between">
        <div class="self-center">
            <h1 class="text-sec-base flex flex-col mb-8">
                <span class="font-heading text-5xl leading-tight mb-8">{{
                    heroSectionData.headline
                }}</span>
                <span>{{ heroSectionData.intro }}</span>
            </h1>

            <BaseButton button-path="#">{{
                heroSectionData.buttonText
            }}</BaseButton>
        </div>
        <div>
            <img
                src="~/assets/images/hero-img.svg"
                alt="Mädchen auf einem Küchentresen"
            />
        </div>
    </BaseSection>
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
