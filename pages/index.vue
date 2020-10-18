<template>
    <main>
        <HeroSection :hero="landingpage.hero" />
        <CustomerMatchingSection :customer-needs="landingpage.customerNeeds" />
        <BenefitsSection :benefits="landingpage.benefits" />
        <CourseOverviewSection :course-overview="landingpage.courseOverview" />
        <AboutSection
            :about="landingpage.about"
            :socials="landingpage.socials"
        />
        <ProductOverview :product-overview="landingpage.productOverview" />
        <NewsletterSection :newsletter="landingpage.newsletter" />
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
    },
    async asyncData({ $axios }) {
        const landingpage = await $axios.get(`/.netlify/functions/landingpage`);

        if (landingpage.data) {
            return {
                landingpage: landingpage.data
            };
        }
    }
};
</script>

<style></style>
