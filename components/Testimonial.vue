<template>
    <li class="flex flex-col items-center justify-center">
        <img
            class="rounded-full sm:w-40 shadow-lg"
            :src="imagePath"
            :alt="testimonial.name"
        />
        <p class="text-sec-base font-serif mt-2">
            {{ testimonial.text }}
        </p>
        <p class="text-sec-light font-heading text-2xl mt-2">
            {{ testimonial.name }}
        </p>
    </li>
</template>

<script>
export default {
    props: {
        testimonial: {
            type: Object,
            required: true
        }
    },
    computed: {
        imagePath() {
            const imageName = this.testimonial.image.toLowerCase();
            return require(`~/assets/images/${imageName}.jpg`);
        }
    }
};
</script>
