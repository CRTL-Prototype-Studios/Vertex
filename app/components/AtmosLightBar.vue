<template>
    <div class="relative w-full">
        <!-- Main light bar -->
        <div
            class="absolute left-0 right-0 h-px top-1/2 transform -translate-y-1/2"
            :style="{
        background: `linear-gradient(to right,
          transparent,
          ${startColor},
          ${middleColor},
          ${endColor},
          transparent
        )`,
      }"
        ></div>

        <!-- Glow effect -->
        <div
            class="absolute left-0 right-0 h-32 top-1/2 transform -translate-y-1/2"
            :style="{
        background: `linear-gradient(to bottom,
          transparent,
          ${glowColor}00 40%,
          ${glowColor}20 50%,
          ${glowColor}20 70%,
          ${glowColor}00 80%,
          transparent
        )`,
        filter: 'blur(8px)',
      }"
        ></div>

        <!-- Slot for content -->
        <div class="relative flex justify-center items-center py-4">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    startColor: {
        type: String,
        default: '#4169e1'
    },
    middleColor: {
        type: String,
        default: '#8a2be2'
    },
    endColor: {
        type: String,
        default: '#ff4500'
    },
    glowColor: {
        type: String,
        default: '#8a2be2'
    }
});
</script>