<template>
    <main>
        <HeroSection :hero="landingpage.hero" />
        <EmpathySection :empathy="landingpage.empathy" />
        <PreviewSection :preview="landingpage.preview" />
        <CustomerMatchingSection
            :customer-needs="landingpage.customerNeeds"
            :experienced="landingpage.experienced"
            :afterlife="landingpage.afterlife"
        />
        <BenefitsSection :benefits="landingpage.benefits" />
        <CourseOverviewSection :course-overview="landingpage.courseOverview" />
        <TimerSection :timer="landingpage.timer" />
        <ProductOverview :product-overview="landingpage.productOverview" />
        <BonusSection :bonus="landingpage.bonusmaterial" />
        <TestimonialsSection :testimonials="landingpage.testimonials" />
        <AboutSection
            :about="landingpage.about"
            :socials="landingpage.socials"
        />
        <FAQSection :faqs="landingpage.faqs" />
    </main>
</template>

<script>
import HeroSection from '~/components/hero/HeroSection.vue';
import EmpathySection from '~/components/EmpathySection.vue';
import CustomerMatchingSection from '~/components/customerNeeds/CustomerNeedsSection';
import BenefitsSection from '~/components/benefits/BenefitsSection';
import CourseOverviewSection from '~/components/courseOverview/CourseOverviewSection';
import AboutSection from '~/components/about/AboutSection';
import ProductOverview from '~/components/productOverview/ProductOverview';
import TimerSection from '~/components/timer/TimerSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import FAQSection from '~/components/FAQSection';
import PreviewSection from '~/components/PreviewSection';
import BonusSection from '~/components/BonusSection';

export default {
    components: {
        HeroSection,
        EmpathySection,
        CustomerMatchingSection,
        BenefitsSection,
        CourseOverviewSection,
        AboutSection,
        ProductOverview,
        TimerSection,
        TestimonialsSection,
        FAQSection,
        BonusSection,
        PreviewSection
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

<style>
mark {
    background-color: #fddf9a;
    color: #425966;
}
</style>
