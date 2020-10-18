<template>
    <BaseSection class="flex flex-col">
        <BaseSectionHeadline class="text-center">
            Jetzt Registrieren!
        </BaseSectionHeadline>
        <SignInForm />
    </BaseSection>
</template>

<script>
import SignInForm from '~/components/SignInForm';

export default {
    components: {
        SignInForm
    }
};
</script>
