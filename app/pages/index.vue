<script setup lang="ts">

import Landing from "~/layouts/landing.vue";
import LightBar from "~/components/LightBar.vue";
import Logo from "~/components/Logo.vue";

useSeoMeta({
    title: 'Vertex',
    ogTitle: 'CRTL Vertex',
    description: 'An open-sourced Markdown Editing Suite made by CRTL Prototype Studios.',
    ogImage: '/logo_nobg.png',
})

const userFeatures = [
    {
        title: "Versatility",
        description: "We have a variety of forms of editing that utilizes markdown's simple and powerful format to use. Such as" +
            " writing documents, writing books, even essays, and you can publish them in the Vertex Hub as well!",
        icon: "i-lucide-books"
    },
    {
        title: "Sharing",
        description: "For every document written in markdown in here, you can share with your friends through a secure, private link and" +
            " they can see the same results. You can also publish your documents for everyone to see.",
        icon: "i-lucide-hands"
    },
    {
        title: "Publishing",
        description: "If you want your work to be seen publicly, you can publish it to Vertex Hub, a place where writers or researchers" +
            " can post their novels and books and essays that are written in markdown.",
        icon: "i-lucide-publish"
    },
    {
        title: "Collaboration",
        description: "You can collaborate with your friends on writing your markdown documents through Vertex!",
        icon: "i-lucide-hands"
    }
]

</script>

<template>
    <landing>
        <div :class="`fixed inset-0 bg-gradient-to-br from-slate-700 via-primary-950 to-slate-950`">
            <Comets :comet-count="10" :comet-speed="1.5" />
        </div>
        <div class="relative min-h-screen overflow-auto">
            <section class="w-full min-h-screen flex items-center justify-center flex-col">
                <AtmosLightBar>
                    <div class="fade-in-from-top duration-300 text-center font-bold text-7xl flex items-center gap-5">
                        <Logo class="size-10"/>
                        <span class="bg-clip-text bg-gradient-to-br from-primary-300 via-purple-400 to-red-500 text-transparent">Vertex</span>
                    </div>
                </AtmosLightBar>
            </section>
            <section class="w-full min-h-screen flex items-center flex-col gap-5">
                <div class="text-center text-4xl font-bold">An Open-Sourced Markdown Editing Suite...</div>
                <div class="text-center text-2xl font-bold">For Users</div>
                <UCard :ui="{background: 'dark:bg-primary-700/10 dark:backdrop-blur-2xl', ring: 'dark:ring-4 dark:ring-slate-500/50'}">
                    <div class="">text heres</div>
                </UCard>
            </section>
        </div>
    </landing>
</template>

<style scoped>
div {
    font-family: DM Sans, sans-serif;
}
</style>