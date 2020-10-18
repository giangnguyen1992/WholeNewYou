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
                    Bei der Erstellung deines Kontos ist ein Problem
                    aufgetreten. Überprüfe bitte, ob du deine E-Mail-Adresse
                    korrekt eingegeben hast.
                </p>
            </div>
            <div class="flex flex-col mb-2">
                <label class="mb-px" for="name">Vorname</label>
                <input
                    id="name"
                    v-model.trim="credentials.name"
                    type="text"
                    name="name"
                    class="p-2 rounded-md border border-black focus:border-primary-base outline-none"
                    autofocus
                    required
                />
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
            <div class="flex items-center mb-4">
                <input
                    id="confirm-terms"
                    v-model="confirmTerms"
                    type="checkbox"
                    name="confirm-terms"
                    class="mr-2"
                    required
                />
                <label for="confirm-terms"
                    >Ja, ich habe die
                    <a
                        href="https://www.bloominglife.de/datenschutzerklaerung/"
                        class="text-black border-b hover:text-sec-light"
                        >Datenschutzvereinbarung</a
                    >
                    gelesen und bin damit einverstanden!</label
                >
            </div>
            <div class="flex flex-col text-center">
                <input
                    class="inline-block bg-primary-base rounded-lg shadow-button lg:hover:shadow-hoverButton focus:shadow-outline outline-none py-3 px-12 font-sans font-bold text-white text-base mb-4"
                    type="submit"
                    value="Registrieren"
                />
            </div>
        </form>
        <div class="text-center">
            <p>
                Du hast bereits ein Nutzerkonto?
                <nuxt-link
                    class="text-black border-b hover:text-sec-light"
                    to="/login"
                    >Anmelden</nuxt-link
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
                name: '',
                email: '',
                password: ''
            },
            confirmTerms: false,
            errors: false
        };
    },
    methods: {
        ...mapActions({
            attemptSignUp: 'auth/attemptSignUp'
        }),
        submitForm() {
            if (
                this.credentials.name &&
                this.credentials.email &&
                this.credentials.password &&
                this.confirmTerms
            ) {
                this.attemptSignUp(this.credentials)
                    .then((response) => {
                        this.credentials.name = '';
                        this.credentials.email = '';
                        this.credentials.password = '';
                        this.credentials.confirmTerms = false;

                        this.$router.push('/');
                    })
                    .catch((error) => {
                        this.errors = true;
                        console.log(error);
                    });
            } else {
                this.errors = true;
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
