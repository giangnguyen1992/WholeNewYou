<template>
    <BaseSection v-if="about" class="bg-sec2-light">
        <div class="flex md:flex-col sm:flex-col items-center justify-center">
            <BaseSectionHeadline
                v-if="sectionHeadline"
                class="lg:hidden mb-8 text-sec-base"
            >
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <div
                class="flex flex-col lg:w-1/3 md:w-full sm:w-full flex-shrink-0 md:mb-8 sm:mb-8 mx-4"
            >
                <div class="w-full sm:px-4">
                    <figure
                        v-if="about.image"
                        class="rounded-image shadow-picture"
                    >
                        <BasePicture :image="about.image" />
                    </figure>
                </div>
                <SocialBar
                    v-if="socials"
                    class="md:hidden sm:hidden mt-6"
                    :socials="socials"
                />
            </div>
            <div class="lg:ml-12 ">
                <BaseSectionHeadline
                    v-if="sectionHeadline"
                    class="md:hidden sm:hidden mb-8 text-sec-base"
                >
                    {{ sectionHeadline }}
                </BaseSectionHeadline>
                <h4
                    v-if="about.intro"
                    class="font-sans text-sec-base font-semibold text-lg mb-8"
                >
                    {{ about.intro }}
                </h4>
                <p v-if="about.text" class="text-sec-base mb-8">
                    {{ about.text }}
                </p>
                <p
                    v-if="about.quote"
                    class="text-sec-base font-serif lg:text-2xl md:text-2xl sm:text-xl quote"
                >
                    {{ about.quote }}
                </p>
                <SocialBar
                    v-if="socials"
                    class="lg:hidden mt-8"
                    :socials="socials"
                />
            </div>
        </div>
    </BaseSection>
</template>

<script>
import SocialBar from '~/components/SocialBar';

export default {
    components: {
        SocialBar
    },
    props: {
        about: {
            type: Object,
            required: true
        },
        socials: {
            type: Array,
            required: true
        }
    },
    computed: {
        sectionHeadline() {
            return this.about ? this.about.headline.toUpperCase() : '';
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
