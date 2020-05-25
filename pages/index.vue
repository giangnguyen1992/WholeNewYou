<template>
    <div>
        <HeroSection />
        <CustomerMatchingSection />
        <BenefitsSection />
    </div>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import CustomerMatchingSection from '~/components/customerNeeds/CustomerNeedsSection';
import BenefitsSection from '~/components/benefits/BenefitsSection';

export default {
    components: {
        HeroSection,
        CustomerMatchingSection,
        BenefitsSection
    }
};
</script>

<style></style>
