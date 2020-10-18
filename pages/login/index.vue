<template>
    <BaseSection class="flex flex-col">
        <BaseSectionHeadline class="text-center">
            Logge dich ein!
        </BaseSectionHeadline>
        <LoginForm />
    </BaseSection>
</template>

<script>
import LoginForm from '~/components/LoginForm';

export default {
    components: {
        LoginForm
    }
};
</script>
