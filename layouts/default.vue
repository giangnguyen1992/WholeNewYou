<template>
    <div>
        <NavigationSection />
        <nuxt />
        <FooterSection />
    </div>
</template>

<script>
import NavigationSection from '../components/nav/NavigationSection';
import FooterSection from '../components/footer/FooterSection';

export default {
    components: {
        NavigationSection,
        FooterSection
    }
};
</script>

<style></style>
