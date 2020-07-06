<template>
    <main>
        <HeroSection />
        <CustomerMatchingSection />
        <BenefitsSection />
        <CourseOverviewSection />
        <TimerSection />
        <AboutSection />
        <ProductOverview />
        <NewsletterSection />
    </main>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import CustomerMatchingSection from '~/components/customerNeeds/CustomerNeedsSection';
import BenefitsSection from '~/components/benefits/BenefitsSection';
import CourseOverviewSection from '~/components/courseOverview/CourseOverviewSection';
import AboutSection from '~/components/about/AboutSection';
import ProductOverview from '~/components/productOverview/ProductOverview';
import NewsletterSection from '~/components/newsletter/NewsletterSection';

export default {
    components: {
        HeroSection,
        CustomerMatchingSection,
        BenefitsSection,
        CourseOverviewSection,
        AboutSection,
        ProductOverview,
        NewsletterSection
    }
};
</script>

<style></style>
