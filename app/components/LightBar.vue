<template>
    <div class="relative">
        <!-- Main light bar -->
        <div
            :class="['w-full h-1 rounded-full', positionClasses]"
            :style="{
        background: `linear-gradient(to right, ${startColor}, ${middleColor}, ${endColor})`,
        boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
      }"
        ></div>

        <!-- Glow effect -->
        <div
            :class="['absolute w-full h-8 -top-4 rounded-full', positionClasses]"
            :style="{
        background: `linear-gradient(to right, ${startColor}00, ${middleColor}40, ${endColor}00)`,
        filter: 'blur(8px)',
      }"
        ></div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    startColor: {
        type: String,
        default: '#f97316' // orange-500
    },
    middleColor: {
        type: String,
        default: '#a855f7' // purple-500
    },
    endColor: {
        type: String,
        default: '#3b82f6' // blue-500
    },
    glowColor: {
        type: String,
        default: 'rgba(168, 85, 247, 0.5)' // semi-transparent purple
    },
    position: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'bottom'].includes(value)
    }
})

const positionClasses = computed(() => {
    return props.position === 'top' ? 'top-0' : 'bottom-0'
})
</script>