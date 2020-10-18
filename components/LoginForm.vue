<template>
    <div>
        <form
            class="flex flex-col font-sans text-sec-base pt-8 form-width"
            @submit.prevent="submitForm"
        >
            <div
                v-if="errors"
                class="bg-alert-box text-alert p-4 mb-4 self-center"
            >
                <p>
                    Bei der Anmeldung ist ein Problem aufgetreten. Überprüfe
                    bitte, ob du deine E-Mail-Adresse und dein Passwort korrekt
                    eingegeben hast, oder erstelle ein Konto.
                </p>
            </div>
            <div class="flex flex-col mb-2">
                <label class="mb-px" for="email">E-Mail Adresse</label>
                <input
                    id="email"
                    v-model.trim="credentials.email"
                    type="email"
                    name="email"
                    class="p-2 rounded-md border border-black focus:border-primary-base outline-none"
                    required
                    autofocus
                />
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-px" for="password">Passwort</label>
                <input
                    id="password"
                    v-model.trim="credentials.password"
                    type="password"
                    name="password"
                    class="p-2 rounded-md border border-black focus:border-primary-base outline-none"
                    required
                    minlength="6"
                    autocomplete="new-password"
                />
            </div>
            <div class="flex flex-col text-center">
                <input
                    class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12 font-sans font-bold text-white text-base mb-4"
                    type="submit"
                    value="Anmelden"
                />
            </div>
        </form>
        <div class="text-center">
            <p class="mb-2">
                oder
                <a class="text-black border-b hover:text-sec-light" href="#"
                    >Passwort vergessen</a
                >
            </p>
            <p>
                Du hast noch kein Nutzerkonto?
                <nuxt-link
                    class="text-black border-b hover:text-sec-light"
                    to="/signup"
                    >Registrieren</nuxt-link
                >
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            },
            errors: false
        };
    },
    methods: {
        ...mapActions({
            attemptLogin: 'auth/attemptLogin'
        }),
        submitForm() {
            if (this.credentials.email && this.credentials.password) {
                this.attemptLogin(this.credentials)
                    .then((response) => {
                        this.credentials.email = '';
                        this.credentials.password = '';

                        this.$router.push('/');
                    })
                    .catch((error) => {
                        this.errors = true;
                        console.log(error);
                    });
            }
        }
    }
};
</script>

<style scoped>
.form-width {
    width: 21rem;
}
</style>
