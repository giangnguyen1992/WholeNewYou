<template>
    <li
        :id="testimonial.index"
        class="testimonial pt-12 flex items-center justify-center"
    >
        <a
            class="block lg:w-16 md:w-12 sm:w-10 flex-shrink-0 mr-2"
            :href="`#${testimonial.prev}`"
        >
            <img src="~/assets/images/left-arrow.svg" alt="Linker Pfeil" />
        </a>
        <div class="flex flex-col items-center justify-center">
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
        </div>
        <a
            :href="`#${testimonial.next}`"
            class="block lg:w-16 md:w-12 sm:w-10 flex-shrink-0 ml-2"
        >
            <img src="~/assets/images/right-arrow.svg" alt="Rechter Pfeil" />
        </a>
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
