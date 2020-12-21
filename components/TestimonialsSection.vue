<template>
    <BaseSection v-if="testimonials">
        <div class="text-center">
            <BaseSectionHeadline
                v-if="testimonials.headline"
                class="text-sec-base"
            >
                {{ testimonials.headline }}
            </BaseSectionHeadline>
            <ul class="testimonials mx-auto">
                <Testimonial
                    v-for="testimonial in countedTestimonials"
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
    },
    computed: {
        countedTestimonials() {
            const testimonials = [];
            if (Array.isArray(this.testimonials.testimonial)) {
                for (
                    let index = 0;
                    index < this.testimonials.testimonial.length;
                    index++
                ) {
                    const testimonialObject = {
                        ...this.testimonials.testimonial[index]
                    };

                    testimonialObject.index = index;

                    if (this.testimonials.testimonial[index - 1]) {
                        testimonialObject.prev = index - 1;
                    } else {
                        testimonialObject.prev = this.testimonials.testimonial.length;
                    }

                    if (this.testimonials.testimonial[index + 1]) {
                        testimonialObject.next = index + 1;
                    } else {
                        testimonialObject.next = 0;
                    }

                    testimonials.push(testimonialObject);
                }
            }
            return testimonials;
        }
    }
};
</script>

<style>
.testimonials > .testimonial:target ~ .testimonial:last-child,
.testimonials > .testimonial {
    display: none;
}

.testimonials > :last-child,
.testimonials > .testimonial:target {
    display: flex;
}
</style>
