<template>
    <BaseSection v-if="testimonials">
        <div class="text-center">
            <BaseSectionHeadline
                v-if="testimonials.headline"
                class="text-sec-base"
            >
                {{ testimonials.headline }}
            </BaseSectionHeadline>
            <splide class="mt-8 w-4/5 mx-auto" :options="slideroptions">
                <Testimonial
                    v-for="testimonial in testimonials.testimonial"
                    :key="testimonial.name"
                    :testimonial="testimonial"
                />
            </splide>
        </div>
    </BaseSection>
</template>

<script>
import Testimonial from '~/components/Testimonial';

export default {
    components: {
        Testimonial
    },
    props: {
        testimonials: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            slideroptions: {
                type: 'loop',
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: false,
                autoplay: true,
                interval: 4000
            }
        };
    }
};
</script>
