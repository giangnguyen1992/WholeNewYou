<template>
    <section
        v-if="hero"
        class="lg:px-8 md:px-8 sm:px-8 lg:py-24 md:py-12 sm:pb-12 sm:pt-12"
    >
        <div
            class="mx-auto max-w-5xl flex md:flex-col sm:flex-col items-center justify-center"
        >
            <div class="self-center lg:max-w-6xl md:max-w-xl lg:mr-24 mb-8">
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
            <div class="w-full md:px-16 sm:px-4">
                <figure v-if="hero.image" class="rounded-image shadow-picture">
                    <BasePicture :image="hero.image" />
                </figure>
            </div>
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
    props: {
        hero: {
            type: Object,
            required: true
        }
    },
    computed: {
        sectionHeadline() {
            return this.hero ? this.hero.headline.toUpperCase() : '';
        }
    }
};
</script>
