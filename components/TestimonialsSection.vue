<template>
    <BaseSection v-if="testimonials">
        <div class="text-center">
            <BaseSectionHeadline
                v-if="testimonials.headline"
                class="text-sec-base"
            >
                {{ testimonials.headline }}
            </BaseSectionHeadline>
            <ul class="mt-8 w-4/5 mx-auto space-y-10">
                <Testimonial
                    v-for="testimonial in testimonials.testimonial"
                    :key="testimonial.name"
                    :testimonial="testimonial"
                />
            </ul>
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
    }
};
</script>
