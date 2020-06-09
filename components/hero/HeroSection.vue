<template>
    <section
        v-if="hero"
        class="w-full lg:px-8 md:px-8 sm:px-4 lg:py-24 md:py-12 sm:pb-12 sm:pt-12"
    >
        <div class="flex md:flex-col sm:flex-col items-center justify-center">
            <div class="lg:self-center lg:max-w-xl md:max-w-xl lg:mr-24 mb-8">
                <h1
                    v-if="sectionHeadline || hero.intro"
                    class="text-sec-base flex flex-col lg:mb-8"
                >
                    <span
                        v-if="sectionHeadline"
                        class="font-heading lg:text-4xl md:text-4xl sm:text-3xl leading-tight"
                        >{{ sectionHeadline }}</span
                    >
                    <span
                        v-if="hero.intro"
                        class="md:hidden sm:hidden lg:mt-8"
                        >{{ hero.intro }}</span
                    >
                </h1>

                <BaseButton
                    v-if="hero.buttonText"
                    class="md:hidden sm:hidden"
                    >{{ hero.buttonText }}</BaseButton
                >
            </div>
            <figure
                v-if="hero.image"
                class="lg:max-w-lg md:max-w-lg rounded-image shadow-picture mx-4 min-h-62"
            >
                <BasePicture :image="hero.image" />
            </figure>
            <p
                v-if="hero.intro"
                class="lg:hidden md:max-w-xl text-sec-base md:mt-12 sm:mt-12"
            >
                {{ hero.intro }}
            </p>
            <BaseButton
                v-if="hero.buttonText"
                class="lg:hidden md:mt-12 sm:mt-12"
                >{{ hero.buttonText }}</BaseButton
            >
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        hero() {
            return this.$store.getters.hero;
        },
        sectionHeadline() {
            return this.hero ? this.hero.headline.toUpperCase() : '';
        }
    }
};
</script>
