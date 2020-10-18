<template>
    <div v-if="isLoading" class="loading-screen">
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('auth', ['isLoading'])
    }
};
</script>

<style scoped>
.loading-screen {
    width: 100%;
    height: 100vh;
    background-color: #2e2e2e;
    opacity: 0.9;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
}

.loading {
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

.loading span {
    width: 32px;
    height: 32px;
    background-color: red;
    margin: 4px;
    animation: scale 1.5s linear infinite;
}

@keyframes scale {
    50% {
        transform: scale(1.2);
    }
}

.loading span:nth-child(1) {
    border-radius: 50% 50% 0 50%;
    background-color: #e77f67;
    transform-origin: bottom right;
}

.loading span:nth-child(2) {
    border-radius: 50% 50% 50% 0;
    background-color: #9db5c4;
    transform-origin: bottom left;
    animation-delay: 0.5s;
}

.loading span:nth-child(3) {
    border-radius: 50% 0 50% 50%;
    background-color: #ffab9f;
    transform-origin: top right;
    animation-delay: 1.5s;
}

.loading span:nth-child(4) {
    border-radius: 0 50% 50% 50%;
    background-color: #fddf9a;
    transform-origin: top left;
    animation-delay: 1s;
}
</style>
