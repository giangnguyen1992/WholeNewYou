<template>
    <ul class="flex justify-center align-middle">
        <SocialServices
            v-for="service in services"
            :key="service.name"
            :service="service"
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
        services: {
            type: Array,
            required: true
        }
    }
};
</script>
