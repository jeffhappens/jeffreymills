<script setup>
    import MainContainer from "./layout/MainContainer.vue"
</script>

<template>
    <main-container class="h-12 font-bold flex items-center justify-between">
        <p><router-link class="home" to="/">Portfolio.</router-link></p>
        <ul class="flex gap-5 font-normal text-gray-500">
            <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </main-container>
</template>

<style scoped>
    .router-link-active:not(.home) {
        @apply text-amber-500;
    }
</style>