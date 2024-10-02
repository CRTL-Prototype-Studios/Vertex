<template>
    <div class="relative p-[2px] overflow-hidden rounded-lg inline-block">
        <!-- Animated border -->
        <div
            class="absolute inset-0 rounded-lg animate-gradient-x"
            :style="[
        { background: `linear-gradient(90deg, ${colors.join(', ')})` },
        animationStyle
      ]"
        ></div>

        <!-- Card content -->
        <div class="relative bg-gray-800 rounded-lg p-6">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    duration: {
        type: Number,
        default: 6000 // 6 seconds
    },
    colors: {
        type: Array,
        default: () => ['#ff00ff', '#00ff00', '#0000ff', '#ff00ff']
    }
});

const animationStyle = computed(() => ({
    animationDuration: `${props.duration}ms`
}));
</script>

<style scoped>
@keyframes gradient-x {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x linear infinite;
}
</style>