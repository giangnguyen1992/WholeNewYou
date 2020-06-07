<template>
    <BaseSection class="bg-grey-light">
        <div
            class="flex md:flex-col sm:flex-col lg:items-end md:items-center sm:items-center justify-center"
        >
            <BaseSectionHeadline class="lg:hidden mb-8">
                {{ sectionHeadline }}
            </BaseSectionHeadline>
            <div
                class="flex flex-col lg:w-1/3 flex-shrink-0 md:mb-8 sm:mb-8 mx-4"
            >
                <figure class="rounded-image shadow-picture min-h-62">
                    <BasePicture
                        :image="{
                            name: 'aboutme',
                            type: 'JPG',
                            alt: 'Regina Kirchmeier',
                            lazyload: true
                        }"
                    />
                </figure>
                <SocialBar
                    class="md:hidden sm:hidden mt-6"
                    :services="services"
                />
            </div>
            <div class="lg:ml-12 ">
                <BaseSectionHeadline class="md:hidden sm:hidden mb-8">
                    {{ sectionHeadline }}
                </BaseSectionHeadline>
                <h4 class="font-sans text-sec-base font-semibold text-lg mb-8">
                    {{ about.intro }}
                </h4>
                <p class="text-sec-base mb-8">{{ about.text }}</p>
                <p
                    class="text-sec-base font-serif lg:text-2xl md:text-2xl sm:text-xl quote"
                >
                    {{ about.quote }}
                </p>
                <SocialBar class="lg:hidden mt-8" :services="services" />
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
    computed: {
        about() {
            return this.$store.getters.about;
        },
        sectionHeadline() {
            return this.about.headline.toUpperCase();
        },
        footer() {
            return this.$store.getters.footer;
        },
        services() {
            return this.footer.socials ? this.footer.socials : [];
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
