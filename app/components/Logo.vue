<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div :class="`${props.class} flex items-center justify-center`">
        <img src="/logo_nobg.png" class="object-contain"/>
    </div>
</template>

<style scoped>

</style>