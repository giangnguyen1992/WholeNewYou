<template>
    <nav
        class="lg:px-8 md:px-8 sm:px-4 py-4 shadow-lg sticky top-0 w-full bg-white z-30"
        :class="{ collapsed: isCollapsed }"
        role="banner"
    >
        <div class="mx-auto max-w-5xl flex items-center justify-between">
            <BaseLogo />
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: false
        };
    },
    mounted() {
        this.$nuxt.$on('ON_SCROLL_DOWN', () => {
            this.onScrollDown();
        });

        this.$nuxt.$on('ON_SCROLL_UP', () => {
            this.onSrollPastTarget();
        });
    },
    methods: {
        onScrollDown() {
            this.isCollapsed = true;
        },
        onSrollPastTarget() {
            this.isCollapsed = false;
        }
    }
};
</script>

<style scoped>
nav,
figure {
    transition: transform 0.2s ease-out;
    transform-origin: left center;
}

#controls {
    transition: opacity 0.2s ease-out;
}

.collapsed {
    transform: translateY(-3rem);
}

.collapsed figure {
    transform: translateY(1.6rem) scale(0.6);
}

.collapsed #controls {
    opacity: 0;
}
</style>
