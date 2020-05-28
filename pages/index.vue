<template>
    <div>
        <HeroSection />
        <CustomerMatchingSection />
        <BenefitsSection />
        <CourseOverview />
    </div>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import CustomerMatchingSection from '~/components/customerNeeds/CustomerNeedsSection';
import BenefitsSection from '~/components/benefits/BenefitsSection';
import CourseOverview from '~/components/courseOverview/CourseOverview';

export default {
    components: {
        HeroSection,
        CustomerMatchingSection,
        BenefitsSection,
        CourseOverview
    }
};
</script>

<style></style>
