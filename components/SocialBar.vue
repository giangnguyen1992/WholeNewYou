<template>
    <ul class="flex justify-center align-middle">
        <SocialServices
            v-for="social in socials"
            :key="social.name"
            :social="social"
        ></SocialServices>
    </ul>
</template>

<script>
import SocialServices from './SocialServices';

export default {
    components: {
        SocialServices
    },
    props: {
        socials: {
            type: Array,
            required: true
        }
    }
};
</script>
