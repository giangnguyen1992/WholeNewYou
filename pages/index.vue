<template>
    <div>
        <HeroSection />
        <CustomerMatchingSection />
        <BenefitsSection />
        <CourseOverviewSection />
        <TimerSection />
        <AboutSection />
    </div>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import CustomerMatchingSection from '~/components/customerNeeds/CustomerNeedsSection';
import BenefitsSection from '~/components/benefits/BenefitsSection';
import CourseOverviewSection from '~/components/courseOverview/CourseOverviewSection';
import TimerSection from '~/components/timer/TimerSection';
import AboutSection from '~/components/about/AboutSection';

export default {
    components: {
        HeroSection,
        CustomerMatchingSection,
        BenefitsSection,
        CourseOverviewSection,
        TimerSection,
        AboutSection
    }
};
</script>

<style></style>
