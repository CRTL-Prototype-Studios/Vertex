<template>
    <div class="relative">
        <h1
            :class="[
        'text-center font-bold',
        `text-${size}`,
        'overflow-hidden whitespace-nowrap border-r-4 border-white',
        'animate-typing',
        glowClass
      ]"
            :style="{
        animationDuration: `${text.length * 0.1}s`,
        animationTimingFunction: 'steps(' + text.length + ', end)',
      }"
        >
            {{ text }}
        </h1>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: '3xl'
    },
    glowColor: {
        type: String,
        default: '#ffffff'
    }
});

const glowClass = computed(() => {
    return `glow-${props.glowColor.replace('#', '')}`
});
</script>

<style scoped>
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink {
    50% { border-color: transparent }
}

.animate-typing {
    animation: typing, blink 0.7s step-end infinite alternate;
}

/* Add more glow classes for different colors as needed */
</style>