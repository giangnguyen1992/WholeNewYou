<template>
    <button
        class="inline-block border border-primary-base shadow-md rounded-lg hover:shadow-lg focus:shadow-outline outline-none py-3 px-6 md:py-2 md:px-4"
        @click="logout"
    >
        <span class="flex align-middle justify-center tracking-wider">
            <span
                class="font-sans font-bold text-primary-base text-base md:text-sm"
            >
                Logout
            </span>
        </span>
    </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('auth', ['attemptLogout']),
        logout() {
            this.attemptLogout()
                .then(() => {
                    this.$router.push('/');
                })
                .catch((error) => {
                    throw error;
                });
        }
    }
};
</script>
