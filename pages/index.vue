<template>
    <div>
        <HeroSection />
        <CustomerMatchingSection />
    </div>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import CustomerMatchingSection from '~/components/customerMatching/CustomerMatchingSection';

export default {
    components: {
        HeroSection,
        CustomerMatchingSection
    }
};
</script>

<style></style>
