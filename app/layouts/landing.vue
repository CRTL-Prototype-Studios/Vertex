<script setup lang="ts">

const headerLinks = [
    {
        label: 'About',
        to: '/#about',
        icon: 'i-lucide-info'
    },
    {
        label: 'Docs',
        to: 'https://docs.crtl-prototype-studios.cn',
        icon: 'i-lucide-book'
    }
]
</script>

<template>
    <div class="top-2 sticky w-full flex flex-row items-center justify-center h-fit gap-5 -mt-12 z-10">
        <div class="h-full rounded-lg backdrop-blur-2 p-2 flex gap-5">
            <UButton v-for="(link, index) in headerLinks" :key="index" variant="link" class="dark:text-white/90">
                <Icon :name="link.icon"/>{{link.label}}
            </UButton>
        </div>
    </div>
    <main>
        <slot/>
    </main>
</template>

<style scoped>
div {
    font-family: DM Sans, sans-serif;
}
</style>