<script setup lang="ts">

const headerLinks = [
    {
        label: 'About',
        to: '/#about',
        icon: 'i-lucide-information'
    },
    {
        label: 'Docs',
        to: 'https://docs.crtl-prototype-studios.cn',
        icon: 'i-lucide-document'
    }
]
</script>

<template>
    <div class="top-0 sticky w-full flex flex-row items-center justify-center h-fit gap-5">
        <nuxt-img src="/logo_nobg"/>
        <UHorizontalNavigation :links="headerLinks" />
    </div>
    <main>
        <slot/>
    </main>
</template>

<style scoped>

</style>