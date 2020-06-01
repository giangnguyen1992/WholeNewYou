<template>
    <section class="bg-sec2-light w-full pl-16">
        <div class="flex align-middle justify-between">
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
            <div class="max-w-3xl flex-shrink-0">
                <img
                    src="~/assets/images/hero-img.svg"
                    alt="Mädchen auf einem Küchentresen"
                />
            </div>
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
